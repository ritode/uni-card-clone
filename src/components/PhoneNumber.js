import "./phonenum.css";
import { useState } from "react";
export default function PhoneNumber({ type }) {
  const [inputValue, setInputValue] = useState("");

  // Determine which icon to display based on the input value
  const getIcon = () => {
    console.log(inputValue.length === 10, inputValue.startsWith("9"));
    if (inputValue.length === 10 && inputValue.startsWith("9")) {
      return "./images/tick.svg";
    } else if (inputValue.length < 10) {
      return "./images/cross.svg";
    } else if (!inputValue.startsWith("9")) {
      return "./images/error.svg";
    }
  };
  return (
    <div className={type === "inline" ? "form-ctn" : "footer-ctn"}>
      <div>
        <form className="ph-num-ctn">
          <div className="ph-input">
            <input
              type="number"
              id="numberInput"
              name="numberInput"
              min="1"
              max="10"
              pattern="\d{1,10}"
              value={inputValue}
              onChange={(e) => {
                if (e.target.value.length <= 10) setInputValue(e.target.value);
              }}
            />
            {inputValue && <img src={getIcon()} alt="icon" />}
          </div>
          <button className="apply-btn">Apply Now</button>
        </form>
        <div className="permission">
          <input
            type="checkbox"
            id="permission-checkbox"
            name="permission-checkbox"
          />
          <label>
            You agree to be contacted by Uni Cards over Call, SMS, Email or
            WhatsApp to guide you through your application.
          </label>
        </div>
      </div>
    </div>
  );
}
