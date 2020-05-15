import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Contactimg from '../../asserts/images/contactUs.jpg'
import '../body/body.scss'
export default()=>{

    return(

<>
<div className="container-fluid">
    <div className="container">
<div class="d-flex align-items-center intro-section slider-margin" id="home-section">
   <div>
        <div className="container-fluid">
            <div className="container container-width">
            <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center slide-para">
                      <div className="carousel-outer">
                  <Carousel
                      autoPlay={true}
                    infiniteLoop={true}
                     transitionTime={500}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    emulateTouch={true}
                 interval={5000}
                >
                    <div>
                    
                    <h1>Hello</h1>
                    <p>this text has to slide</p>
                    
                    </div>
                    <div>
                    
                    <h1>Hello</h1>
                    <p>this text has to slide</p>
                    
                    </div>
                    </Carousel>
                    </div>
                  </div>
                  
                  <div className="slide-image-div">
                  <div className="carousel-outer carusal-main">
                  <Carousel
                      autoPlay={true}
                    infiniteLoop={true}
                     transitionTime={500}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    emulateTouch={true}
                 interval={5000}
                >
                    <div className="">
                    <img className="image" src={Contactimg} alt="not found"/>
                   
                    </div>
                    <div className="">
                    <img className="image" src={Contactimg} alt="not found"/>
                    </div>
                  </Carousel>
                  </div>
                  </div>
            </div>
        </div>
   </div>
</div>

</div>
</div>
</div>
</>


    );
}
















