const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
  personalInformation: {
    firstName: { type: String },
    lastName: { type: String },
    email: {
      type: String,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    phoneNumber: String,
    personalBest: Number,
  },
  goals: {
    overallGoals: String,
    targetDistance: Number,
    timeFrame: Number,
  },
  injuryHistory: {
    turnUCL: String,
    other: String,
  },
  bodyInformation: {
    age: Number,
    height: Number, 
    weight: Number, 
    bodyFatPercentage: Number,
    leanBodyMass: Number,
  },
  strength: {
    benchPress: Number,
    squat: Number,
    frontSquat: Number,
    deadlift: Number
  },
  olympicLifts: {
    snatch: Number,
    clean: Number,
    jerk: Number,
    powerClean: Number,
    powerSnatch: Number,
    cleanAndJerk: Number
  },
  jumps: {
    verticalJump: Number,
    broadJump: Number,
    standingLongJump: Number,
    standing3Jumps: Number,
    standing5Jumps: Number,
  },
  weightedBallThrows: {
    overheadBackward54: Number,
    overheadBackward4: Number, 
    underhand54: Number,
    underhand4: Number,
    overheadForeward4: Number,
    overheadForeward25: Number,
    overheadForeward2: Number,
  }, 
  speed: {
    flying20m: Number,
    standing30m: Number,
    dash30m: Number
  },
  throws: {
    standingThrow800g: Number,
    standingThrow600g: Number,
    standingThrow1kgBall: Number,
    standingThrow2kgBall: Number,
    threeStep800g: Number,
    threeStep600g: Number
  },
  mobility: {
    passThroughMobility: Number,
    rightSplit: Number,
    leftSplit: Number,
    middleSplit: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('UserData', UserDataSchema);
