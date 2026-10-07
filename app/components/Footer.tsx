import ContactIcons from "./ContactIcons";
import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn
} from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="bg-[#1B201E] border-t border-[#66543B] mt-2">
            <div className="
                max-w-6xl
                mx-auto
                px-10
                py-12
                grid
                grid-cols-1
                gap-10 lg:gap-8
                lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]
            "
            >
                
                <div className="flex flex-col gap-4">
                    {/* LOGO */}
                    <div className="flex flex-row items-center gap-4">
                        <div className="
                            h-10 w-10
                            shrink-0
                            border
                            border-[#8A5A3C]
                            flex items-center justify-center
                            text-xs font-bold
                        ">
                            AB
                        </div>

                        <div className="flex flex-col text-[#F3E7DB]">
                            <p className="text-xl font-bold">
                                AMKOSBAU
                            </p>

                            <p className="text-xs text-[#B9AEA3]">
                                ΚΑΤΑΣΚΕΥΕΣ · ΤΕΧΝΙΚΑ ΕΡΓΑ
                            </p>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="
                        max-w-sm
                        text-sm
                        leading-6
                        text-[#B9AEA3]
                    ">
                        Υλοποιούμε κατασκευαστικά έργα
                        με συνέπεια, ποιότητα και σεβασμό
                        στις ανάγκες σας.
                    </p>
                    {/* Divider */}
                    <div className="w-10 h-px bg-[#8A5A3C]"/>
                    <p className="
                        text-sm
                        font-medium
                        uppercase
                        tracking-[0.25em]
                        leading-5
                        text-[#B9AEA3]
                    ">
                        ΧΤΙΖΟΥΜΕ ΣΗΜΕΡΑ
                        <br/>
                        ΕΝΑ ΚΑΛΥΤΕΡΟ ΑΥΡΙΟ.
                    </p>

                </div>
                {/* NAV LINKS */}
                <div className="flex flex-col">
                    <p className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#B85F35]
                        "
                    >
                        ΓΡΗΓΟΡΗ ΠΛΟΗΓΗΣΗ
                    </p>
                    <div className="flex flex-col gap-4 mt-6">
                        <a
                            href="#home"
                            className="text-sm text-[#B9AEA3] hover:text-[#F3E7DB] transition-colors"
                        >
                            Αρχική
                        </a>

                        <a
                            href="#about"
                            className="text-sm text-[#B9AEA3] hover:text-[#F3E7DB] transition-colors"
                        >
                            Σχετικά
                        </a>

                        <a
                            href="#services"
                            className="text-sm text-[#B9AEA3] hover:text-[#F3E7DB] transition-colors"
                        >
                            Υπηρεσίες
                        </a>

                        <a
                            href="#projects"
                            className="text-sm text-[#B9AEA3] hover:text-[#F3E7DB] transition-colors"
                        >
                            Έργα
                        </a>

                        <a
                            href="#contact"
                            className="text-sm text-[#B9AEA3] hover:text-[#F3E7DB] transition-colors"
                        >
                            Επικοινωνία
                        </a>
                    </div>
                </div>

                {/*CONTACT*/}
                <div>
                    <p className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#B85F35]
                        "
                    >
                        ΕΠΙΚΟΙΝΩΝΙΑ
                    </p>
                    <div className="mt-4 flex flex-col gap-5">
                        <ContactIcons 
                            icon={Phone}
                            title="Επικοινωνία"
                            description="+30 23410 00000"
                        />
                        <ContactIcons 
                            icon={Mail}
                            title="Email"
                            description="info@amkosbau.gr"
                        />
                        <ContactIcons 
                            icon={MapPin}
                            title="Περιοχή"
                            description="Κιλκίς, Ελλάδα"
                        />
                    </div>
                </div>

                {/* SOCIAL */}
                <div className="flex flex-col gap-4">

                    <p className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.25em]
                        text-[#B85F35]
                    ">
                        ΑΚΟΛΟΥΘΗΣΤΕ ΜΑΣ
                    </p>

                    <p className="
                        max-w-xs
                        text-sm
                        leading-6
                        text-[#B9AEA3]
                    ">
                        Μείνετε ενημερωμένοι για τα
                        νέα μας έργα και τις τελευταίες
                        εξελίξεις.
                    </p>

                    <div className="flex flex-row gap-4">

                        {/* Instagram */}
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="
                                h-10 w-10
                                rounded-full
                                border border-[#66543B]
                                flex items-center justify-center
                                text-[#F3E7DB]
                                transition-colors
                                hover:border-[#B85F35]
                                hover:text-[#B85F35]
                            "
                        >
                            <FaInstagram
                                size={17}
                                strokeWidth={1.5}
                            />
                        </a>

                        {/* Facebook */}
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="
                                h-10 w-10
                                rounded-full
                                border border-[#66543B]
                                flex items-center justify-center
                                text-[#F3E7DB]
                                transition-colors
                                hover:border-[#B85F35]
                                hover:text-[#B85F35]
                            "
                        >
                            <FaFacebookF
                                size={17}
                                strokeWidth={1.5}
                            />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="
                                h-10 w-10
                                rounded-full
                                border border-[#66543B]
                                flex items-center justify-center
                                text-[#F3E7DB]
                                transition-colors
                                hover:border-[#B85F35]
                                hover:text-[#B85F35]
                            "
                        >
                            <FaLinkedinIn
                                size={17}
                                strokeWidth={1.5}
                            />
                        </a>

                    </div>

                </div>
            </div>
            {/* LOWEST BAR */}
            <div className="border-t border-[#66543B]">
                <div className="
                    max-w-6xl
                    mx-auto
                    px-10
                    py-5
                    flex
                    items-center
                    justify-center
                ">
                    <p className="text-xs text-[#B9AEA3]">
                        © 2026 AMKOSBAU. Με επιφύλαξη παντός δικαιώματος.
                    </p>  
                </div>
            </div>
        </footer>
    )
}