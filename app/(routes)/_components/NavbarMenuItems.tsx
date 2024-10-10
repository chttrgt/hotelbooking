import Link from "next/link";
import React from "react";
interface INavbarMenuItemProps {
  title: string;
  url: string;
}

const NavbarMenuItems = ({ title, url }: INavbarMenuItemProps) => {
  return (
    <Link href={url}>
      <div className="cursor-pointer text-gray-400 transition-colors hover:text-mydark1 dark:text-white/50 dark:hover:text-white lg:text-white lg:hover:text-white lg:dark:text-white">
        {title}
      </div>
    </Link>
  );
};

export default NavbarMenuItems;
