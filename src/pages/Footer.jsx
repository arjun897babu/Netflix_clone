import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='p-1 bg-neutral-700' />
      <footer className="bg-black  p-24">
        <p className='text-base font-Nsans-Light text-gray-400 '>Questions? Call <span className='underline'>000-800-919-1694</span>  </p>
        <div className="grid grid-cols-4 mt-8">
          <div className=" ">
            <ul className='leading-10 capitalize text-sm underline text-gray-400'>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Speed Test</a></li>
            </ul>
          </div>
          <div className=" ">
            <ul className='leading-10 capitalize text-sm underline text-gray-400'>
              <li><a href="#">help centre</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">cookie preferences</a></li>
              <li><a href="#">legal notices</a></li>
            </ul>
          </div>
          <div className=" ">
            <ul className='leading-10 capitalize text-sm underline text-gray-400'>
              <li><a href="#">account</a></li>
              <li><a href="#">Ways to Watch</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">only on netfix</a></li>
            </ul>
          </div>
          <div className=" ">
            <ul className='leading-10 capitalize text-sm underline text-gray-400'>
              <li><a href="#">media center</a></li>
              <li><a href="#">terms of use</a></li>
              <li><a href="#">contact us</a></li>
            </ul>
          </div>
        </div>


      </footer>
    </>
  );
};

export default Footer;