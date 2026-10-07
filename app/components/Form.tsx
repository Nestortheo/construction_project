"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react";

const EMPTY_FORM = {
    full_name:"",
    email:"",
    phone:"",
    notes:""
}

export default function Form(){
    const [form, setForm] = useState(EMPTY_FORM);

    return(
        <form className="
                h-full
                flex
                flex-col
                justify-center
                p-10
            ">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <label>Ονοματεπώνυμο</label>
                    <input 
                        name="full_name"
                        value={form.full_name}
                        placeholder="π.χ Νίκος Παπαδόπουλος"
                        className="border w-full px-2 py-2 border-neutral-500"

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input 
                        name="email"
                        value={form.email}
                        placeholder="π.χ onoma@gmail.com"
                        className="border w-full px-2 py-2 border-neutral-500"

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Τηλέφωνο</label>
                    <input 
                        name="phone"
                        value={form.phone}
                        placeholder="π.χ 6912345678"
                        className="border w-full px-2 py-2 border-neutral-500"

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Τι χρειάζεστε;</label>
                    <textarea
                        name="phone"
                        value={form.notes}
                        placeholder="Περιγράψτε συνοπτικά το έργο σας..."
                        className="border w-full px-2 py-2 border-neutral-500"

                    />
                </div>
                <button
                    className="
                        w-full
                        bg-[#C87532]
                        text-[#EFEEE8]
                        px-6
                        py-4
                        flex
                        items-center
                        justify-between
                        font-semibold
                        transition-colors
                        hover:bg-[#b5652b]
                        cursor-pointer
                    "
                >
                    <span>Αποστολή μηνύματος</span>

                    <ArrowRight
                        size={22}
                        strokeWidth={1.5}
                    />
                </button>
            </div>
        </form>
    )
}