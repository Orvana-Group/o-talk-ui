import Image from "next/image";
import Link from "next/link";
import { IoPricetagOutline, IoHomeOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { UserHeadline } from "./UserHeadline";

// Ikony są używane tylko na wyświetleniach mobilnych
const routes = [
  {
    name: "Home",
    href: "/",
    icon: IoHomeOutline,
  },
  {
    name: "Features",
    href: "/features",
    icon: IoHomeOutline,
  },
  {
    name: "Pricing",
    href: "/pricing",
    icon: IoPricetagOutline,
  },
  {
    name: "About",
    href: "/about",
    icon: HiOutlineUsers,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: AiOutlineMail,
  },
];

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Logo */}
      <div className="flex items-center p-4 w-[288px]">
        <Link href="/">
          <Image
            src="/logo-no-background.svg"
            alt="o-talk"
            width={149}
            height={150}
          />
        </Link>
      </div>

      {/* Nawigacja */}
      <nav className="space-x-12 flex items-center p-4">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.href}
            className="relative flex items-center group"
          >
            {/* Tekst linku */}
            <span className="uppercase transition-colors duration-300 group-hover:text-primary">
              {route.name}
            </span>

            {/* Podkreślenie z animacją od środka */}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        ))}
      </nav>

      {/* Nagłówek użytkownika */}
      <div className="flex items-center space-x-8">
        <UserHeadline />
      </div>
    </header>
  );
};
