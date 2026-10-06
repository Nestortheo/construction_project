import {
    MessageCircle,
    FileText,
    HardHat,
    CircleCheck,
    ArrowRight
} from "lucide-react";

import ProcessStep from "./ProcessStep";

export default function Process(){

    return(
        <section
            className="mt-24 bg-[#ECE8DF] p-10"
        >
            <div className="grid gap-6">
                <p className="
                    text-xs
                    font-semibold
                    tracking-[0.15em]
                    text-[#C87532]
                ">
                    04 · ΔΙΑΔΙΚΑΣΙΑ
                </p>

                <h2 className="
                    text-4xl lg:text-4xl
                    font-bold
                    tracking-tight
                    leading-[1.05]
                    text-[#202522]
                "
                >
                    Από την πρώτη επαφή
                    <br />
                    μέχρι την ολοκλήρωση.
                </h2>

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-4
                    gap-8
                ">
                    <ProcessStep
                        number="01"
                        title="Επικοινωνία"
                         description={
                            <>
                                Συζητάμε τις ανάγκες
                                <br />
                                για το έργο.
                            </>
                        }
                        icon={MessageCircle}
                    />

                    <ProcessStep
                        number="02"
                        title="Εκτίμηση"
                       description={
                            <>
                                Αξιολογούμε τις απαιτήσεις
                                <br />
                                και προτείνουμε λύσεις.
                            </>
                        }
                        icon={FileText}
                    />

                    <ProcessStep
                        number="03"
                        title="Κατασκευή"
                        description={
                            <>
                                Οργανώνουμε και εκτελούμε
                                <br />
                                τις εργασίες.
                            </>
                        }
                        icon={HardHat}
                    />

                    <ProcessStep
                        number="04"
                        title="Ολοκλήρωση"
                         description={
                            <>
                                Παραδίδουμε το έργο με
                                <br />
                                προσοχή στη λεπτομέρεια.
                            </>
                        }
                        icon={CircleCheck}
                        showArrow={false}
                    />
                </div>
            </div>
        </section>
    )
}