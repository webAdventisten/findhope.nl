"use server";

import FormData from "@/app/interfaces/form-data";
import { transport } from "./transport";
import { verifyTransport } from "./verify-transport";

export async function sendOrderInfo(data: FormData) {
  const { SMTP_EMAIL } = process.env;
  const { country, name, email, street, number, city, postCode } = data;

  await verifyTransport();

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: `Book shipment for ${country}`,
      html: `
        <div>
            <p><strong>Data:</strong></p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Address: ${street}, ${number}, ${city}, ${postCode}, ${country}</p>
        </div>
      `,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
