import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { items } from "@/constants/ListItems";

function Navbar() {
  return (
    <div className="max-lg:hidden flex justify-center items-center bg-primary w-full h-17 text-white">
      <div className="flex justify-between items-center px-4 border-2 border-white/15 rounded-2xl lg:w-[80%] xl:w-[70%] h-14.5">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-5">
            {items.map((item) => (
              <li key={item.id} className="flex items-center">
                <a href={item.itemHref}>{item.itemName}</a>
                {item?.icon}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <button className="bg-button px-4 py-2 rounded-xl text-primary cursor-alias hover:cursor-pointer">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
