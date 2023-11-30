import { NextResponse } from "next/server";
import twilio from "twilio";

// Trae las variables de entorno para la autenticacion
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACOUNT_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
const DESTINATION_PHONE_NUMBER= process.env.DESTINATION_PHONE_NUMBER

// cre un cliente de twilio
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function POST(req) {
  try {

    // maneja los datos que vienen de la peticion
    const data = await req.json();

    // Se crea un mensaje
    const message = await client.messages.create({
      // body: "Hola Mundo desde Twilio API Client",
      body: data.message,
      from: TWILIO_PHONE_NUMBER,
      to: data.phone
      // to: DESTINATION_PHONE_NUMBER
    });
  
    console.log(message.sid);
    
    return NextResponse.json({message: "Mensaje enviado"})
    
  } catch (error) {
    console.log(message.sid);
    return NextResponse.json({message: "Error enviando Mensaje"}, {status: 400});
  }
}