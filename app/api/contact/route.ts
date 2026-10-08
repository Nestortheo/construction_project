import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request){
    const body = await request.json();
    console.log("API received:", body)

    const {full_name, email, phone, notes} = body
    const { data, error } = await resend.emails.send({
        from: "AMKOSBAU <onboarding@resend.dev>",
        to: ["nestorastheo@gmail.com"],
        subject: `Νέο μήνυμα από ${full_name}`,
        html: `
            <h2>Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>

            <p><strong>Όνομα:</strong> ${full_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Τηλέφωνο:</strong> ${phone}</p>
            <p><strong>Μήνυμα:</strong> ${notes}</p>
        `,
    });

    if (error) {
        console.error("Resend error:", error);

        return Response.json(
            { message: "Failed to send email" },
            { status: 500 }
        );
    }
     console.log("Email sent:", data);

    return Response.json({
        message: "Message received",
    })
}