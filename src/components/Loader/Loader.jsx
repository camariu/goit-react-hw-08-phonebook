import React from 'react';
import {Circles } from 'react-loader-spinner';
import style from "./Loader.module.css"
 

export default function Loader() {
  return (
    <div className={style.loader}>
     <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  );
}