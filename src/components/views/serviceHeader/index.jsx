import data from "../../../models/data.json";

export default function ServiceHeader() {
  return (
    <section className="bg-primary-white py-16 ">
      <div className="text-prmary-black text-center font-mono  mx-auto">
        <h2 className="text-4xl font-bold "> Our Services</h2>
        Talented People Behind the Scenes of the Organization
        <p></p>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between max-w-[1800px] gap-x-8 mx-auto px-[5%] ">
        {data.services.map((item, index) => (
          <div key={index} className="shrink w-full md:w-[600px] ">
            <div className="relative top-16 flex items-center justify-center ">
              <img
                src={`/gifs/${item.image}`}
                alt=""
                className="border-pray-dark3 border-8 rounded-full w-40 h-40 object-cover z-10"
              />
            </div>
            <div className=" bg-primary-light3 text-center shadow-lg  hover:bg-primary-yellow hover:scale-105 hover:duration-500  z-0 pt-20 font-mono space-y-6 px-4 rounded-lg py-2">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  {item.name}
                </h4>
                <p className="text-4xl font-bold whitespace-nowrap">{item.title}</p>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
