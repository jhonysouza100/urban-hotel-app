"use server";

import { sendEmail } from "@/libs/brevo";

export async function handleEmail(email: string) {
  let htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
          }
          .header h1 {
            color: #0067b8;
          }
          .content {
            margin-top: 20px;
            text-align: center;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 12px;
            color: #888;
          }
          img {
            width: 100%;
            max-height: 300px;
            max-width: 300px;
            border-radius: 8px;
            }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>¡Bienvenido al Iguazú Urban Hotel!</h1>
          </div>
          <div class="content">
            <p>Hola viajero,</p>
            <p>Gracias por elegir Iguazú Urban Hotel. Nos complace tenerte como parte de nuestra familia.</p>
            <img src="https://www.iguazuurbanhotel.com/_next/image?url=%2Fimg%2Fgallery-img-3.jpg&w=640&q=75" alt="Imagen de bienvenida">
            <p>Te esperamos pronto en nuestro hotel, donde la comodidad y la hospitalidad son nuestra prioridad.</p>
            <p>¡Que tengas una excelente estancia!</p>
          </div>
          <div class="footer">
            <p>&copy; 2024 Iguazú Urban Hotel | Todos los derechos reservados</p>
          </div>
        </div>
      </body>
    </html>
  `;
  
  await sendEmail(
    {
      subject: "Bienvenido a Iguazú Urban Hotel",
      to: [
        {
          email: `${email}`,
          name: `${'Cliente'}`
        }
      ],
      htmlContent: htmlContent, // Usamos el HTML generado
      sender: {
        name: "Iguazú Urban Hotel",
        email: "iguazuurbanhotel@gmail.com"
      }
    }
  );
}