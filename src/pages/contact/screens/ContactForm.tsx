"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner"; // optional toast feedback

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Card className="border border-border shadow-md rounded-xl bg-muted/50">
      <CardContent className="p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full hover:scale-[1.01] transition"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
