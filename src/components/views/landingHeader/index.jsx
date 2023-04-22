import Button from "../../widgets/button";
export default function LandingHeader() {
  return (
    <main
      style={{ backgroundImage: "url(/images/bg4.png)" }}
      className="flex flex-col justify-center  space-y-48 bg-cover bg-center bg-gray-dark3 h-screen pt-[20px] lg:pt-[100px]"
    >
      <div className="w-full z-100 bg-gray-dark3 text-primary-white max-w-[1000px] mx-auto  space-y-32">
        <div className=" flex justify-between text-2xl font-semibold text-gray-700 capitalize font-mono ">
          <div className="flex flex-col items-center gap-y-4 ">
            <img
              className="w-24 animate-pulse "
              src="/icons/produce.png"
              alt=""
            />
            <p>Produce</p>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              className="w-24 animate-pulse"
              src="/icons/develope.png"
              alt=""
            />
            <p>Develope</p>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              className="w-24 animate-pulse"
              src="/icons/promote.png"
              alt=""
            />
            <p>Promote</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-x16"></div>
          <p className="text-4xl text-center font-bold tracking-widest">
            We Produce Develope and Promote
          </p>
        </div>
      </div>
      <div className=" mx-auto text-center  space-y-8 ">
        <a href="#about">
          <Button text="EXPLORE NOW" />
        </a>
        <div className="flex justify-center  mx-auto animate-bounce">
          <a
            href="#about"
            className="mt-8 cursor-pointer animate-bounce scroll-smooth"
          >
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="#FFDE59"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="27"
                cy="26"
                r="18"
                stroke="#000000"
                stroke-width="2"
              />
              <path
                d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                fill="#000000"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
