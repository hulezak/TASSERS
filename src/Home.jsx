import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import {img} from './img/img'; // Ensure this path is correct
import classes from './carousel.module.css'; // Make sure the CSS module file is correct
import { Link } from 'react-router-dom';

const Home = () => {
    console.log(img)
  return (
    <div>
          <div className={classes.carousel}>
      <Carousel  
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        swipeable={true}
      >
        {img.map((imageItem, index) => (
          <div key={index}>
            <img src={imageItem} alt={`Slide ${index + 1}`} className={classes.carouselImage} />
          </div>
        ))}
      </Carousel>
      <div className={classes.hero__img}></div>

    
    </div>
           <div className={classes.footer_links}>
    <Link to='/form'>Form</Link>
    <Link to='/'>Home</Link>
    <Link to='/students'>Students</Link>
    <Link to='/team'>team</Link>
          </div>
          
          </div>

  
  );
};

export default Home;
