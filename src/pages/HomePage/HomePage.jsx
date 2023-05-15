import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Whatsap from "../../assets/images/svg/whatsapp.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
import firstImage from "../../assets/images/others/first.png";
import iPhoneImage from "../../assets/images/others/Blue.png";
import ThirdImage from "../../assets/images/others/third.png";
import YoutubeLogo from "../../assets/images/others/youtube.png";
import LineVerticalImage from "../../assets/images/others/2.png"
import Lines from "@/assets/images/icons/Lines";
import Head from "next/head";
export default function HomePage() {
  return (
    <React.StrictMode>

        <Head>
            <title>Task Page</title>
        </Head>

      <section className="container mx-auto max-w-screen-lg z-[200] h-96">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center gap-3 pt-20">
                <div className="absolute top-64 left-32">
                    <Lines />
                </div>
                <div className="absolute top-72 right-56">
                    <Image src={YoutubeLogo} alt="" />
                </div>
                <div className="absolute top-20 right-16">
                    <Image src={LineVerticalImage} alt="" />
                </div>
              <h1 className="text-5xl font-extrabold">Summarize
              <span className="youtube"> Youtube </span>
                Video</h1>
              <p className="text-gray200 text-base">
                Send a video and transform to short text
              </p>
              <button className="flex items-center gap-3 whatsapp__btn px-5 py-2.5 rounded-sm">
                <Image src={Whatsap} alt="" />
                Open in whatsapp
              </button>

              <div className="flex flex-row items-center gap-20 mt-10">
                <div>
                  <Image src={firstImage} alt="" />
                </div>
                <div>
                  <Image src={iPhoneImage} alt="" />
                </div>
                <div>
                  <Image src={ThirdImage} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-3 pt-20">
                <div className="absolute top-64 left-32">
                    <Lines />
                </div>
                <div className="absolute top-72 right-56">
                    <Image src={YoutubeLogo} alt="" />
                </div>
                <div className="absolute top-20 right-16">
                    <Image src={LineVerticalImage} alt="" />
                </div>
              <h1 className="text-5xl font-extrabold">Ai
              <span className="image"> Image </span>
                Generation</h1>
              <p className="text-gray200 text-base">
                You can give it prompts, and it uses AI to generate images
              </p>
              <button className="flex items-center gap-3 whatsapp__btn2 px-5 py-2.5 rounded-sm">
                <Image src={Whatsap} alt="" />
                Open in whatsapp
              </button>

              <div className="flex flex-row items-center gap-20 mt-10">
                <div>
                  <Image src={firstImage} alt="" />
                </div>
                <div>
                  <Image src={iPhoneImage} alt="" />
                </div>
                <div>
                  <Image src={ThirdImage} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center gap-3 pt-20">
                <div className="absolute top-64 left-32">
                    <Lines />
                </div>
                <div className="absolute top-72 right-56">
                    <Image src={YoutubeLogo} alt="" />
                </div>
                <div className="absolute top-20 right-16">
                    <Image src={LineVerticalImage} alt="" />
                </div>
              <h1 className="text-5xl font-extrabold">Transcribe
              <span className="voice">
              &#160;Voice 
              </span>
               -Notes</h1>
              <p className="text-gray200 text-base">
              You can send voice notes, and it will transcribe them
              </p>
              <button className="flex items-center gap-3 whatsapp__btn3 px-5 py-2.5 rounded-sm">
                <Image src={Whatsap} alt="" />
                Open in whatsapp
              </button>

              <div className="flex flex-row items-center gap-20 mt-10">
                <div>
                  <Image src={firstImage} alt="" />
                </div>
                <div>
                  <Image src={iPhoneImage} alt="" />
                </div>
                <div>
                  <Image src={ThirdImage} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </React.StrictMode>
  );
}
