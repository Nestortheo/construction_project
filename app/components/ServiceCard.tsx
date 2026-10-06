import Image from "next/image";
import { LucideIcon, ArrowRight} from "lucide-react";



type ServiceCardProps = {
    title:string;
    description:string;
    image:string;
    icon: LucideIcon;
}

export default function ServiceCard({
    title,
    description,
    image,
    icon: Icon
}:ServiceCardProps){

    return(
        <div className="flex flex-col">
            <Image
                src={image}
                alt={title}
                width={500}
                height={300}
            />
             <div className="flex flex-row items-start p-4 gap-6">
                <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#C87532]"
                />

                <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="text-md lg:text-xl text-[#202522] font-semibold">
                        {title}
                    </h3>

                    <div className="flex items-center justify-between w-full">
                        <p className="text-sm w-max-sm text-neutral-800">{description}</p>
                        <ArrowRight 
                            size={32} 
                            strokeWidth={1.5}
                            className="text-[#C87532] shrink-0"
                        />
                    </div>
                </div>

            
                
            </div>
        </div>
    )
}