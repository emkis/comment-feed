import React from 'react'

function Comment({ comment }) {
  const { author, date, content } = comment

    return (
      <div className="comment">
        
        <div className="comment__head">
          <img className="user__avatar" src={ author.avatar } alt="User avatar"/>

          <div className="comment__info">
            <div className="user__name">{ author.name }</div>
            <div className="comment__date">{ date }</div>
          </div>
        </div>

      <p className="comment__content">{ content }</p>
      </div>
    )
  }

export default Comment