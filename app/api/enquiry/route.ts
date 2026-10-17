import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
export const runtime = "nodejs";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request:NextRequest){
try {
const body=await request.json();
if(body.website) return NextResponse.json({ok:true});
const name=String(body.name||"").trim().slice(0,120);
const email=String(body.email||"").trim().slice(0,254);
const phone=String(body.phone||"").trim().slice(0,60);
const message=String(body.message||"").trim().slice(0,4000);
if(!name||!emailPattern.test(email)||message.length<10) return NextResponse.json({error:"Please enter your name, a valid email address and at least 10 characters in the message."},{status:400});
const apiKey=process.env.RESEND_API_KEY;
const to=process.env.ENQUIRY_TO_EMAIL;
const from=process.env.RESEND_FROM_EMAIL;
if(!apiKey||!to||!from) return NextResponse.json({error:"Online enquiries are not available yet. Please telephone the workshop."},{status:503});
const resend=new Resend(apiKey);
const result=await resend.emails.send({from,to:[to],replyTo:email,subject:"RN Motorcycles website enquiry",text:`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`});
if(result.error) return NextResponse.json({error:"Your enquiry could not be sent. Please call the workshop."},{status:502});
return NextResponse.json({ok:true});
}catch{return NextResponse.json({error:"Unable to process your enquiry."},{status:400});}
}