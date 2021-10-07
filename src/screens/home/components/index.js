import React from 'react';
import SearchInput from './searchInput';
import Post from './post/index';
import { dataPost } from 'mockData';
import IMAGES from './../../../themes/index';

const HomePage = () => {
  const renderPost =
    dataPost &&
    dataPost.length > 0 &&
    dataPost.map((item) => (
      <div className="col-lg-4 col-md-6" key={item.id}>
        <Post title={item.title} data={item.content} />
      </div>
    ));
  return (
    <div className="main">
      <div className="container">
        <div className="search">
          <SearchInput />
        </div>

        <div className="post-card">
          <div className="row">{renderPost}</div>
        </div>

        {/* Start advertisement */}
        <div className="advertisement">
          <img src={IMAGES.advertisement} alt="" />
        </div>
        {/* End advertisement */}

        <div className="post-card">
          <div className="row">{renderPost}</div>
        </div>

        {/* Start advertisement */}
        <div className="advertisement">
          <img src={IMAGES.advertisement2} alt="" />
        </div>
        {/* End advertisement */}
      </div>
    </div>
  );
};

export default HomePage;
