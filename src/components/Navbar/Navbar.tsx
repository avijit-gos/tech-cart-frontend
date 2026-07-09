/** @format */

import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import useScroll from "@/base/hooks/useScroll";

interface MenuItem {
  title: string;
  children: string[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    children: [],
  },
  {
    title: "Shop",
    children: [
      "Computers",
      "Components",
      "Monitors",
      "Peripherals",
      "Networking",
      "Accessories",
    ],
  },
  {
    title: "Gaming",
    children: [
      "Gaming PCs",
      "Gaming Laptops",
      "Gaming Monitors",
      "Gaming Accessories",
    ],
  },
  {
    title: "Audio",
    children: [
      "Gaming Headsets",
      "Wired Headphones",
      "Wireless Headphones",
      "Speakers",
      "Soundbars",
      "Microphones",
    ],
  },
  {
    title: "Deals",
    children: [],
  },
  {
    title: "Support",
    children: [],
  },
];

export default function Navbar() {
  const { isScrolled } = useScroll();

  return (
    <nav className='flex items-center gap-6 ml-6'>
      {menuItems.map((item) =>
        item.children.length ? (
          <DropdownMenu key={item.title}>
            <DropdownMenuTrigger
              className={cn(
                "group flex items-center gap-1 text-sm font-medium outline-none transition-colors",
                isScrolled
                  ? "text-white/80 hover:text-white"
                  : "text-(--primary-text-color) hover:text-(--primary-color)"
              )}>
              {item.title}

              <ChevronDown
                size={15}
                className='transition-transform duration-200 group-data-[state=open]:rotate-180'
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent align='start' className='w-56 rounded-xl p-2'>
              {item.children.map((child) => (
                <DropdownMenuItem asChild key={child}>
                  <NavLink
                    to={`/category/${child.toLowerCase().replace(/\s+/g, "-")}`}
                    className='cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100'>
                    {child}
                  </NavLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLink
            key={item.title}
            to={item.title === "Home" ? "/" : `/${item.title.toLowerCase()}`}
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-white/80 hover:text-white"
                  : "text-(--primary-text-color) hover:text-(--primary-color)",
                isActive &&
                  (isScrolled
                    ? "text-white"
                    : "text-(--primary-color) font-semibold")
              )
            }>
            {item.title}
          </NavLink>
        )
      )}
    </nav>
  );
}
