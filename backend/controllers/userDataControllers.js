const UserData = require('../models/UserData.js');

// POST: Create a new user data entry
exports.createUserData = async (req, res) => {
  try {
    const userData = new UserData(req.body);
    const savedUserData = await userData.save();
    res.status(201).json(savedUserData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET: Fetch all user data entries
exports.getAllUserData = async (req, res) => {
  try {
    const userData = await UserData.find();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserDataByID = async (req, res) => {
    try {
        const userData = await UserData.findById(req.params.id);
        if (!userData) {
            return res.status(404).json({ message: 'User data not found' });
        }
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUserDataByID = async (req, res) => {
    try {
        const userData = await UserData.findByIdAndUpdate(req.params.id, req.body, {new:true}); // new: true gives you data as it is after it is updated. Without it, wil lgive yhou data that was there before updating
        if (!userData) {
            return res.status(404).json({ message: 'User data not found' });
        }
        res.json(userData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUserDataByID = async (req, res) => {
    try {
        const userData = await UserData.findByIdAndDelete(req.params.id);
        if (!userData) {
        return res.status(404).json({ message: 'User data not found' });
        }
        res.json({ message: 'User Data has been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSubmissionsByUID = async (req, res) => {
  try {
      const submissions = await UserData.find({"accountInformation.uid": req.params.uid});
      res.json(submissions)
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};