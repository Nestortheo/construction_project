import Image from "next/image";
export default function About(){

    return(
        <section
            id="about"
            className="bg-[#202522] text-[#EFEEE8] -mt-[81px]"
        >
            <div className="
                grid
                lg:grid-cols-[1fr_1fr_0.8fr]
            ">

                {/* LEFT */}
                <div className="
                    p-10 lg:p-10
                    flex flex-col justify-start 
                ">
                    <p className="
                        mb-5
                        text-xs
                        font-semibold
                        tracking-[0.15em]
                        text-[#C87532]
                    ">
                        01 · Η ΕΤΑΙΡΕΙΑ
                    </p>

                    <h2 className="
                        text-4xl lg:text-5xl
                        font-bold
                        tracking-tight
                        leading-[1.05]
                    ">
                        Κατασκευή
                        <br />
                        με βάση
                        <br />
                        τη δουλειά.
                    </h2>
                </div>

                {/* MIDDLE */}
                <div className="
                    p-10 lg:p-10
                    flex flex-col justify-start
                ">
                    <p className="
                        text-sm
                        leading-7
                        text-[#d2d4d0]
                        tracking-tight
                    ">
                        Η AMKOSBAU είναι μια κατασκευαστική εταιρεία
                        με έδρα το Κιλκίς, που δραστηριοποιείται σε ιδιωτικά 
                        και επαγγελματικά έργα. Με έμφαση στην ποιότητα,
                        τη συνέπεια και την ομαλή συνεργασία, αναλαμβάνουμε
                        κατασκευές κατοικιών, τεχνικές εργασίες και εξειδικευμένες
                        λύσεις, προσφέροντας αποτέλεσμα που αντέχει στον χρόνο.
                    </p>

                    <a
                        href="#contact"
                        className="
                            mt-7
                            w-fit
                            border border-[#C87532]
                            px-5 py-3
                            text-xs
                            font-semibold
                            tracking-wide
                            text-[#EFEEE8]
                            transition-colors
                            hover:bg-[#C87532]
                        "
                    >
                        Περισσότερα για εμάς →
                    </a>
                </div>

                {/* RIGHT */}
                <div className="
                    relative
                    min-h-[320px]
                ">
                    <Image
                        src="/images/hero.png"
                        alt="Κατασκευαστικές εργασίες"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    )
}