"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "forgot-password", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  return (
    <div>
      {navlinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={`${link.href}`}
            className={
              isActive ? "font-bold text-black mr-4" : "text-blue-500 mr-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
