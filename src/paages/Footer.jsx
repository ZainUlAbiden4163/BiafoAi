import Image from "next/image";

function Footer() {
  return (
    <footer className="flex justify-center items-center bg-primary p-10 w-full">
      <main className="flex lg:flex-row flex-col justify-between items-center max-lg:gap-10 w-[90%]">
        <Image src="/Logo.svg" alt="Baifo Logo ai" width={150} height={150} />
        <div>
          <ul className="flex lg:flex-row flex-col justify-center items-center gap-5 text-white/15 text-2xl">
            <li>Features</li>
            <li>Integration</li>
            <li>Updates</li>
            <li>FAQ</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <i>
            <Image src="/X.svg" alt="X logo" width={30} height={30} />
          </i>
          <i>
            <Image
              src="/Insta.svg"
              alt="Instagram logo "
              width={30}
              height={30}
            />
          </i>
          <i>
            <Image
              src="/youtube.svg"
              alt="Youtube logo"
              width={30}
              height={30}
            />
          </i>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
