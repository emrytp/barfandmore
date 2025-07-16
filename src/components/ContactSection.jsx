import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactSection.css';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("myzpybwo"); // Formspree form ID
  const [countryCode, setCountryCode] = useState('+90');

  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    message: '', // burada "mesaj" yerine "message" kullanıldı
    kvkkOnay: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  if (state.succeeded) {
    return <p className="success-message">Mesajınız başarıyla gönderildi!</p>;
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Bize Ulaşın</h2>
        <p className="contact-description">
          Görüş, öneri ya da şikayetiniz paylaşmak isterseniz, "İletişim Formu"nu doldurarak bize ulaştırabilirsiniz.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ad">* Ad</label>
              <input type="text" id="ad" name="ad" value={formData.ad} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="soyad">* Soyad</label>
              <input type="text" id="soyad" name="soyad" value={formData.soyad} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">* Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="telefon">Telefon</label>
              <div className="phone-input-group">
                <select className="country-code-select" value={countryCode} onChange={handleCountryCodeChange}>
                  <option value="+90">🇹🇷 +90</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">* Mesaj</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div className="kvkk-checkbox-container">
            <input
              type="checkbox"
              id="kvkkOnay"
              name="kvkkOnay"
              checked={formData.kvkkOnay}
              onChange={handleChange}
              required
            />
            <label htmlFor="kvkkOnay">
              Kişisel verilerin korunması hakkında bilgilendirmeyi okudum, onaylıyorum.
            </label>
          </div>

          <button type="submit" className="submit-button" disabled={state.submitting}>
            {state.submitting ? "Gönderiliyor..." : "GÖNDER"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
