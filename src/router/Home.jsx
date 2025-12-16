import {useState, useRef} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import data from '../data.js';
import { CiHeart } from "react-icons/ci";
import './Home.scss';
import specialPriceData from './specialPriceData.js'


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Home = () => {
    let [shoppingData] = useState(data);
    let [sData] = useState(specialPriceData);
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
                        {
                            sData.map((sh, i)=>{
                                return(
                                    <li key={sh.id}>
                                        <a href="#">
                                            <img src={sh.imgs} alt={sh.desc} />
                                            
                                            <div className="discountWrap">
                                                <span className="discount">{sh.discount}</span>
                                                <span className="prevdiscount">{sh.prevdiscount}</span>
                                                <span className="nextdiscount">{sh.nextdiscount}</span>
                                            </div>
                                            <div className="coupon">
                                                <img src="/img/coupon.png" alt="" />
                                                <span>쿠폰 적용가</span>
                                            </div>
                                            <div className="specialDesc">
                                                {sh.desc}
                                            </div>
                                            <div className="seller">
                                                {sh.seller}
                                            </div>
                                            <div className="color">
                                                <span></span>
                                            </div>
                                            <div className="specialBest">
                                                <span>Best</span>
                                                <span className='w'>{sh.specialBest}</span>
                                            </div>
                                            <div className="reviewWrap">
                                                <div>
                                                    <div className="reviewText">{sh.reviewText}</div>
                                                    <div className="reviewNum">{sh.reviewNum}</div>
                                                </div>
                                                <div>
                                                    <div className="heart"><img src="/img/like.png" alt="heartImg" /></div>
                                                    <div className="cart"><img src="/img/cart.png" alt="cartImg" /></div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })
                        };
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;