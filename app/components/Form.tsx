"use client"


import { useState } from "react"
import { ArrowRight } from "lucide-react";

type ContactFormData = {
    full_name:string;
    email:string;
    phone:string;
    notes:string;
}

const EMPTY_FORM: ContactFormData = {
    full_name:"",
    email:"",
    phone:"",
    notes:""
}

export default function Form(){
    const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);

    const [message, setMessage] = useState<{
        msg: string;
        type: "success" | "error";
    } | null>(null);

    const [submitting, setSubmitting] = useState(false);

    function handleChange(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        setMessage(null);
        setSubmitting(true);

        const full_name = form.full_name.trim()
        const email = form.email.trim()
        const phone = form.phone.trim()
        const notes = form.notes.trim()

        if(!full_name || !email || !phone || !notes){
            setMessage({
                msg: "Please fill in all required fields.",
                type: "error",
            })
            return;
        }
        
        //console.log("Payload ->", form)
        try{
            const response = await fetch("/api/contact",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })
            const data = await response.json();
            console.log("data is ->",data)
            
        }
        catch(error){
            setMessage({
                msg:"Something went wrong during fetching data",
                type:"error"
            })
        }
        finally{
            setSubmitting(false)
            setForm(EMPTY_FORM)
        }

        
    }

    return(
        <form className="
                h-full
                flex
                flex-col
                justify-center
                p-10
            "
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <label>Ονοματεπώνυμο</label>
                    <input 
                        name="full_name"
                        value={form.full_name}
                        placeholder="π.χ Νίκος Παπαδόπουλος"
                        className="border w-full px-2 py-2 border-neutral-500"
                        onChange={handleChange}
                        required

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input 
                        name="email"
                        value={form.email}
                        placeholder="π.χ onoma@gmail.com"
                        className="border w-full px-2 py-2 border-neutral-500"
                        onChange={handleChange}
                        required

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Τηλέφωνο</label>
                    <input 
                        name="phone"
                        value={form.phone}
                        placeholder="π.χ 6912345678"
                        className="border w-full px-2 py-2 border-neutral-500"
                        onChange={handleChange}
                        required

                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Τι χρειάζεστε;</label>
                    <textarea
                        name="notes"
                        value={form.notes}
                        placeholder="Περιγράψτε συνοπτικά το έργο σας..."
                        className="border w-full px-2 py-2 border-neutral-500"
                        onChange={handleChange}
                        required

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