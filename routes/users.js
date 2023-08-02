import express from "express";

import { createUsers, getUsers, getUser, deleteUser, updateUsers } from "../controllers/users.js";

const router = express.Router();


router.get('/', getUsers)
router.post('/', createUsers)
router.get('/:id', getUser )
router.delete('/:id', deleteUser );
router.patch('/:id', updateUsers )



export default router;
