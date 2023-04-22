import data from "../../../models/data.json";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Testimonial() {
  const [sliderRef] = useKeenSlider({
    mode: "free",
    breakpoints: {
      "(max-width: 550px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 550px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1700px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div className="bg-gray-dark3 font-mono px-[5%]">
      <div className="w-full px-4">
        <div className="mx-auto text-primary-white mb-12 pt-12 lg:pt-20 max-w-[510px] text-center lg:mb-20">
          <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
            Portfolios
          </h2>
          <p className="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="keen-slider py-8   px-[5%] lg:px-[10%] overflow-hidden gap-8 lg:gap-16 mx-auto  w-full"
      >
        {data.portfolio.map((item, index) => (
          <>
            <div
              className="keen-slider__slide rounded-2xl mx-auto max-w-sm  shadow-xl bg-cover bg-center h-[400px] lg:h-[550px]  transform duration-500 hover:-translate-y-2 cursor-pointer group"
              style={{
                ["background-image"]: `url(./images/${item.image})`,
              }}
            >
              <div className="bg-black bg-opacity-20 h-[400px] lg:h-[550px] px-10 flex flex-col pb-8 pt-32 lg:pt-64 hover:bg-opacity-75 transform duration-300">
                <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                  {item.title}
                </h1>
                <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                <p className="opacity-0 line-clamp-4 text-white text-xl group-hover:opacity-80 transform duration-500 line-clamp-6">
                  {item.testimony}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
