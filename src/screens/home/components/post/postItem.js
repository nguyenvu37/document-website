import React from 'react';

const PostItem = ({ title, data }) => {
  const renderData =
    data &&
    data.length > 0 &&
    data.map((item) => (
      <div className="post-item__content" key={item.id}>
        <div className="post-item__content__image mr-2">
          <img src={item.image} alt="" />
        </div>
        <div className="post-item__content__title">
          <p className="title-post">{item.title}</p>
          <div className="date">
            <i className="far fa-clock"></i>
            {item.createdAt}
          </div>
        </div>
      </div>
    ));
  return (
    <div className="post-item">
      <div className="post-item__title title">
        <p className="text-uppercase">{title}</p>
      </div>
      {renderData}
    </div>
  );
};

export default PostItem;
