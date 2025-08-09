import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./styles/TemplateForm.scss";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

const IMAGE_RATIO = 1.41;
const TemplateForm = () => {
  //TODO: implement a list with all the supported templates
  //TODO: read the names of the templates from the templates list
  //each slide should have a scale 1.5 or 2 on hover
  //on click it should have a border (marked selected) and update the state

  const [color, setColor] = useState('#086dfb');

  return (
    <div className="TemplateForm">
      <div className="TemplateForm__heading">
        <h1>Choose a template</h1>
      </div>
      <Swiper
        className="TemplateForm__swiper"
        spaceBetween={20}
        direction="horizontal"
        slidesPerView={'auto'}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/basic-1.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/basic-3.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/nice-1.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/nice-3.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/nice-9.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/basic-1.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/basic-1.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/basic-1.jpg'} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/basic-1.jpg'}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={'/images/cv-thumbnails/basic-1.jpg'}/>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="TemplateForm__color-picker">
        <h3>Pick accent color:</h3>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </div>
  );
};

export default TemplateForm;
