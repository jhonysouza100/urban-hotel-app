"use server";

import * as brevo from '@getbrevo/brevo';
import htmlContent from '@/static/email_html';
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
