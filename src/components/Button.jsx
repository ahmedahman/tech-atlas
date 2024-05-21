import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-[10px] px-9 font-montserrat font-medium text-[12px] lg:text-[16px] text-white bg-secondary hover:text-secondary hover:bg-black rounded-full outline-none ${styles}`}>
    Get Started
  </button>
);

export default Button;
