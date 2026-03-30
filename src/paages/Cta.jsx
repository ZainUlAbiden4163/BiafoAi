import Image from "next/image";
import iconBig from "../../public/iconBig.png";
import Button from "@/ui/Button";

function Cta() {
  return (
    <section className="flex justify-center items-center bg-primary w-full h-screen text-white">
      <div className="flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center bg-shadow border-2 border-white/15 rounded-2xl w-[90%] h-[80%] overflow-hidden">
        <div className="flex flex-col items-center gap-2 lg:gap-4 xl:gap-10 text-center">
          <Image
            src={iconBig}
            alt="Icon for cta section"
            width={140}
            height={140}
          />
          <h1 className="font-medium text-4xl md:text-6xl lg:text-7xl xl:text-9xl">
            The magic of AI at <br className="max:md:hidden" />
            your fingertips.
          </h1>
          <p className="md:text-2xl lg:text-3xl xl:text-5xl">
            Achieve clear, impactful results <br /> without the complexity.
          </p>
          <button className="bg-button/50 shadow-[inset_0_0_10px_#ffff] px-4 py-2 rounded-xl text-white/70 text-3xl hover:cursor-pointer">
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
