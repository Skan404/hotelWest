# Hotel West - Aplikacja Rezerwacyjna

Aplikacja webowa do rezerwacji pokoi hotelowych

## 🚀 Technologie

### Frontend
- React 19
- React Router DOM 7
- Axios
- React Scripts
- CSS Modules

### Backend
- Node.js
- Express.js
- Nodemailer (wysyłanie e-maili)
- Twilio (obsługa SMS)
- Vonage (dodatkowa obsługa komunikacji)

## 📋 Funkcjonalności

- System rezerwacji pokoi hotelowych
- Formularz rezerwacji z walidacją
- Wysyłanie potwierdzeń rezerwacji e-mailem
- Powiadomienia SMS


## 🛠️ Instalacja i Uruchomienie

1. Sklonuj repozytorium:
```bash
git clone https://github.com/Skan404/hotelWest.git
```

2. Zainstaluj zależności:
```bash
cd client
npm install
cd ../server
npm install
```

3. Skonfiguruj zmienne środowiskowe:
- Utwórz plik `.env` w katalogu `server` z następującymi zmiennymi:
  ```
  SMTP_USER=your_email@gmail.com
  SMTP_PASS=your_app_password
  FROM_EMAIL=your_email@gmail.com
  TO_EMAIL=recipient_email@gmail.com
  PORT=5000
  ```

4. Uruchom aplikację:
```bash
cd client
npm start
```

Aplikacja uruchomi się na:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

