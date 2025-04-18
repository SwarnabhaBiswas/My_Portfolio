import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (

    <div
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div

        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
);

const AboutMobile = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </div>

      <p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a React-focused web developer with growing experience in the MERN stack. I love building clean, responsive UIs and bringing ideas to life through functional, full-stack web apps.
        I'm passionate about writing maintainable code, learning by building, and continuously sharpening my skills to become a better developer every day.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutMobile, "about");
