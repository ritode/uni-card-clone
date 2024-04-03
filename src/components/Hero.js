import Header from "./Header";
import "./hero.css"
export default function Hero() {
    return (
        <>
        <Header/>
      <div className="hero">
        <div className="text">
          <h1><b>NX Wave. </b>The next-gen credit card for those who love rewards.</h1>
          <p className="font-medium text-sm md:text-base md:mb-9">
            1% Cashback
            <svg className="mx-[8px] mb-[2px] inline leading-5" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ mixBlendMode: 'darken' }}>
              <path d="M6 0 1.273 4.727 0 6l1.273 1.273L6 12l4.727-4.727L12 6l-1.273-1.273L6 0Z" fill="#000"></path>
            </svg>
            5× Rewards
            <svg className="mx-[8px] mb-[2px] inline leading-5" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ mixBlendMode: 'darken' }}>
              <path d="M6 0 1.273 4.727 0 6l1.273 1.273L6 12l4.727-4.727L12 6l-1.273-1.273L6 0Z" fill="#000"></path>
            </svg>
            Zero Forex Markup
          </p>
        </div>
        <img src="./images/nx_wave_hero.png" alt="card-asset" />
      </div>
      <video src="./images/nxt_wave_bg.mp4" autoPlay muted loop playsInline/>
      </>
    );
  }
  