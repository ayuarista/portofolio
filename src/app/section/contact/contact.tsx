"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface Props {
  e: string; // WhatsApp number like 6281234567890
}

export default function Contact({ e }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsApp = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${e}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="max-w-5xl h-screen flex flex-col-reverse justify-center items-center mx-auto gap-10 px-6 py-10 bg-background text-foreground">
      {/* Left (Form) */}
      <form
        action="https://formspree.io/f/xwpqqerz"
        method="POST"
        className="w-full space-y-5"
      >
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="How can I help you?"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="submit" className="w-full sm:w-auto hover:cursor-pointer">
            Send via Email
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-auto flex items-center gap-2 hover:cursor-pointer"
            onClick={handleWhatsApp}
          >
            <FaWhatsapp className="text-green-500 text-xl" />
            WhatsApp Me
          </Button>
        </div>
      </form>

      {/* Right (Text) */}
      <div className=" space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Let&apos;s Start{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Conversation
          </span>{" "}
          With Me!
        </h1>
        <p className="text-muted-foreground text-sm/6">
          As a junior front-end developer, I strive to make interfaces friendly
          and interactive, bridging academic knowledge with practical
          creativity while continuously developing my technical skills.
        </p>
      </div>
    </section>
  );
}
