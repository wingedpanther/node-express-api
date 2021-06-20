import express from 'express';
import { createUser,
         getUser,
         getUsers,
         updateUser,
         deleteUser } from '../controllers/users.js'

const router = express.Router();
 
//All route startes with /users so no need to add "users" after / here
router.get('/',getUsers);
//POST function  - to add/insert new data(user) 
router.post('/',createUser);
//GET - Getting data by using a parameter(ID)
// ":" meaning, route will get anything after ..users/----
// id stores in req.params
router.get('/:id',getUser);
//DELETE - using id
router.delete('/:id',deleteUser)
//PATCH - Update an object in array list - to update sub items in a the main list(age, firstname etc)
router.patch('/:id',updateUser);

export default router;
