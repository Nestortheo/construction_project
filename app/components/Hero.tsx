
import Image from "next/image";
import { ArrowRight} from "lucide-react";

export default function Hero(){

    return(
        <section id="home" className="scroll-mt-24 mt-24 py-20">
            <div className="grid lg:grid-cols-[2fr_3fr] ">
                {/* LEFT */}
                <div
                    className="
                        flex flex-col
                        gap-8
                        items-center lg:items-start
                        text-center lg:text-left
                    "
                >
                    <p className="
                        text-sm
                        font-semibold
                        tracking-[0.1em]
                        text-[#C87532]
                    ">
                        ΚΑΤΑΣΚΕΥΕΣ - ΚΙΛΚΙΣ
                    </p>

                    <h1 className="
                        text-5xl
                        lg:text-6xl
                        font-bold
                        text-[#202522]
                    ">
                        Χτίζουμε
                        <br />
                        με συνέπεια.
                    </h1>

                    <p className="
                        max-w-sm
                        text-sm
                        lg:text-base
                        leading-7
                        text-[#202522]
                    ">
                        Κατασκευαστικές εργασίες, σκυρόδεμα, τοιχοποιία,
                        μονώσεις και εξειδικευμένες λύσεις για σύγχρονες
                        κατασκευές κατοικιών και επαγγελματικών χώρων.
                    </p>

                    <p className="
                        max-w-sm
                        text-sm
                        leading-6
                        text-[#5F645F]
                    ">
                        Από την πρώτη ιδέα έως την ολοκλήρωση,
                        δίπλα σας σε κάθε στάδιο του έργου.
                    </p>

                    <div className="pt-2 flex gap-2">
                        <a
                            href="#services"
                            className="
                                px-6 py-3
                                rounded-full
                                bg-[#202522]
                                tracking-wide
                                transition-transform
                                duration-200
                                ease-in-out
                                hover:scale-105
                            "
                        >
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-semibold text-white">
                                    ΥΠΗΡΕΣΙΕΣ
                                </span>

                                <ArrowRight
                                    size={20}
                                    className="text-white"
                                />
                            </div>
                        </a>

                        <a
                            href="#contact"
                            className="
                                px-6 py-3
                                rounded-full
                                bg-white
                                tracking-wide
                                text-[#202522]
                                border
                                transition-transform
                                duration-200
                                ease-in-out
                                hover:scale-105
                            "
                        >
                            <span className="text-sm font-semibold">
                                ΕΠΙΚΟΙΝΩΝΙΑ
                            </span>
                        </a>
                    </div>
                </div>
                 {/* RIGHT */}
                <div className="
                        w-full
                        relative
                        aspect-[3/3]
                        overflow-hidden
                        shadow-lg
                        border border-[#b08a45]/20
                    ">
                        <Image
                            src="/images/hero_concrete.png"
                            alt="hero"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                </div>
                    
            </div>
        </section>
    )
}