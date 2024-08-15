"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiArrowRightLine } from "@remixicon/react";
import { Toaster, toast } from "sonner";
import config from "@/config";
import texts from "@/public/texts";
import Button from "@/ui/Button";

export default function suscripcionForm() {

  const TEXT = texts.ES;

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

  const sendEmail = async (data: any) => {
    try {
      const res = await fetch(`${config.BACKEND_EMAIL_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      });

      if (!res.ok) {
        const errorData = await res.json(); // Leer el cuerpo de la respuesta en formato JSON
        throw new Error(errorData.message); // Lanzar un error con el mensaje recibido del servidor
      }

      toast.success(`${TEXT.joinSuccess} ${data.email}`);
      
    } catch (error: any) {
      
      toast.error(`Error: ${error.message}`);

    } finally {
      reset(); // Resetear el formulario después de enviar el formulario
    }
  }

  return (
    <>

      <form 
        className="join-form relative grid gap-y-4"
        onSubmit={handleSubmit(arg => sendEmail(arg))}
        aria-label="Formulario de suscripción"
      >
        <input {...register("email")}
          className="join-input py-5 px-4 bg-neutral-950 placeholder:text-muted-foreground"
          type="email"
          id="email"
          placeholder={TEXT.joinPlaceholder1}
          aria-label="Formulario de suscripción"
        />

        {errors.email && <label className='footer-input-error text-red-600 text-xs absolute top-[-.75rem] right-6 translate-y-[-.5rem]' htmlFor='email'>{errors.email.message}</label>}

        <Button type="submit" aria-label="Enviar formulario">
          {TEXT.joinButtonText1}
          <RiArrowRightLine className="w-5 h-5 stroke-background" />
        </Button>

      </form>

      <Toaster />

    </>
  );
}