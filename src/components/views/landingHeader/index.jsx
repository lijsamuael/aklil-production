import Button from "../../widgets/button";
export default function LandingHeader() {
  return (
    <main
      style={{ backgroundImage: "url(/images/bg4.png)" }}
      className="flex flex-col justify-center  space-y-28 bg-cover bg-center bg-gray-dark3 h-screen "
    >
      <div className="flex flex-col w-full z-100 bg-gray-dark3 text-primary-white max-w-[1000px] mx-auto  gap-y-16 px-[5%]">
        <div className=" pt-16">
          <div className="flex justify-center gap-x16"></div>
          <p className="py-8 text-center text-2xl font-semibold text-primary-yellow uppercase md:text-4xl tracking-widest">
            Aklil Production
          </p>
          <p className="text-center text-4xl font-semibold text-white uppercase md:text-5xl tracking-widest">
            We Produce Develope and Promote
          </p>
        </div>
        <div className=" ssm:flex justify-between  ">
          <div className="flex flex-col items-center gap-y-4 tracking-widest">
            <img
              className=" w-16 ssm:w-24 animate-pulse "
              src="/icons/produce.png"
              alt=""
            />
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-700 capitalize font-mono">
                Produce
              </p>
              <p>Videos & Graphics</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              className=" w-16 ssm:w-24 animate-pulse"
              src="/icons/develope.png"
              alt=""
            />
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-700 capitalize font-mono">
                Develope
              </p>
              <p>Websites & Apps</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <img
              className=" w-16 ssm:w-24 animate-pulse"
              src="/icons/promote.png"
              alt=""
            />
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-700 capitalize font-mono">
                Produce
              </p>
              <p>Social Media Marketing</p>
            </div>
          </div>
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
