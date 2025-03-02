"use client";

import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiArrowRightLine } from "@remixicon/react";
import { toast } from "sonner";
import config from "@/config";
import TEXT from "@/lang/es.json";;
import Button from "@/components/ui/Button";
import { handleEmail } from "@/libs/brevo";

export default function SuscriptionForm() {

  const validations = z.object({
    email: z.string().email(),
  });

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    resolver: zodResolver(validations),
    mode: 'onBlur'
  });

  // console.log('form state:', JSON.stringify(watch(), null, 2)) // { "email": "123" }
  
  // console.log('email: ', watch('email')) // 123, una abreviacion de (e.target.value)

  // "errors" Se dispara con el evento "submit", e impide que este continue.
  // console.log('errors: ', errors) // {email: { message: 'INVALID_EMAIL' } }

  
  const handleEmailWithAPi = async (email: string) => {
    const htmlContent = `
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
              <img src="https://lp-cms-production.imgix.net/2019-06/e92149cf3a85ad5e88c45a6b83f51b21-parque-nacional-iguazu.jpg" alt="Imagen de bienvenida">
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
    try {
      const res = await fetch(`${config.BACKEND_EMAIL_URL}`, {
        method: 'POST',
        body: JSON.stringify({
          subject: "Bienvenido a Iguazú Urban Hotel",
          to: [
            {
              email: `${email}`,
              name: `${'Viajero'}`
            }
          ],
          htmlContent: htmlContent, // Usamos el HTML generado
          sender: {
            name: "Iguazú Urban Hotel",
            email: "iguazuurbanhotel@gmail.com"
          }
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Verificar si la respuesta no es correcta (no OK)
      if (!res.ok) {
        const contentType = res.headers.get('Content-Type'); // Obtener el tipo de contenido de la respuesta
        let errorMessage = 'An error occurred'; // Mensaje por defecto
  
        // Si el contenido es JSON, procesarlo como tal
        if (contentType && contentType.includes('application/json')) {
          const errorData = await res.json();
          errorMessage = errorData.message || 'An unknown error occurred'; // Usar el mensaje del servidor si está disponible
        } else {
          // Si el contenido no es JSON (probablemente HTML), leerlo como texto
          errorMessage = 'Este servicio no se encuentra disponible por el momento.';
        }
  
        throw new Error(errorMessage); // Lanza el error con el mensaje adecuado
      }
  
      // Si la respuesta es exitosa, mostrar mensaje de éxito
      toast.success(`${TEXT.joinSuccess} ${email}`);
      
    } catch (error: any) {
      console.log(error.message);
      // Muestra el error en el toast
      toast.error(`${error.message}`);
    } finally {
      reset(); // Resetear el formulario después de enviar el formulario
    }
  };  
  
  return (
    <>

      <form 
        className="join-form relative grid gap-y-4"
        onSubmit={handleSubmit(({email}) => {
          try {
            handleEmail(email);
            toast.success(`${TEXT.joinSuccess} ${email}`);
          } catch (error: any) {
            toast.error(`${error.message}`);
          } finally {
            reset();
          }
        })}
        aria-label="Formulario de suscripción"
      >
        <input {...register("email")}
          className="join-input py-5 px-4"
          type="email"
          id="email"
          placeholder={TEXT.joinPlaceholder1}
          aria-label="Formulario de suscripción"
        />

        {errors.email && <label className='footer-input-error text-red-600 text-xs absolute top-[-.75rem] right-6 translate-y-[-.5rem]' htmlFor='email'>{errors.email ? (errors.email as FieldError).message : ''}</label>}

        <Button 
          className="move-right" type="submit" aria-label="Enviar formulario"
          text={TEXT.joinButtonText1}
          endIcon={<RiArrowRightLine className="w-5 h-5" />}
        />

      </form>
    </>
  );
}