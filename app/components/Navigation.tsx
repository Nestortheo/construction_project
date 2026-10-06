"use client"
import { useState } from "react";

export default function Navbar(){

    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu(){
        setMenuOpen(false);
    }

    return(
        <header className="
            fixed top-0 left-0 right-0 z-50
            w-full
            overflow-hidden
            bg-[#f5f4f0]/95
            backdrop-blur-xl
            border-b border-[#d8d8d2]
            shadow-[0_4px_20px_rgba(32,37,34,0.06)]
        ">
            <div className="
                max-w-6xl mx-auto
                flex items-center justify-between
                px-3 py-6
            "
            >   
                {/* Brand - Home */}
                <a 
                    href="#home"
                    className="flex items-center gap-3">

                     <div className="h-10 w-10 bg-[#202522] text-white flex items-center justify-center text-xs font-bold">
                        AB
                    </div>

                    <div className="flex flex-col text-[#202522]">
                        <p className="text-xl font-bold">
                            AMKOSBAU
                        </p>
                        
                        <p className="text-xs text-[#707570]">
                            ΚΑΤΑΣΚΕΥΕΣ · ΤΕΧΝΙΚΑ ΕΡΓΑ
                        </p>
                    </div>
                </a>

                {/* Desktop Links */}
                <nav className="hidden lg:flex items-center gap-2">
                    <a
                        href="#home"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"

                    >
                        Αρχική
                    </a>
                    <a
                        href="#about"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"
                    >
                        Σχετικά
                    </a>
                    <a
                        href="#services"
                         className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"

                    >
                        Υπηρεσίες
                    </a>
                    <a
                        href="#projects"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"
                    >
                        Έργα
                    </a>
                    <a
                        href="#contact"
                        className="
                            bg-[#202522]
                            text-white
                            px-5 py-2.5
                            text-sm font-medium
                            hover:bg-[#c87532]
                            transition-colors duration-200
                        "
                    >
                        Επικοινωνία
                    </a>
                    
                </nav>

                {/* Mobile Burger Button */}
                <button
                    className="
                        
                        lg:hidden
                        text-2xl
                        text-black
                    "
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>
            {/* Mobile DropDown Bar Menu */}
            {menuOpen && (
                <div
                    className="
                    w-full flex flex-col
                    bg-[#f8f4ea]/95 border-t border-yellow-800/20 p-2
                    "
                >
                    <a
                        href="#home"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"
                        onClick={closeMenu}
                    >
                        Αρχική
                    </a>
                    <a
                        href="#services"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"
                        onClick={closeMenu}
                    >
                        Υπηρεσίες
                    </a>
                    <a
                        href="#projects"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"
                        onClick={closeMenu}
                    >
                        Έργα
                    </a>
                    <a
                        href="#about"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"
                        onClick={closeMenu}
                    >
                        Σχετικα
                    </a>
                    <a
                        href="#contact"
                        className="px-4 py-3 text-sm text-[#202522] hover:text-[#c87532] transition-colors"
                        onClick={closeMenu}
                    >
                        Επικοινωνία
                    </a>

                </div>
            )}
             
        </header>
    )
}