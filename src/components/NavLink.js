"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeStyle =
  "text-primary py-3 px-3 rounded transition duration-300 underline";
const inactiveStyle =
  "text-white hover:text-primary py-3 px-3 rounded transition duration-300";
// adding the children
function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    // Complete this component so that it changes style when the link is "active"
    <Link href={href} className={isActive ? activeStyle : inactiveStyle}>
      {children}
    </Link>
  );
}

export default NavLink;
