import React from 'react'
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { label: "Our Events", id: "/maasec.com/Calendar"},
    { label: "FAQ", id: "/maasec.com/FAQ"},
    { label: "Blog", id: "/maasec.com/Blog"},
    { label: "Announcements", id: "/maasec.com/Announcements"}
];

export default function Navbar() {
    return (
        <header className="w-full z-50 transition-all duration-300 bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image src="/maasec.com/acm.svg" alt="ACM logo" width={64} height={64} />
                        <span className="font-archivo font-bold text-xl text-black">
                            at Maastricht University
                        </span>
                    </Link>
                </div>

                <div className="hidden md:flex gap-8 font-archivo">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`${item.id}`}
                            className="hover:text-black transition-colors border-b-2 text-gray-500"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
