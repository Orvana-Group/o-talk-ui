import Image from "next/image";
import Link from "next/link";
import { IoPricetagOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { UserHeadline } from "./UserHeadline";
import { IoHomeOutline } from "react-icons/io5";

// Icons are only used on mobile displays
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

export const Header = async () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center p-4">
        <Link href="/">
          <Image
            src="/logo-no-background.svg"
            alt="o-talk"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <div className="space-x-12 flex items-center p-4">
          {routes.map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className="flex items-center space-x-2"
            >
              <span>{route.name}</span>
            </Link>
          ))}
        </div>
        <UserHeadline />
      </div>
    </header>
  );
};
