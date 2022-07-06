import React from "react";
import ProfileAvatar from "../../ProfileAvatar";
import TimeAgo from "react-timeago";

const MessageItem = ({ message }) => {
  const { author, createdAt, text } = message;
  return (
    <li className="padded mb-1">
      <div className="d-flex align-items-center font-bolder mb-1">
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          size="xs"
          className="ml-1"
        />
        <span className="ml-2">{author.name}</span>
        <TimeAgo date={createdAt} className="font-normal text-black-45 ml-2" />
      </div>
      <div>
        <span className="word-break-all">{text}</span>
      </div>
    </li>
  );
};

export default MessageItem;