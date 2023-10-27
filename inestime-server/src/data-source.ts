import "reflect-metadata"
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "17080290",
    database: "investimedp",
  
    synchronize: true,
    logging: true,
    entities: ["src/entities/*.ts"],
})

