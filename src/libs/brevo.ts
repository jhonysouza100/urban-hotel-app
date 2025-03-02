import * as brevo from '@getbrevo/brevo';

const BREVO_API_KEY = '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';
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
  BREVO_API_KEY as string
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