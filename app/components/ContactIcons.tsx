import type { LucideIcon } from "lucide-react";

type ContactIconProps = {
    icon: LucideIcon;
    title:string;
    description:string
}

export default function ContactIcons({
    icon:Icon,
    title,
    description
}:ContactIconProps){

    return(
        <div className="flex flex-row gap-4">
            <div className="
                    h-14 w-14
                    rounded-full
                    border border-[#66543B]
                    bg-[#202522]
                    flex items-center justify-center
                "
            >
                <Icon
                    size={34}
                    strokeWidth={1.4}
                    className="text-white"
                />   
            </div>
            <div>
                <p>
                    {title}
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}