"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setStatus(null);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("Hvala! Vaše sporočilo je bilo poslano.");
          form.reset();
          // Clear success message after 5 seconds
          setTimeout(() => setStatus(null), 5000);
        } else {
          setStatus("Oprostite, prišlo je do napake pri pošiljanju.");
        }
      })
      .catch((error) => setStatus("Oprostite, prišlo je do napake."))
      .finally(() => setLoading(false));
  };

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl border border-accent shadow-sm"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text/70 mb-1">Ime in Priimek</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text/70 mb-1">Email naslov</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text/70 mb-1">Sporočilo</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        ></textarea>
      </div>
      
      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Pošiljanje..." : "Pošlji sporočilo"}
        </Button>
      </div>

      {status && (
        <p className={`text-center text-sm mt-2 ${status.includes("napake") ? "text-red-500" : "text-green-600"}`}>
          {status}
        </p>
      )}
    </form>
  );
}
