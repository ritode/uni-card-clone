import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState, useRef, useEffect } from "react";
import PhoneNumber from "./components/PhoneNumber";

function App() {
  const [showComponent, setShowComponent] = useState();
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (targetRef.current) {
        const targetBottom = targetRef.current.getBoundingClientRect().bottom;
        if (targetBottom < 0) {
          setShowComponent(true);
        } else setShowComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetRef]);

  return (
    <div className="App">
      <Header />
      <Hero ref={targetRef} />
      <Body />
      {showComponent && <PhoneNumber type="footer" />}
    </div>
  );
}

export default App;
