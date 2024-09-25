import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavMenu } from "@/constants";
import NavbarMenuItems from "./NavbarMenuItems";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <div className="ml-auto mt-8 flex flex-col items-center gap-9 text-xl lg:hidden">
              {NavMenu.map((item) => (
                <NavbarMenuItems
                  title={item.title}
                  url={item.url}
                  key={item.title}
                />
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
