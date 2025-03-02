"use server";

import * as brevo from '@getbrevo/brevo';
import config from '@/config';

export interface SendEmailDto {
  subject: string;
  to: { email: string; name: string }[]; // Lista de destinatarios con correos electrónicos y nombres
  htmlContent: string; // Cuerpo HTML del email
  sender: { name: string; email: string }; // Información del remitente del email
  attachment?: { url: string; name: string; contentId: string }[]; // Lista de archivos adjuntos (opcional)
}

let apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  config.BREVO_API_KEY as string
);

const smtpEmail = new brevo.SendSmtpEmail();

export async function sendEmail({ subject, to, htmlContent, sender, attachment }: SendEmailDto) {
  smtpEmail.to = to;
  smtpEmail.subject = subject;
  smtpEmail.sender = sender;
  smtpEmail.attachment = attachment;
  smtpEmail.htmlContent = `${htmlContent}`;

  await apiInstance.sendTransacEmail(smtpEmail);
}

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
          .content p {
            font-size: 16px;
          }
          .content p span {
            font-size: 24px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Lo esperamos en la ciudad de las Cataratas</h1>
          </div>
          <div class="content">
            <p>&#128674; El Hotel Iguazú Urban Express, cuenta con habitaciones confortables singles, dobles y triples, (puede ser con cama matrimonial  y una soltero o 3 solteros )  aire acondicionado, TV por cable y baño privado, ropa de cama y toallas.</p>
            <p>&#11007; Estacionamiento sobre la calle, contamos con cámaras de seguridad.</p>
            <img src="https://www.iguazuurbanhotel.com/_next/image?url=%2Fimg%2Fgallery-img-3.jpg&w=640&q=75" alt="Imagen de bienvenida">
            <p>Te esperamos pronto en nuestro hotel, donde la comodidad y la hospitalidad son nuestra prioridad.</p>
            <p>El valor incluye:</p>
            <p>&#128248; el uso de la piscina &#127946;&#8205;&#9792;&#65039;‍</p> 
            <p>&#128248; limpieza de la habitación</p> 
            <p>&#128248; wi-fi en todo el predio</p> 
            <p>&#128248; desayuno</p> 
            <p>&#128204; &#9202;&#65039; Contamos con personal las 24 hs. que pueden recibirlos.</p>
            <p>&#128204; &#9202;&#65039; Horario de ingreso a partir de las 14:00 hs. </p>
            <p>&#128204; &#9202;&#65039; Horario de salida 10:00 am</p>
            <p>&#128204; &#9202;&#65039; Horario de desayuno de 07:00 a 10:00 am </p>
            <p>&#128309; Forma de pago </p>
            <p>&#9989; Efectivo </p>
            <p>&#9989; Transferencia</p>
            <p>&#9989; Tarjeta débito o crédito</p>
            <p>Para tomar la reserva le solicitamos el pago de la primer noche por transferencia, el resto lo abona al ingreso.</p>
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
      subject: "Bienvenido al Iguazú Urban Hotel",
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
