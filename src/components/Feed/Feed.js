import React from 'react';
import Post from './Post';

const Feed = (props) => {
  return (
    <div>
       {props.allPosts.map((post) => {
         return (
           <Post 
             key={Math.floor(Math.random() * 1000000000)}
             displayName={post.displayName}
               username = {post.username}
               verified={post.verified}
               text={post.text}
               avatar={post.avatar}
               image={post.image}
             />
         );
       })}
      </div>
  )
}

export default Feed;