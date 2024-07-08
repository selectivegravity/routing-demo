"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import "./style.css";

// export const metadata = {
//     title: 'Auth Page',
//     description: 'Generated by Next.js',
//   }

  const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
  ];
  
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const pathname = usePathname();
    return (
        <>
        {navLinks.map((link)=>{
          const isActive = pathname.startsWith(link.href);
          return (
            <Link className={isActive?"font-bold mr-4":"text-blue-500"} href={link.href} key={link.name}> {link.name} </Link>
          );
        })}
        {children}
        <h3>With Inner Layouts</h3>
      </>
    )
  }
  