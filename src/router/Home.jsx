import {useState, useRef} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import data from '../data.js';
import { CiHeart } from "react-icons/ci";


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Home = () => {
    let [shoppingData] = useState(data);
    console.log(shoppingData)
    const [swiperIndex, setSwiperIndex]=useState(0);
    const sliderRef=useRef(null)
    const handleNext = () =>{
        if(sliderRef.current){
            sliderRef.current.slideNext()
        }
    }
    const handlePrev = () =>{
        if(sliderRef.current){
            sliderRef.current.slidePrev()
        }
    }
    return (
        <div className='home'>
           <div className="mainslider" /* style={{backgroundImage:'url('+ bg + ')'}} */>
                <Swiper 
                navigation={true} 
                modules={[Navigation, Autoplay]} 
                className="mySwiper" 
                loop={true} 
                autoplay={{ delay: 2000, disableOnInteraction: false }}>

                <SwiperSlide><img src="/img/bg01.jpg" alt="1" /></SwiperSlide>
                <SwiperSlide><img src="/img/bg02.jpg" alt="2" /></SwiperSlide>
                <SwiperSlide><img src="/img/bg03.jpg" alt="3" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="descript">
                <h2>아뜨랑스는</h2>
                <p>
                    화면너머의 여러분에게 따뜻한 쇼핑메이트이고 싶습니다. <br />
                    일상에 스며드는 실용적인 옷들부터 <br />
                    가장 빛이 나야하는 순간까지 언제나 함께 하겠습니다. <br />
                </p>

                <div className="bannerSlider">
                    <div className="swiper-pagination1">
                        <span>{swiperIndex + 1}</span>
                        <span>/</span>
                        <span>10</span>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                       
                        modules={[Pagination, Navigation, Autoplay]}
                        onSwiper={(swiper)=>(sliderRef.current=swiper)}
                        onSlideChange={(swiper)=> setSwiperIndex(swiper.realIndex)}
                        className="mySwiper bannerSwiper"
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                    >
                        
                        {
                            shoppingData.map((data, i) => {
                                return (
                                    <SwiperSlide key={data.id}>
                                        <div className="decWrap">
                                            <img src={data.imgs} alt={data.title} />
                                            <span className="text">{data.title}</span>
                                        </div>
                                    </SwiperSlide>
                                )   
                                
                            })
                        }
                    </Swiper>
                    <div className="swiper_btn">
                        <div className="swiperPrevBtn" onClick={handlePrev}><IoIosArrowBack /></div>
                        <div className="swiperNextBtn" onClick={handleNext}><IoIosArrowForward/></div>
                    </div>
                </div>
            </div>
            <div className="specialPrice">
                <p>오늘이 제일 싸요<CiHeart />아뜨데이 특가</p>
                <h2>🌈내일되면 다시 가격 올라요!</h2>
                <div className="specialPriceWrap">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="/img/list1_68ffc51acebd9.gif" alt="" />
                                <div className="special">단 하루! <span>아뜨데이 앵콜특가</span></div>
                                <div className="discountWrap">
                                    <span className="discount">48%</span>
                                    <span className="prevdiscount">39,000</span>
                                    <span className="nextdiscount">20,300</span>
                                </div>
                                <div className="coupon">
                                    <img src="/img/coupon.png" alt="" />
                                    <span>쿠폰 적용가</span>
                                </div>
                                <div className="specialDesc">
                                    [울함유] (R넥&V넥/숏&롱/취향맞춤/온도까지예쁜♥) 쉐이드 2기장 라운드넥 V넥 울 니트
                                </div>
                                <div className="seller">
                                    아뜨랑스
                                </div>
                                <div className="color">
                                    <span></span>
                                </div>
                                <div className="specialBest">
                                    <span>Best</span><span>부분 오늘 출발</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;