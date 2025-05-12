# Inventory Tracking
# React + Vite

This project is developed for practicing purpose.
The website shows different information based on role (Customer/Employee)
- Customer will see only lists of products and can submit a question
- Employee will see lists of the inventory and able to edit the list (Credential verification is needed)

Limitation: New product added will not have description/img => expect to be updated from Backend not by the user

## Development
- Database : PostgreSQL
- Frontend : React JS
- Backend : Node JS

## Installation
1. Clone the repository :
```bash
 git clone https://github.com/macyy555/inventory-tracking.git
```

2. Import the database for the inventory to pgAdmin :
```bash
path : src\assets\DB\inventoryTracking.sql
```

3. Set up .env with your credential :
```bash
VITE_DB_HOST=
VITE_DB_PORT=
VITE_DB_USER=
VITE_DB_NAME=
VITE_DB_PASSWORD=
VITE_DB_EXP_PORT=
VITE_CLIENT_HOST=
VITE_CLIENT_PORT=
VITE_SESSION_SECRET=
```

4. Install dependencies :
```bash
npm install
```

5. Start the server : server is run on http://localhost:5000
```bash
npm start
```

6. Start the website : website is run on http://localhost:3030
```bash
npm run dev
```


