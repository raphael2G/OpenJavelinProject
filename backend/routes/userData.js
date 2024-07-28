const express = require('express');
const router = express.Router();
const { createUserData, getAllUserData, getUserDataByID, updateUserDataByID, deleteUserDataByID, getSubmissionsByUID } = require('../controllers/userDataControllers');



// POST, create new user data
router.post('/', createUserData);

// GET, get all user data
router.get('/', getAllUserData);

// GET, fetch data from a specific user entry
router.get('/id/:id', getUserDataByID);

// GET, fetch data from a specific user entry
router.get('/uid/:uid', getSubmissionsByUID);

// PUT: update user entry based on id
router.put('/:id', updateUserDataByID);

// DELETE: Delete a user data entry by ID
router.delete('/:id', deleteUserDataByID);

module.exports = router;
