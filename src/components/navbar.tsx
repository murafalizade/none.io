'use client'
import { Button } from "antd"
import { useState } from "react"
import Link from "next/link";
import {NoneButton} from "@/components/Core/Button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed w-full z-50 px-8 py-4 flex items-center justify-between bg-black/60 backdrop-blur-md border-b border-white/10">
            <Link
                href="/"
                className="relative flex items-center w-12 h-12 rounded-xl bg-gradient-radial from-[#1C1C1C] to-black shadow-[0_1px_10px_rgba(198,54,255,0.7),0_1px_6px_rgba(140,69,255,0.6)]"
            >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#8C45FF] to-[#C145FF] opacity-70"></div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 rounded font-medium">
                {["Demo", "Partners", "Advantages", "Pricing"].map((item, i) => (
                    <li key={i} className="hover:text-[#D438FF] transition-colors">
                        <a className={'text-[#ffffffb3]!'} href={`#${item.toLowerCase()}`}>{item}</a>
                    </li>
                ))}
            </ul>

            {/* Action Button */}
           <NoneButton text={'Get Started'} />

            {/* Mobile Hamburger */}
            <div
                className="md:hidden cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="w-6 h-0.5 bg-white mb-1 transition-all"></div>
                <div className="w-6 h-0.5 bg-white mb-1 transition-all"></div>
                <div className="w-6 h-0.5 bg-white transition-all"></div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md py-4 flex flex-col items-center md:hidden border-t border-white/10">
                    {["Demo", "Partners", "Advantages", "Pricing"].map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.toLowerCase()}`}
                            className="text-white py-2 hover:text-[#D438FF] transition-colors w-full text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <Button className="mt-4 bg-gradient-to-r from-[#D438FF] to-[#8C45FF] border-none px-6 py-2">
                        Get Started
                    </Button>
                </div>
            )}
        </nav>
    )
}
