import Image from "next/image";

function Testimonials() {
  return (
    <section className="flex justify-center items-center bg-primary max-md:py-20 w-full md:h-screen text-white">
      <main className="flex justify-center items-center bg-cover bg-no-repeat bg-center bg-shadow max-md:py-20 border-2 border-white/15 rounded-2xl w-[90%] h-[70%]">
        <div className="flex md:flex-row flex-col justify-center items-center gap-3 w-full h-[80%]">
          <div className="inline-block justify-center items-center">
            <Image
              src="/Avatar.png"
              alt="avatar picture in testimonials"
              height={190}
              width={190}
            />
          </div>
          <div className="inline-block max-md:text-center">
            <p className="mb-6 text-3xl">
              ”This product has completely <br /> transformed how I manage my{" "}
              <br />
              projects and deadlines”
            </p>
            <p className="text-xl">Talia Taylor</p>
            <p className="text-white/70">
              Digital Marketing Director @ Quantum
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Testimonials;
