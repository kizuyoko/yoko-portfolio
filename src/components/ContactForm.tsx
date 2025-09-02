"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import emailjs from "@emailjs/browser";

export const ContactContent = () => {
  const [form, setForm] = useState({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    message: { value: "", error: "" }
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const ref = useRef<HTMLFormElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter a valid email address.";
    } else if ((name === "name" || name === "message") && value.trim() === "") {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }

    setForm(prev => ({
      ...prev,
      [name]: { value, error }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ref.current) {
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        ref.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      handleClear();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  
  const handleClear = () => {
    setForm({
      name: { value: "", error: "" },
      email: { value: "", error: "" },
      message: { value: "", error: "" }
    });
  };

  return (
    <>
      <h2 className="mt-8 mb-2">Send a Message</h2>
      <p>Otherwise, you can send me a message with this form.</p>
       {status === "success" && <h3 className="success-text">Message sent successfully!</h3>}
        {status === "error" && <h3 className="error-text">Failed to send. Please try again.</h3>}
      <form ref={ref} onSubmit={handleSubmit} className="w-full">
        <div className="form-container">
          <label 
            htmlFor="name"
            className={form.name.error ? "error-text" : form.name.value ? "success-text" : ""}
          >Your Name *</label>
          <div>
            <input
              name="name"
              type="text"
              value={form.name.value}
              onChange={onChangeHandler}
              className={form.name.error ? "error-input" : form.name.value ? "success-border" : ""}
            />
            <p className="error-text">{form.name.error}</p>
          </div>
        </div>
        <div className="form-container">
          <label 
            htmlFor="email"
            className={form.email.error ? "error-text" : form.email.value ? "success-text" : ""}
          >Your Email *</label>
          <div>
            <input 
              name="email"
              type="text"
              value={form.email.value}
              onChange={onChangeHandler}
              className={form.email.error ? "error-input" : form.email.value ? "success-border" : ""}
            />
            <p className="error-text">{form.email.error}</p>
          </div>
        </div>
        <div className="form-container">
          <label 
            htmlFor="message"
            className={form.message.error ? "error-text" : form.message.value ? "success-text" : ""}
          >Your Message *</label>
          <div>
            <textarea
              name="message"
              className={`h-20 border ${form.message.error ? "error-input" : form.message.value ? "success-border" : ""}`}
              value={form.message.value}
              onChange={onChangeHandler}
            ></textarea>
            <p className="error-text">{form.message.error}</p>
          </div>
        </div>
        <div className="flex flex-row justify-end w-full gap-4 mt-4 mb-8">
          <Button onClick={handleClear}>Clear</Button>
          <Button 
            disabled={!form.name.value || !form.email.value || !form.message.value}
            type="submit"
          >Submit</Button>
        </div>
       
      </form>
    </>
  );
}     