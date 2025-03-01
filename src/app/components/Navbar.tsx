import React from 'react'
import Image from "next/image";

const navItems = [
    { label: "FAQ", id: "/maasec.com/FAQ" },
    { label: "Calendar", id: "/maasec.com/Calendar" },
];

export default function Navbar() {
    return (
        <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {/* TODO: navbar logo broke... fix that */}
                    <Image src="/acm.svg" alt="ACM logo" width={64} height={64} />
                    <span className="font-archivo font-bold text-xl text-black">
            at Maastricht University
          </span>
                </div>

                {/* Desktop Navigation */}
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
