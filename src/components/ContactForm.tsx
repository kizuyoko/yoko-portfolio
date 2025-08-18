"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";


export const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
    };
  
    const handleClear = () => {
      setName("");
      setEmail("");
      setMessage("");
    };

    return (
      <>
        <h2 className="mt-8 mb-2">Send a Message</h2>
        <p>Otherwise, you can send me a message with this form.</p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="form-container">
            <label htmlFor="yourName">Your Name *</label>
            <input 
              name="yourName"
              type="text"
            />
          </div>
          <div className="form-container">
            <label htmlFor="yourEmail">Your Email *</label>
            <input 
              name="yourEmail"
              type="text" 
            />
          </div>
          <div className="form-container">
            <label htmlFor="yourMessage">Your Message *</label>
            <textarea 
              name="yourMessage"
              className="h-20 border" 
            ></textarea>
          </div>
          <div className="flex flex-row justify-end w-full gap-4 mt-4 mb-8">
            <Button onClick={handleClear}>Clear</Button>
            <Button>Submit</Button>
          </div>
        </form>
      </>
    );
}