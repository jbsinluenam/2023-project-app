'use client';

import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

//react-feather is a library that provides functions for icons that are svg files
//here we are importing the icons we want to use
// use Pathname is a hook that returns the current path of the page

const icons = { Settings, User, Grid, Calendar }
//Here icons are defined as an object with the keys being the name of the icon and the value being the icon itself

const SidebarLink = ({link}) => {
  const pathname = usePathname()
  let isActive = false

  if (pathname === link.link) {
    isActive = true
  }

  const Icon = icons[link.icon]
  return (
    <Link href={link.link}>
      <Icon size={40} className={clsx("stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out", isActive && 'stroke-violet-600')}/>
    </Link>
  )
}

export default SidebarLink