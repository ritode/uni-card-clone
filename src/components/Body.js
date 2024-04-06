import "./body.css";
import { useState, useRef, useEffect } from "react";
export default function Body() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null); // Reference to the container of text lines

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element is in view
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  return (
    <div className="body">
      <section className="body-top-section" ref={textRef}>
        <div className="sec-1">
          <p className={`textLine ${isVisible ? "isVisible" : ""}`}>
            Earn 1% assured cashback{" "}
            <span className="grey">on your spends. Get </span> 5X
          </p>
          <p className={`textLine ${isVisible ? "isVisible" : ""}`}>
            more value than cashback{" "}
            <span className="grey">at the Uni Store. Enjoy</span>{" "}
          </p>
          <p className={`textLine ${isVisible ? "isVisible" : ""}`}>
            <span className="grey">round the clock</span> Whatsapp support.
            <span className="grey">And it's</span>{" "}
          </p>
          <p className={`textLine ${isVisible ? "isVisible" : ""}`}>
            lifetime free;{" "}
            <span className="grey">no joining fee, no annual charges.</span>
          </p>
        </div>
        <div className="arrow">
          <div className={`arrow-bg ${isVisible ? "isVisible" : ""}`}>
            <img src="./images/down_arrow.svg" alt="down arrow" />
          </div>
        </div>
      </section>
      <section className="body-section">
        <div className="ctn">
          <img src="./images/one_percent_cashback.png" alt="1% cashback" />
          <div className="text">
            <span className="black">1% assured cashback on your spends.</span>
            <span className="grey">The more you spend, the more you earn.</span>
            <p>
              Not applicable on fuel purchase, rent & wallet transfers, ATM
              withdrawals & international transactions.
            </p>
          </div>
        </div>
        <div className="ctn">
          <img src="./images/five_x_rewards.png" alt="5x rewards" />
          <div className="text">
            <span className="black">5x more value than your cashback, </span>
            <span className="grey">only at the Uni Store.</span>
          </div>
        </div>
        <div className="ctn">
          <img src="./images/forex_globe.png" alt="globally 0 forex" />
          <div className="text">
            <span className="black">Zero Forex Markup. </span>
            <span className="grey">Go international, without any fees.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
