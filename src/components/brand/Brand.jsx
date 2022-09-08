import React from 'react';
import './brand.css';
import {google,slack,atlassian,dropbox,shopify} from './import';
const Brand = () => {
  return (
    <div className='gpt3__brand section__padding '>
      <div>
        <img src={google} alt="google" srcset="" />
        <img src={slack} alt="slack" srcset="" />
        <img src={atlassian} alt="altassian" srcset="" />
        <img src={dropbox} alt="dropbox" srcset="" />
        <img src={shopify} alt="shopify" srcset="" />
      </div>
    </div>
  );
}

export default Brand;