import {
  Box,
  Button,
  Heading,
  HStack,
  Textarea,
  Input,
} from "@chakra-ui/react";
import PostsLists from "components/post/PostsList";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts, useAddEvent } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const {
    register: event,
    handleSubmit: handelEventSubmit,
    reset: resetEvent,
  } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { addEvent, isLoading: addingEvent } = useAddEvent();
  const { user, isLoading: authLoading } = useAuth();
  console.log(user);
  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }
  function handleAddEvent(data) {
    addEvent({
      uid: user.id,
      text: data.text,
      eventDate: data.eventDate,
    });
    resetEvent();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="teal"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          minRows={3}
          {...register("text", { required: true })}
        />
      </form>
      <form onSubmit={handelEventSubmit(handleAddEvent)}>
        {user?.ngo && (
          <div>
            <HStack justify="space-between" mt="5">
              <Heading size="lg">New Event</Heading>
              <Button
                colorScheme="teal"
                type="submit"
                isLoading={authLoading || addingPost}
                loadingText="Loading"
              >
                Post
              </Button>
            </HStack>
            <Textarea
              as={TextareaAutosize}
              resize="none"
              mt="5"
              placeholder="Create a new post..."
              minRows={3}
              {...event("text", { required: true })}
            />
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              mt="2"
              {...event("eventDate", { required: true })}
            />
          </div>
        )}
      </form>
    </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <PostsLists posts={posts} />
    </>
  );
}
