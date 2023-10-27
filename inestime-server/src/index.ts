import express from "express"; 
import { AppDataSource } from "./data-source";
import cookieParser from "cookie-parser";
import {routerAuth} from "./routes/routerAuth";
import cors from 'cors';
const startServer = async () => {
    try {
      await AppDataSource.initialize().then(() => {
        console.log("Data Source has been initialized!")
    })
  
      const app = express();
      app.use(express.json());
      app.use(cookieParser());
      app.use(cors({
        origin: ['http://localhost:3000'],
        credentials: true,
      }));
      app.use("/api/auth", routerAuth);
      app.listen(5000, ()=>{
        console.log("All right!")
      })

    } catch (err) {
      console.error("Error during Server initialization:", err);
    }
  };

  
  startServer();

  export default startServer;
