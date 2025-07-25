import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactSection.css';

/**
 * ContactSection component — A full contact form using Formspree.
 * Includes name, email, phone with country code, message, and KVKK checkbox.
 */
const ContactSection = () => {
  const [state, handleSubmit] = useForm("meozqpvn"); // Formspree form ID
  const [countryCode, setCountryCode] = useState('+90');
  const [showKvkkWarning, setShowKvkkWarning] = useState(false);

  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    message: '',
    kvkkOnay: false,
  });

  // Updates form state on input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // Hide KVKK warning if checkbox becomes checked
    if (name === "kvkkOnay" && checked) {
      setShowKvkkWarning(false);
    }
  };

  // Updates selected country code for phone
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  // Prevents submit if KVKK checkbox is not checked
  const handleSubmitWithKvkkCheck = (e) => {
    if (!formData.kvkkOnay) {
      e.preventDefault();
      setShowKvkkWarning(true);
      return;
    }
    handleSubmit(e);
  };

  // Show success message if submission is successful
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

        <form className="contact-form" onSubmit={handleSubmitWithKvkkCheck}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ad">* Ad</label>
              <input
                type="text"
                id="ad"
                name="ad"
                value={formData.ad}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="soyad">* Soyad</label>
              <input
                type="text"
                id="soyad"
                name="soyad"
                value={formData.soyad}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">* Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="form-group">
              <label htmlFor="telefon">Telefon</label>
              <div className="phone-input-group">
                <select
                  className="country-code-select"
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                >
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

          {showKvkkWarning && (
            <p className="kvkk-warning">Lütfen KVKK onay kutusunu işaretleyin.</p>
          )}

          <button
            type="submit"
            className="submit-button"
            disabled={state.submitting}
          >
            {state.submitting ? "Gönderiliyor..." : "GÖNDER"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
