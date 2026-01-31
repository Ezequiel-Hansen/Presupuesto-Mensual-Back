import {createPool} from "mysql2/promise";
import 'dotenv/config'

const pool=createPool({
    host:process.env.DATABASE_SQL,
    port:parseInt(process.env.PORT_SQL),
    user:process.env.USERNAME_SQL,
    password:process.env.PASS_SQL,
    database:process.env.DATABASE_NAME
})

pool.getConnection()
    .then(connection => {
        console.log("✅ Conexión exitosa a la base de datos:", process.env.DATABASE_NAME);
        connection.release();
    })
    .catch(err => {
        console.error("❌ Error de conexión:", err.message);
    });

export default pool