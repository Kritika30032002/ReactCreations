/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Feed.css";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import InputOption from "../inputOption/InputOption";
import Post from "../feedPost/Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title="Article" color="#7FC15E" />
        </div>
      </div>

      {/* Post */}
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Pritam Roy"
        description="web developer"
        message="This is my First post....."
      />
      <Post
        name="Ayush Ranjan"
        description="This is a test"
        message="Hi how are you ?"
      />
      <Post
        name="Dhananjay Kar"
        description="This is a test"
        message="This is my first post"
      />
      <Post
        name="Sounak Kumar"
        description="This is a test"
        message="WOW this worked"
      />
    </div>
  );
}

export default Feed;
