import React from 'react';
import PostItem from './postItem';

const Post = ({ title, data }) => {
  return (
    <div className="post">
      <PostItem title={title} data={data} />
    </div>
  );
};

export default Post;
