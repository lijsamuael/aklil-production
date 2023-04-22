import data from "../../../models/data.json";

export default function ServiceHeader() {
  return (
    <section
      id="about"
      className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-[5%] font-mono bg-gray-light3"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap"></div>
        <div className=" flex flex-wrap justify-center sm:space-x-32 ">
          {data.stat.map((item, index) => (
            <div
              key={index}
              className="w-48 px-4  bg-gray-light3 text-primary-white rounded-full"
            >
              <div className="  rounded-[20px] bg-gray-dark1 hover:bg-gray-dark2 p-4 shadow-md hover:shadow-lg ">
                <div className=" animate-bounce bg-primary-yellow mx-auto mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-full p-4">
                  <p className="text-primary-black text-center text-2xl font-bold w-16">{item.value}</p>
                </div>
                <h4 className="text-dark text-center mb-3 text-xl font-semibold line-clamp-1">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
