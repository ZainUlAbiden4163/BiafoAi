import Image from "next/image";

function Hero() {
  return (
    <section className="relative bg-[#0b141e] w-full overflow-hidden">
      {/* 1. The Container: 
          'aspect-video' (16:9) is common for hero images. 
          On mobile, it will be short. On desktop (md:), you can make it taller.
      */}
      <div className="relative w-full lg:h-[80vh] aspect-[16/9] md:aspect-[21/9]">
        <Image
          src="/heroBack.png"
          alt="AI SEO Visualization"
          fill
          priority
          className="object-contain md:object-cover"
          sizes="100vw"
        />
      </div>

      {/* 2. The Content Overlay:
          On mobile, you might want the text *below* the image 
          if it's too cramped, OR absolutely positioned over it.
      */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-3">
          <div>
            <span className="inline-block bg-alertBox px-2 lg:px-4 py-1 lg:py-2 border border-white/15 rounded-full text-button text-xs md:text-xl lg:text-2xl">
              <span className="bg-button px-0.5 lg:px-1.5 rounded-full font-semibold lg:font-bold text-alertBox">
                NEW
              </span>
              &emsp;
              <span> Latest integration just arrived </span>
            </span>
          </div>
          <div>
            <h1 className="font-semibold text-white text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
              {" "}
              <span>
                {" "}
                <span className="bg-clip-text bg-linear-to-r from-button via-white to-white text-transparent">
                  Elevate
                </span>{" "}
                your
              </span>{" "}
              <br />
              <span>
                {" "}
                <span className="bg-clip-text bg-linear-to-r from-button via-white to-white text-transparent">
                  SEO
                </span>{" "}
                efforts.
              </span>
            </h1>
          </div>
          <div>
            <p className="text-white text-xs md:text-2xl lg:text-3xl xl:text-4xl md:">
              Elevate your site’s visibility effortlessly with AI, where <br />{" "}
              smart technology meets user-friendly SEO tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
