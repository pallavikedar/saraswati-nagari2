import React, { useState } from "react";
import styles from "./LeadForm.module.css";

const LeadForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    time: "Morning",
    whatsappConsent: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    const message = `Hello, I’m interested in plot details.

Name: ${form.name}
Phone: ${form.phone}
Preferred Area: ${form.area || "Not specified"}
Best Time to Call: ${form.time}
WhatsApp Contact: ${form.whatsappConsent ? "Yes" : "No"}

Please share brochure & pricing details.`;

    const whatsappNumber = "919494942894"; // ← your number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.section} id="form">
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.benefits}>
          <h3>Get Your Free Brochure & Plot Details</h3>
          <ul>
            <li>✔ NMRDA Approved Layouts</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ Free Site Visit</li>
            <li>✔ Expert Guidance</li>
          </ul>
        </div>

        {/* RIGHT */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <select name="area" value={form.area} onChange={handleChange}>
            <option value="">Preferred Area / Project</option>
            <option>Hingna</option>
            <option>Kalmeshwar</option>
            <option>Chicholi</option>
            <option>Fetri</option>
            <option>Khadgaon</option>
            <option>Kamptee</option>
            <option>Nagpur</option>
            <option>Chhindwara</option>
            <option>Godhni</option>
            <option>Lonara</option>
            <option>Lava</option>
          </select>

          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="time"
                value="Morning"
                checked={form.time === "Morning"}
                onChange={handleChange}
                style={{color:"black"}}
              />
              Morning
            </label>
            <label>
              <input
                type="radio"
                name="time"
                value="Afternoon"
                checked={form.time === "Afternoon"}
                onChange={handleChange}
                style={{color:"black"}}
              />
              Afternoon
            </label>
            <label>
              <input
                type="radio"
                name="time"
                value="Evening"
                checked={form.time === "Evening"}
                onChange={handleChange}
                style={{color:"black"}}
              />
              Evening
            </label>
          </div>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              name="whatsappConsent"
              checked={form.whatsappConsent}
              onChange={handleChange}
            />
            Contact me on WhatsApp too
          </label>

          <button type="submit" className={styles.cta}>
            Get Details Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
