import React from 'react'

const Post = ({trello}) => {
  return (
    <>
    {
      trello ? <div> trello post </div> : (<div>Post</div>)
    }
    </>
  )
}

export default Post