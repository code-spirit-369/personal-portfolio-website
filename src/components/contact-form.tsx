"use client";

import { SendIcon } from "lucide-react";
import data from "@/data.json";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${data.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:col-span-2 flex flex-col gap-8"
    >
      <div className="flex w-full gap-8">
        <input
          {...register("name")}
          required
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
        />
        <input
          {...register("email")}
          required
          type="email"
          placeholder="Your Email"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
        />
      </div>

      <input
        {...register("subject")}
        type="text"
        placeholder="Your Subject"
        className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
      />

      <textarea
        {...register("message")}
        required
        placeholder="Your Message"
        className="w-full h-48 p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
      />

      <div className="flex justify-center xl:justify-start">
        <Button
          type="submit"
          className="rounded-full uppercase font-semibold text-xl py-8 px-12 bg-transparent border border-[#fcbc30] hover:bg-[#fcbc30]"
        >
          Send Message <SendIcon className="ml-4 size-6" />
        </Button>
      </div>
    </form>
  );
}
