# CarHealth Lite

Aplicatie web full-stack pentru diagnostic auto asistat de AI. Utilizatorii isi creeaza cont, se autentifica si pot genera un diagnostic pe baza informatiilor despre vehicul si simptome.

## Functionalitati

- Autentificare utilizatori (signup/login) cu JWT
- Dashboard protejat (necesita token)
- Diagnostic AI pentru vehicul (marca, model, an, motorizare, simptome etc.)

## Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT
- OpenAI API (model: gpt-5-nano)

### Frontend
- React 18
- React Router
- Axios
- CSS custom

## Prerechizite

- Node.js (v16+)
- npm
- MongoDB local sau MongoDB Atlas
- Cheie OpenAI (OPENAI_API_KEY)

## Instalari necesare din consola

Nu trebuie instalat nimic separat pentru AI sau MongoDB in afara de pachetele proiectului.

- Backend: `npm install` (instaleaza OpenAI, Mongoose etc.)
- Frontend: `npm install`

MongoDB:
- Daca folosesti MongoDB Atlas, nu instalezi nimic local.
- Daca vrei MongoDB local, instalezi separat MongoDB si pui `MONGO_URI` catre local.

## Instalare

### 1) Clone repository

```bash
git clone <repository-url>
cd CarHealth-Lite
```

### 2) Backend - instalare pachete

```bash
cd backend
npm install
```

### 3) Backend - configurare variabile de mediu

Creeaza `backend/config.env` (sau `backend/.env`). Aplicatia cauta `config.env` mai intai.

```env
MONGO_URI=mongodb://localhost:27017/carhealth
JWT_SECRET=schimba_cu_un_secret_puternic
OPENAI_API_KEY=cheia_ta_openai
PORT=5000
```

### 4) Frontend - instalare pachete

```bash
cd ../client
npm install
```

## Rulare locala

### Backend

```bash
cd backend
npm start
```

Serverul porneste pe `http://localhost:5000`.

### Frontend

```bash
cd client
npm start
```

Aplicatia porneste pe `http://localhost:3000`.

## Utilizare

### 1) Creare cont

- Acceseaza `http://localhost:3000`
- Mergi la pagina de signup
- Introdu datele si creeaza cont

### 2) Login

- Introdu email si parola
- Vei fi redirectionat catre dashboard

### 3) Diagnostic AI

- Completeaza formularul cu datele masinii
- Apasa butonul de diagnostic
- Vei primi un raspuns generat de AI

## API (backend)

- `POST /auth/signup` (name, email, password)
- `POST /auth/login` (email, password)
- `POST /api/diagnostic` (necesita `Authorization: Bearer <token>`)

## Variabile de mediu

### Backend

| Variabila | Necesara | Descriere |
|----------|----------|-----------|
| `MONGO_URI` | Da | Conexiune MongoDB |
| `JWT_SECRET` | Da | Secret pentru JWT |
| `OPENAI_API_KEY` | Da | Cheie OpenAI |
| `PORT` | Nu | Port backend (default 5000) |

### Frontend

| Variabila | Necesara | Descriere |
|----------|----------|-----------|
| `REACT_APP_API_URL` | Nu | URL API backend (daca vrei alt host) |

## CORS si API URL

- Backend: `backend/server.js` are CORS setat pe `http://localhost:3000`. Pentru deploy actualizeaza origin.
- Frontend: `client/src/services/api.js` foloseste `http://localhost:5000` ca baza.

## Structura proiect

```
CarHealth-Lite/
├── backend/
│   ├── config/
│   │   └── db.js               
│   ├── controllers/
│   │   ├── authController.js   
│   │   └── vehicleController.js
│   ├── middleware/
│   │   └── authMiddleware.js   
│   ├── models/
│   │   ├── User.js             
│   │   └── Vehicle.js          
│   ├── routes/
│   │   ├── authRoutes.js      
│   │   ├── diagnosticRoutes.js 
│   │   └── vehicleRoutes.js    
│   ├── utils/
│   │   └── generateToken.js    
│   ├── server.js              
│   └── package.json
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── CarHealth Lite.png  
│   │   └── favicon.ico        
│   ├── src/
│   │   ├── components/
│   │   │   └── PrivateRoute.js 
│   │   ├── context/
│   │   │   └── AuthContext.js  
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── Dashboard.js
│   │   ├── services/
│   │   │   └── api.js         
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── README.md
└── LICENSE
```

## Troubleshooting

### MongoDB
- Verifica `MONGO_URI`
- Daca folosesti Atlas, permite accesul IP-ului tau

### OpenAI
- Verifica `OPENAI_API_KEY`
- Daca primesti erori de autentificare, refa cheia

### CORS
- Asigura-te ca frontend si backend au URL-urile corecte

## License

Vezi fisierul `LICENSE`.

## Support

Pentru intrebari, deschide un issue in repository.
