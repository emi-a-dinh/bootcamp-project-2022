"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  console.log(status);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_d8ylk0k",
        "template_6x2ql24",
        formData,
        "TdtLwUnp7jtcRwMgB"
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          setStatus("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className={styles.contactform}>
      <form onSubmit={handleSubmit}>
        <div className={styles.contactsection}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contactsection}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.contactsection}>
          <label>Message: </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}
