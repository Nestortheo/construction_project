import { LucideIcon, ArrowRight,  ArrowDown } from "lucide-react";
import type { ReactNode } from "react";

type ProcessStepProps = {
    number: string;
    title: string;
    description: ReactNode;
    icon: LucideIcon;
    showArrow?: boolean;
};

export default function ProcessStep({
    number,
    title,
    description,
    icon: Icon,
    showArrow = true
}: ProcessStepProps) {

    return (
        <div className="flex flex-row gap-4">
            
            <div className="
                 h-12 w-12
                shrink-0
                rounded-full
                bg-neutral-200
                border border-[#202522]
                flex items-center justify-center
            ">
                <Icon
                    size={28}
                    strokeWidth={1.4}
                    className="text-[#202522]"
                />
            </div>

            <div className="flex flex-col gap-1 min-w-0 ">
                <span className="text-[#C87532] font-bold">
                    {number}
                </span>

                <h2 className="font-bold text-[#202522]">
                    {title}
                </h2>

                <p className="text-sm text-neutral-700 w-52">
                    {description}
                </p>

                {showArrow && (
                    <div className="pt-5">
                        <ArrowDown
                            size={18}
                            strokeWidth={1.5}
                            className="block lg:hidden text-neutral-700"
                        />
                    </div>
                )}
            </div>

            {showArrow && (
                <>
                    <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="hidden lg:block text-neutral-700 shrink-0 mr-10"
                    />

                    
                </>
            )}

        </div>
    );
}