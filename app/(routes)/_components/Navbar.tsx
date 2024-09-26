"use client";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import React from "react";
import UserToogle from "./UserToogle";
import MobileMenu from "./MobileMenu";
import { NavMenu } from "@/constants";
import NavbarMenuItems from "./NavbarMenuItems";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`z-20 w-full items-center ${pathname !== "/" ? "bg-mydark2" : "fixed"}`}
    >
      <div className="container">
        <div className="flex flex-row items-center justify-center px-4 py-6">
          {/* LOGO */}
          <div className="w-24 rounded-xl bg-white px-3 py-4">
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          {/* MENU */}
          <div className="ml-auto hidden flex-row items-center gap-9 lg:flex">
            {NavMenu.map((item) => (
              <NavbarMenuItems
                title={item.title}
                url={item.url}
                key={item.title}
              />
            ))}
          </div>
          {/* THEME & LOGIN */}
          <div className="ml-auto flex items-center gap-2 lg:flex">
            <UserToogle />
            <ModeToggle />
            <div className="ml-auto flex flex-row items-center gap-2 lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
