import ContactIcons from "./ContactIcons";
import Image from "next/image";

import Form from "./Form"
import {
    Phone,
    Mail,
    MapPin
} from "lucide-react";
export default function Contact(){

    return(
        <section 
            id="contact"
            className="bg-[#202522] scroll-mt-[100px]"
        >   
            <div className="
                grid
                grid-cols-1
                lg:grid-cols-3
                items-stretch
            "
            >
                {/*LEFT*/}
                <div className="
                    flex
                    flex-col
                    justify-center
                    gap-4
                    p-8
                    lg:p-10
                "
                >
                    <p className="
                        text-sm font-semibold
                        tracking-[0.15em]
                        text-[#C87532]
                    "
                    >
                        05 · ΕΠΙΚΟΙΝΩΝΙΑ
                    </p>
                    <h2 className="
                        text-2xl lg:text-4xl
                        font-bold
                        tracking-tight
                        leading-[1.05]
                    "
                    >
                        Έχετε ένα έργο
                        <br/>
                        στο μυαλό σας;
                    </h2>
                    <p className="
                        text-sm
                        text-neutral-300 
                    "
                    >
                        Ας συζητήσουμε τι χρειάζεστε και πως μπορούμε
                        <br/>
                        να το υλοποιήσουμε μαζί.
                    </p>
                    {/*ICONS*/}
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
                {/*MIDDLE*/}
                <div className="border-l border-[#EFEEE8]/15">
                    <Form />
                </div>

                {/* RIGHT */}
                <div className="
                        relative
                        min-h-[320px]
                 "
                 >
                    <Image
                        src="/images/contact_image.png"
                        alt="Κατασκευαστικές εργασίες"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>


        </section>
    )
}