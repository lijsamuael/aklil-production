import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-gray-dark3">
      <div className="flex flex-col md:flex-row flex-wrap w-full  justify-between  text-white px-[4%]  py-8 md:text-start text-center gap-y-16 gap-x-36 max-w-[1500px] mx-auto">
        <div className="flex flex-col  gap-y-8 ">
          <div className="space-y-2 font-mono">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-x-4">
                {" "}
                <img
                  src="/images/logofullwhite.png"
                  alt=""
                  className="w-24  "
                />
              </Link>
              <div>
                <p className="text-2xl font-bold">Aklil Production</p>
                <p className=" font-bold">We Produce Develope & Promote</p>
              </div>
            </div>
            <p className="text-gray-400">© All rights reserved, 2023</p>
          </div>
          <div className="space-x-4  text-sm ">
            <Link
              to="/"
              className="space-x-2 gap-y-4 hover:border-b-2 border-primary-yellow"
            >
              <span>HOME</span>
            </Link>
            <Link
              to="/contact"
              className="space-x-2 hover:border-b-2 border-primary-yellow"
            >
              <span>CONTACT</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-full md:w-1/2 px-[10%] md:px-0">
          <p className="text-xl md:text-base">
            Sign up for announcments, News and updates.
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-4 ssm:flex-nowrap flex-wrap gap-x-4 gap-y-2">
            <input
              className="col-span-3 ssm:col-span-2 border-2 border-gray-light3 bg-gray-dark1 text-primary-white px-2 py-[6px] flex-grow"
              placeholder="Enter text here"
            ></input>
            <button className="inline-block col-span-3 ssm:col-span-1 border-2 border-gray-light3 px-2 py-[6px] w-full ssm:w-auto ">
              Submit
            </button>
          </div>
          <div className="flex mt-4 -mx-2">
            <a
              href="#kl;"
              className="hover:animate-bounce mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500  dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-primary-yellow hover:fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
              </svg>
            </a>
            <a
              href="kl;"
              className="hover:animate-bounce mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500  dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-primary-yellow hover:fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>

            <a
              href="kl"
              className="hover:animate-bounce mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Github"
            >
              <svg
                className="w-6 h-6 fill-primary-yellow hover:fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
            </a>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>

            <a
              href="#m,."
              className="hover:animate-bounce mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
              aria-label="Github"
            >
              <svg
                className="w-6 h-6 fill-primary-yellow hover:fill-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
