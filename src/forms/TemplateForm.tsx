import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const IMAGE_RATIO = 1.41;
const TemplateForm = () => {
  //TODO: implement a list with all the supported templates
  //TODO: read the names of the templates from the templates list
  //each slide should have a scale 1.5 or 2 on hover
  //on click it should have a border (marked selected) and update the state

  const [color, setColor] = useState('fff');

  return (
    <div className="TemplateForm">
      <div>
        <h1>Choose a template</h1>
      </div>
      <Swiper
        spaceBetween={10}
        direction="horizontal"
        width={90}
        slidesPerView={"auto"}
      >
        <SwiperSlide style={{width: '100px', height:'141px'}}>
          <div style={{ display: "block", width: "100px", height: "141px" }}>
            <img src={'/images/cv-thumbnails/basic-1.jpg'} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{width: '100px', height:'141px'}}>
          <div style={{ display: "block", width: "100px", height: "141px" }}>
            <img src={'/images/cv-thumbnails/basic-3.jpg'} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{width: '100px', height:'141px'}}>
          <div style={{ display: "block", width: "100px", height: "141px" }}>
            <img src={'/images/cv-thumbnails/nice-1.jpg'} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{width: '100px', height:'141px'}}>
          <div style={{ display: "block", width: "100px", height: "141px" }}>
            <img src={'/images/cv-thumbnails/nice-3.jpg'} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{width: '100px', height:'141px'}}>
          <div style={{ display: "block", width: "100px", height: "141px" }}>
            <img src={'/images/cv-thumbnails/nice-9.jpg'} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <h3>Pick accent color:</h3>

        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
};

export default TemplateForm;
