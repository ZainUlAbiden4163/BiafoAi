"use client";
import { menu, close, right } from "@/constants/icons";
import { features } from "@/constants/ListItems";
import Image from "next/image";
import { useState } from "react";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="lg:hidden flex justify-center items-center bg-primary w-full h-15">
        <main className="flex justify-between items-center px-4 border-2 border-white/15 rounded-xl w-[90%] h-[80%]">
          <Image src="/Logo.svg" alt="Logo Biafo Ai" width={100} height={100} />
          <button className="text-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? close : menu}
          </button>
        </main>
      </nav>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-full bg-primary text-white text-xl`}
      >
        <ul className="flex flex-col gap-3 p-5">
          {features.map((item) => (
            <li className="" key={item.title}>
              <a href="#" className="flex justify-between">
                <span>{item.title}</span>
                <span className="text-white/15">{right}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileNavbar;
