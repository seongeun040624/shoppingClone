import React from 'react';
import { FaSnowflake } from "react-icons/fa6";
import { BsTreeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header className="header">
          <div className='headerL'>
            <h1><Link to="/">ATTRANGS</Link></h1>
            <nav>
              <ul>
                <li><Link to ="/Best" className='b'>BEST</Link></li>
                <li><Link to ="/New" className='g b'>NEW</Link></li>
                <li><Link to ="/Winter" className='n b'>겨울마중 <FaSnowflake style={{color:'skyblue'}} /></Link></li>
                <li><Link to ="/" className='n b'>하객룩</Link></li>
                <li><Link to ="/" className='n b'>연말룩 <BsTreeFill style={{color:'green'}}/></Link></li>
                <li><Link to ="/" className='b'>MADE</Link></li>
                <li><Link to ="/" className='b'>오늘의 할인</Link></li>
                <li><Link to ="/">아우터</Link></li>
                <li><Link to ="/">원피스</Link></li>
                <li><Link to ="/">니트</Link></li>
                <li><Link to ="/">티셔츠</Link></li>
              </ul>
            </nav>
          </div>
          <div className="gnb">
            <ul>
              <li><a href="#">로그인</a></li>
              <li><a href="#">즐겨찾기</a></li>
              <li><a href="#">KOR</a></li>
            </ul>
          </div>
        </header>
    );
};

export default header;