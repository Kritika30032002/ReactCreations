import React from 'react'
import '../components-css/Banner.css'
import bannerimg from '../assets/banner22.jpg';

function Banner() {
    return (
        <>
            <div className='main-ad'>
              <img src={bannerimg} alt="" className='bannerimg'/>
              <div className='main-ad-div'>
                <div className='main-ad-div-ns'>
                  <p className='main-ad-div-title'>Let food be thy medicine and medicine be thy food</p>
                  <p style={{display: 'flex', justifyContent: 'flex-end'}}><span><strong>~Little Lemon</strong></span></p>
                  <div >
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quia eaque ratione! Veritatis dolor debitis ab saepe unde excepturi ipsa quasi facilis.</p>
                  </div>
                  <button className='main-ad-btn'>Go to menu
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{height : '22px'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}

export default Banner
