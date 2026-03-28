import Image from "next/image";

function Testimonials() {
  return (
    <section className="flex justify-center items-center bg-primary w-full h-screen text-white">
      <main className="relative flex justify-center items-center bg-radial-[circle_at_50%_-20%] from-button/70 to-65% to-primary border-2 border-white/15 rounded-2xl w-[80%] h-[70%]">
        <div className="flex md:flex-row flex-col justify-center items-center gap-3 w-[80%] h-[80%]">
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
