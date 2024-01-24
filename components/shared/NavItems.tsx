'use client';
import { headerLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:justify-center flex w-full flex-col items-start md:gap-[6%] gap-5 md:flex-row flex-wrap">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route
        return (
          <li
            key={link.route}
            className={`${isActive && "text-primary-500"} flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems