# XPENSE

A web app for tracking expenses and incomes

## Run it locally

1. Create the DB in postgres (schema in repo [here](https://github.com/Gabito-git/Xpense/blob/main/dbCreateStatements-Postgres.txt))

2. Create a .env file in then root and add the following

```
NODE_ENV=development
PORT=4000
JWT_KEY= your secret jwt keyword
PG_USER= your postgres user
PG_PASSWORD= your postgres password
PG_DATABASE= your postgres database name
PG_HOST= your postgres host. Locally localhost

```

3. Install dependencies (frontend and backend)

```
npm install
cd frontend
npm install
``` 
5. Run

```
# Run frontend (:3000) & backend (:4000)
npm run dev

# Run backend only
npm run server
```
