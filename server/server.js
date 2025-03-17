require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require('dotenv').config({ path: __dirname + '/.env' });

// Konfiguracja nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Możesz zmienić na 465
  secure: false, // Port 587 wymaga `false`, a 465 wymaga `true`
  requireTLS: true, // Wymuś użycie TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Możesz spróbować bez tego
  },
});




console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "OK" : "MISSING");


app.post('/interest', async (req, res) => {
  const { firstName, lastName, phone, email, roomType, peopleCount, checkIn, checkOut, wantsInvoice, invoiceDetails, additionalInfo } = req.body;

  let message = `
    Nowe zgłoszenie rezerwacji:
    Imię: ${firstName}
    Nazwisko: ${lastName}
    Telefon: ${phone}
    E-mail: ${email ? email : 'Nie podano'}
    Typ pokoju: ${roomType}
    Liczba osób: ${peopleCount ? peopleCount : 'Nie podano'}
    Zameldowanie: ${checkIn}
    Wymeldowanie: ${checkOut}
    
    Informacje dodatkowe: ${additionalInfo ? additionalInfo : 'Brak'}
  `;

  if (wantsInvoice) {
    message += `\n\nFaktura: TAK\nDane do faktury: ${invoiceDetails}`;
  } else {
    message += `\n\nFaktura: NIE`;
  }

  try {
    let emailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Nowa rezerwacja hotelowa",
      text: message,
    };

    await transporter.sendMail(emailOptions);
    res.status(200).json({ message: 'Powiadomienie wysłane!' });
  } catch (error) {
    console.error('Błąd przy wysyłaniu maila:', error);
    res.status(500).json({ message: 'Błąd wysyłania maila' });
  }
});

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));

  // Dla każdej nieznanej trasy zwróć index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
