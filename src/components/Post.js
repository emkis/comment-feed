import React from "react";

import Comment from "./Comment";

function Post({ post }) {
  const { date, content, author, comments } = post;

  return (
    <li className="post__item">
      <div className="post__wrapper">
        <div className="post__head">
          <img className="user__avatar" src={author.avatar} alt="User photo" />

          <div className="post__info">
            <div className="user__name">{author.name}</div>
            <div className="post__date">{date}</div>
          </div>
        </div>
        <p className="post__content">{content}</p>
      </div>

      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </li>
  );
}

export default Post;
