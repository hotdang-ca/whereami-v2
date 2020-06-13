import { Router } from "express";
import { usersController } from "../controllers/users";

import {version} from '../../../package.json';

const router = Router();

router.get('/', (_, res) => {
    res.status(200).json({ status: 'ok', version });
});

router.get('/users', usersController.listUsers);
router.post('/users', usersController.addUser);
router.get('/users/:userId', usersController.getUser);
router.delete('/users/:userId', usersController.deleteUser);

export { router };
