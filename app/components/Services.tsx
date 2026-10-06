import ServiceCard from "./ServiceCard";
import { House, BrickWall, Layers, Construction, LandPlot, Settings } from "lucide-react";

const services = [
    {
        title: "Κατασκευές κατοικιών",
        description: "Μονοκατοικίες, διπλοκατοικίες και πολυκατοικίες.",
        image: "/images/house.png",
        icon: House,
    },
    {
        title: "Σκυρόδεμα & καλούπια",
        description: "Εργασίες κατασκευής και καλουπιών σκυροδέματος.",
        image: "/images/concrete.png",
        icon: Construction,
    },
    {
        title: "Τοιχοποιία",
        description: "Τοιχοποιία και οπτοπλινθοδομές.",
        image: "/images/masonry.png",
        icon: BrickWall,
    },
    {
        title: "Μονώσεις",
        description: "Εγκατάσταση μονώσεων και κατασκευαστικές λύσεις.",
        image: "/images/insulation.png",
        icon: Layers,
    },
    {
        title: "Στέγες",
        description: "Κατασκευαστικές εργασίες στεγών.",
        image: "/images/roofs.png",
        icon: LandPlot,
    },
    {
        title: "Εξειδικευμένες εργασίες",
        description: "Ειδικές κατασκευαστικές εργασίες και εγκαταστάσεις.",
        image: "/images/specialized.png",
        icon: Settings,
    },
];

export default function Services(){

    return(
        <section
        id="services"
        className="text-[#EFEEE8] mt-24"
        >
            <div className="
                grid
                grid-cols-1
                gap-6
            ">
                <p className="
                    text-xs
                    font-semibold
                    tracking-[0.15em]
                    text-[#C87532]
                ">
                    02 · ΥΠΗΡΕΣΙΕΣ
                </p>
                <h1
                    className="
                        text-4xl lg:text-5xl
                        font-bold
                        tracking-tight
                        leading-[1.05]
                        text-[#202522]
                    "
                >
                    Τι αναλαμβάνουμε.
                </h1>

                {/* Services */}
                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-6
                "
                >
                    {services.map((service) => (
                        <ServiceCard 
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>

    </section>
    )
    
}