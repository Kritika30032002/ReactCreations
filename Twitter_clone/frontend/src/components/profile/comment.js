import React from "react";
import { Text } from "../styles/profile";
import { ActivityBox, ActivityIcon } from "../styles/common";
import Icon from "../icon";

const commentPath = [
  "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z",
];

const Comment = (props) => {
  const { tweets, tweet, idx, updateDetails, myId, getData, onClick } = props;
  return (
    <ActivityBox
      hoverColor="rgb(29,161,242)"
      hoverBg="rgba(29,161,242,0.1)"
      onClick={onClick}
    >
      <ActivityIcon>
        <Icon
          d={commentPath}
          width="18.75px"
          height="18.75px"
          fill="rgb(101, 119, 134)"
        />
      </ActivityIcon>
      <Text color="rgb(101, 119, 134)">{tweet["Tweets.commentsCount"]}</Text>
    </ActivityBox>
  );
};

export default Comment;
