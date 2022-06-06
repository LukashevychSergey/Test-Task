import React from 'react';
// import main from '../images/main.jpeg';

function ImageBlock() {
  return (
    <div className="image">
      <div className="image__block">
        <div className="image__block__h">
          <h1>Test assignment for front-end developer</h1>
        </div>
        <div className="image__block__p">
          <p>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
        </div>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default ImageBlock;
