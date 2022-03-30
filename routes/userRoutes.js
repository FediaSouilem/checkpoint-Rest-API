const express= require ('express');
const { getUser, addUser, deleteUser, updateUser } = require('../controllers/userControllers');
const router= express.Router()


//GET :  RETURN ALL USERS 
router.get('/', getUser);


// POST: ADD A NEW USER TO THE DATABASE 
router.post('/',addUser);

//   PUT : EDIT A USER BY ID 
router.put('/:id',updateUser);

//  DELETE : REMOVE A USER BY ID 
router.delete('/',deleteUser);


module.exports = router;