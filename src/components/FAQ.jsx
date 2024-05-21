import React, { useState } from 'react';
import { plus, minus } from "../assets";

const FAQ = () => {
  // State to manage the open/closed state of each question
  const [isOpen, setIsOpen] = useState(new Array(6).fill(false));

  // Function to toggle the open/closed state of a question
  const toggleQuestion = (index) => {
    setIsOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="max-w-md mx-auto">
      {/* FAQ Questions */}
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="border-b border-gray-300 lg:py-6 md:py-5 sm:py-5 py-4 lg:w-[500px] md:w-[500px] w-[330px]">
          {/* Question */}
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleQuestion(index)}>
            <h2 className="text-[10px] lg:text-[20px] md:text-[16px] font-semibold">Can i incorporate my Hub on the map?{index + 1}</h2>
            <img className="text-gray-500 xs:w-[15px] xs:h-[15px]" src={isOpen[index] ? minus : plus } alt={isOpen[index] ? minus : plus} />
          </div>
          {/* Answer (conditionally rendered based on isOpen state) */}
          {isOpen[index] && (
            <p className="text-gray-700 font-normal text-[9px] leading-[20px] sm:text-[12px] sm:leading-[23px] lg:text-[16px] lg:leading-[28px] md:text-[14px] md:leading-[25px] mt-2">
              Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.  
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
