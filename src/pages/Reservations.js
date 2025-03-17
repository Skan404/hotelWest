import React, { useState } from 'react';
import axios from 'axios';
import './Reservations.css';

function Reservations() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    roomType: '',
    peopleCount: '',
    checkIn: '',
    checkOut: '',
    wantsInvoice: false,
    invoiceDetails: '',
    additionalInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/interest", formData)
      setSubmitted(true);
    } catch (error) {
      console.error('Błąd:', error);
      alert('Wystąpił problem z wysłaniem formularza.');
    }
  };

  if (submitted) {
    return (
      <div className="container">
        <h1>Dziękujemy!</h1>
        <p>Twoje zainteresowanie zostało wysłane. Skontaktujemy się z Tobą wkrótce.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Formularz rezerwacji</h1>
      <form onSubmit={handleSubmit}>
        {/* Imię i nazwisko */}
        <div className="form-group">
          <label>Imię:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Nazwisko:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        {/* Numer telefonu i e-mail */}
        <div className="form-group">
          <label>Numer telefonu:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email (opcjonalnie):</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        {/* Typ pokoju */}
        <div className="form-group">
          <label>Typ pokoju:</label>
          <select name="roomType" value={formData.roomType} onChange={handleChange} required>
            <option value="">Wybierz...</option>
            <option value="Jednoosobowy">Jednoosobowy</option>
            <option value="Dwuosobowy">Dwuosobowy</option>
            <option value="Trzyosobowy">Trzyosobowy</option>
            <option value="Inna liczba osób">Inna liczba osób</option>
          </select>
        </div>

        {formData.roomType === 'Inna liczba osób' && (
          <div className="form-group">
            <label>Liczba osób:</label>
            <input type="number" name="peopleCount" value={formData.peopleCount} onChange={handleChange} min="1" required />
          </div>
        )}

        {/* Daty pobytu */}
        <div className="form-group">
          <label>Data zameldowania:</label>
          <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Data wymeldowania:</label>
          <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
        </div>

        {/* Faktura (opcjonalnie) */}
        <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input type="checkbox" name="wantsInvoice" checked={formData.wantsInvoice} onChange={handleChange} />
          Chcę otrzymać fakturę
        </label>
        </div>


        {formData.wantsInvoice && (
          <div className="form-group">
            <label>Dane do faktury:</label>
            <textarea name="invoiceDetails" value={formData.invoiceDetails} onChange={handleChange}></textarea>
          </div>
        )}

        {/* Informacje dodatkowe */}
        <div className="form-group">
          <label>Informacje dodatkowe:</label>
          <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>
        </div>

        {/* Mniejszy guzik */}
        <button type="submit" className="small-button">Wyślij rezerwację</button>
      </form>

      {/* Podpis pod formularzem */}
      <p className="disclaimer">
        Wysłanie powyższego zapytania nie jest gwarancją rezerwacji.<br />
        Proszę czekaj na odpowiedź na podany adres email.
      </p>
    </div>
  );
}

export default Reservations;
