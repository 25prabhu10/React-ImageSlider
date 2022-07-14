import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "./BtnSlider.css";

export const BtnSlider = ({ direction, handleClick }) => {
  return (
    <button
      className={`btn ${direction === "next" ? "next" : "prev"}`}
      onClick={handleClick}>
      {direction === "next" ? <GrLinkNext /> : <GrLinkPrevious />}
    </button>
  );
};
