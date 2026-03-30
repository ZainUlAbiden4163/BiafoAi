import { features } from "@/constants/ListItems";

function Features() {
  return (
    <section className="flex flex-col justify-evenly items-center gap-15 bg-primary max-md:py-20 w-full md:h-dvh text-white">
      <div className="flex flex-col justify-center items-center gap-15">
        <p className="inline-block bg-black px-4 py-2 border-2 border-white/15 rounded-full text-button text-2xl">
          Everything you need
        </p>
        <h1 className="text-5xl text-center">
          Harness the power of AI, making <br /> search engine optimization
          intuitive <br />
          and effective for all skill levels.
        </h1>
      </div>
      <div className="gap-x-12 gap-y-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[90%]">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-semibold text-white text-2xl">
              <i>{Icon}</i>
              <span>{title}</span>
            </div>
            <p className="text-white/70 text-xl leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
