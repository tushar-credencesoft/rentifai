import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StarterPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-landing_page_bg h-full w-full bg-top absolute left-0 right-0 top-0 bottom-0 bg-cover bg-no-repeat flex items-center justify-center">
      <p className="absolute font-bebasFont tracking-[4px] max-lg:tracking-[3px] max-sm:tracking-[2px] top-24 max-sm:top-40 max-lg:top-32 m-auto text-white text-5xl max-sm:text-xl max-md:text-2xl max-lg:text-3xl font-semibold">
        LETS BEGING YOUR JOURNEY
      </p>
      <div className="flex w-full items-center">
        <img
          className="w-5/12 max-sm:w-4/12"
          src="/assets/images/starter_page_images/left_line.png"
          alt=""
        />
        <img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate("/nav-page")}
          className="w-2/12 max-sm:w-4/12 max-lg:mt-12 lg:mt-16 max-sm:mt-1 cursor-pointer"
          src={
            isHovered
              ? "/assets/images/starter_page_images/green_starter_button.png"
              : "/assets/images/starter_page_images/red_starter_button.png"
          }
          alt=""
        />
        <img
          className="w-5/12 max-sm:w-4/12"
          src="/assets/images/starter_page_images/right_line.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default StarterPage;
