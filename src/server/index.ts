import dotenv from "dotenv";
import express from "express";

import { router } from './routes';

dotenv.config();

const expressServer = express();
expressServer.use(express.json());
expressServer.use('/api/v1', router);

export { expressServer };
