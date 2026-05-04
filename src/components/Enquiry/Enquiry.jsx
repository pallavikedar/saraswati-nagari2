import React, { useState } from 'react';
import './EnquiryForm.css';
import { useNavigate } from 'react-router-dom';

const EnquiryForm = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    email: '',
    interestedLayout: '',
    availability: '',
    contactTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = "919494942894"; // Replace with your WhatsApp number (without + or dashes)

  const message = `
New Enquiry - Saraswati Nagri

Name: ${formData.name}
Contact No: ${formData.contactNo}
Email: ${formData.email}
Interested Layout: ${formData.interestedLayout}
Availability: ${formData.availability}
Preferred Contact Time: ${formData.contactTime}
  `;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  // Optional redirect after opening WhatsApp
  navigate("/");
};

  return (
    <div className="enquiry-container">
      <div className="enquiry-card">
        <h2 className="enquiry-title">Get in Touch</h2>
        <p className="enquiry-subtitle">Fill in your details and we'll contact you soon</p>

        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name <span className="required">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label>Contact No. <span className="required">*</span></label>
              <input
                type="tel"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Email Address <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Interested Layout <span className="required">*</span></label>
              <select name="interestedLayout" value={formData.interestedLayout} onChange={handleChange} required>
                <option value="">Select Layout</option>
                {[...Array(11)].map((_, i) => {
                  const num = i + 1;
                  const formatted = num < 10 ? `0${num}` : num;
                  return <option key={num} value={`Saraswati Nagari ${formatted}`}>Saraswati Nagari {formatted}</option>;
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Availability <span className="required">*</span></label>
              <select name="availability" value={formData.availability} onChange={handleChange} required>
                <option value="">Select</option>
                <option>Immediately</option>
                <option>Within 1 Month</option>
                <option>Within 3 Months</option>
                <option>Within 6 Months</option>
                <option>Later</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Preferred Contact Time <span className="required">*</span></label>
              <select name="contactTime" value={formData.contactTime} onChange={handleChange} required>
                <option value="">Choose Time</option>
                {[...Array(10)].map((_, i) => {
                  const hour = 9 + i;
                  const displayHour = hour > 12 ? hour - 12 : hour;
                  const ampm = hour >= 12 ? 'PM' : 'AM';
                  const timeStr = `${displayHour.toString().padStart(2, '0')}:00 ${ampm}`;
                  return <option key={i} value={timeStr}>{timeStr}</option>;
                })}
              </select>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;