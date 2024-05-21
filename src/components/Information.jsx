import styles from "../style";
import FAQ from './FAQ';

const Information = () => (
  <section id="FAQ" className={`md:py-10 py-6 flex justify-center items-center flex-col relative `}>
    <div className="flex flex-col justify-between items-center w-full text-center">
    <h2 className={`font-semibold text-[20px] text-black leading-[30px] w-full md:text-[35px] md:leading-[50px] lg:text-[45px] lg:leading-[55px]`}>
      Frequently asked questions
    </h2>
    <p className={`font-normal text-dimWhite lg:text-[18px] lg:leading-[28px] md:text-[16px] md:leading-[25px] text-[11px] leading-[20px] text-paragraph pt-3`}>Everything you need to know about Tech Atlas</p>
    </div>
    {/* Include the FAQ component here */}
    <FAQ />
  </section>
);

export default Information;
