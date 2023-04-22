export default function AboutSection() {
  return (
    <section className="bg-gray-dark3 border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-primary-yellow font-mono text-4xl text-gray-800 font-bold leading-none mb-3">
              <span className="border-b-4 border-primary-yellow">Who</span> We Are
            </h3>
            <p className="text-gray-light1 mb-8 text-xl font-mono">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              dolorem sequi libero in blanditiis eveniet ipsa aspernatur
              architecto corporis odio!
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="/images/who.png" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row items-center pb-8">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="/images/what.png" className="pb-8" alt="" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-primary-yellow font-mono text-4xl text-gray-800 font-bold leading-none mb-3">
                <span className="border-b-4 border-primary-yellow">What</span>{" "}
                We Do
              </h3>
              <p className="text-gray-light1 mb-8 text-xl font-mono">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              dolorem sequi libero in blanditiis eveniet ipsa aspernatur
              architecto corporis odio!
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-primary-yellow font-mono text-4xl text-gray-800 font-bold leading-none mb-3">
              <span className="border-b-4 border-primary-yellow">Why</span> Us
            </h3>
            <p className="text-gray-light1 mb-8 text-xl font-mono">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              dolorem sequi libero in blanditiis eveniet ipsa aspernatur
              architecto corporis odio!
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img src="./images/why.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
