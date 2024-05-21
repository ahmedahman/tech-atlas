import styles from "../style";

const Benefits = () => (
  <section className={`flex justify-center items-center flex-row flex-wrap md:mb-20 mb-6`}>
      <div className={`flex-1 flex-col px-0 flex justify-between items-center w-full text-center py-6 mt-6`} >
        <h4 className="font-montsrrat font-semibold text-[14px] sm:text-[20px] md:text-[23px] lg:text-[22px] xs:leading-[53.16px] leading-[43.16px] text-secondary">
          Why Choose Us
        </h4>
        <h2 className={`text-black font-bold text-[20px] leading-[30px] sm:text-[30px] sm:leading-[35px] w-full md:text-[40px] md:leading-[50px] lg:text-[45px] lg:leading-[55px] lg:px-10`}>
          Key features that makes us a trusted compass
        </h2>
      </div>
  </section>
);

export default Benefits;
