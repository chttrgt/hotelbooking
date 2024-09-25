import Link from "next/link";
import React from "react";
interface INavbarMenuItemProps {
  title: string;
  url: string;
}

const NavbarMenuItems = ({ title, url }: INavbarMenuItemProps) => {
  return (
    <Link href={url}>
      <div className="cursor-pointer text-white">{title}</div>
    </Link>
  );
};

export default NavbarMenuItems;
