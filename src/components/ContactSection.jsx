import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        ad: '',
        soyad: '',
        email: '',
        telefon: '',
        mesaj: '',
        kvkkOnay: false,
    });
    const [countryCode, setCountryCode] = useState('+1'); // Başlangıçta ABD (+1) olarak ayarlı

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form verileri gönderildi:', { ...formData, telefon: `${countryCode}${formData.telefon}` });
        // Bu veriyi genellikle bir backend API'ye gönderirsiniz
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Bize Ulaşın</h2>
                <p className="contact-description">
                    Görüş, öneri ya da şikayetiniz paylaşmak isterseniz, "İletişim Formu"nu doldurarak bize ulaştırabilirsiniz. En kısa sürede değerlendirilip size geri döneceğiz.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
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
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefon">Telefon</label>
                            <div className="phone-input-group">
                                <select className="country-code-select" value={countryCode} onChange={handleCountryCodeChange}>
                                    <option value="+1">🇺🇸 +1</option> {/* İlk fotoğraftaki gibi ABD bayrağı ve +1 */}
                                    <option value="+90">🇹🇷 +90</option> {/* Türkiye */}
                                    <option value="+44">🇬🇧 +44</option> {/* Birleşik Krallık */}
                                    {/* İhtiyaca göre başka ülke kodları ekleyebilirsiniz */}
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
                        <label htmlFor="mesaj">* Mesaj</label>
                        <textarea
                            id="mesaj"
                            name="mesaj"
                            rows="5"
                            value={formData.mesaj}
                            onChange={handleChange}
                            required
                        ></textarea>
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
                        <label htmlFor="kvkkOnay">Kişisel verilerin korunması hakkında bilgilendirmeyi okudum, onaylıyorum.</label>
                    </div>

                    <button type="submit" className="submit-button">GÖNDER</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;