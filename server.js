const mysql = require('mysql2');
const PORT =process.env.PORT || 3001;
// Connection for SQL database


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Beavertrapper69.',
        database: 'castleKeeper_db'
    },
    console.log('Connected to database')
);

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})