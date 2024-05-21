import styles from "../style";
import Button from "./Button";
import { avatars } from "../assets";


const CTA = () => (
  <section className={`flex justify-center items-center my-10 py-6 md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className={`flex justify-center items-center flex-1 flex-col`}>
      <img src={avatars} alt="avatars" className="w-[110px] h-[50px]" />
      <h2 className={`font-semibold text-[13px] text-black leading-[15px] w-full md:text-[16px] md:leading-[20px] lg:text-[20px] lg:leading-[25px] text-center mt-5`}>Still have questions?</h2>
      <p className={`font-normal text-dimWhite text-center text-[11px] leading-[20px] md:text-[14px] md:leading-[25px] lg:text-[18px] lg:leading-[28px] my-2`}>
      Can’t find the answer you’re looking for? Please chat with us.
      </p> 
      <button type="button" className={`py-[6px] px-5 font-montserrat font-medium text-[10px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-white bg-secondary hover:text-secondary hover:bg-black rounded-full outline-none mt-6`}>
        Get In Touch
      </button>
    </div>
  </section>
);

export default CTA;
