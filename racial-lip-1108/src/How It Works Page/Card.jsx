import React from 'react';
import './HowItWork.css';
export default function Card({ data }) {
  return (
    <div className="card">
      {data.map((elem) => {
        return (
          <>
            <img src={elem.img.img_6} alt="" />
            <img src={elem.img.img_7} alt="" />
            <img src={elem.img.img_8} alt="" />
            <img src={elem.img.img_9} alt="" />
            <img src={elem.img.img_10} alt="" />
          </>
        );
      })}
    </div>
  );
}
