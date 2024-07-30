import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; 
import axios from 'axios'; // used for making HTTP requests to backend

// take every field and convert it to it's corresponding slug
// probably a better way to do this, but this is the quickest to implement (that i can think of)
const fieldToSlug = {
  "First Name": "firstName",
  "Last Name": "lastName",
  "Email": "email",
  "Phone Number": "phoneNumber",
  "Personal Best": "personalBest",
  "Overall Javelin Goals": "overallGoals",
  "Target Distance": "targetDistance",
  "Time Frame": "timeFrame",
  "Torn UCL": "turnUCL",
  "Other": "other",
  "Age": "age",
  "Height": "height",
  "Weight": "weight",
  "Body Fat %": "bodyFatPercentage",
  "Lean Body Mass": "leanBodyMass",
  "Bench Press": "benchPress",
  "Squat": "squat",
  "Front Squat": "frontSquat",
  "Deadlift": "deadlift",
  "Snatch": "snatch",
  "Clean": "clean",
  "Jerk": "jerk",
  "Power Clean": "powerClean",
  "Power Snatch": "powerSnatch",
  "Clean and Jerk": "cleanAndJerk",
  "Vertical Jump": "verticalJump",
  "Broad Jump": "broadJump",
  "Standing Long Jump": "standingLongJump",
  "Standing 3-Jumps": "standing3Jumps",
  "Standing 5-Jumps": "standing5Jumps",
  "Overhead Backward (5.4kg)": "overheadBackward54",
  "Overhead Backwards (4kg)": "overheadBackward4",
  "Underhand Throw (5.4kg)": "underhand54",
  "Underhand Throw (4kg)": "underhand4",
  "Overhead Forward (4kg)": "overheadForeward4",
  "Overhead Forward (2.5kg)": "overheadForeward25",
  "Overhead Forward (2kg)": "overheadForeward2",
  "Flying 20m": "flying20m",
  "Standing 30m": "standing30m",
  "30m Dash": "dash30m",
  "Standing Throw (800g)": "standingThrow800g",
  "Standing Throw (600g)": "standingThrow600g",
}

const sections = {
  personalInformation: {
    name: "Personal Information", 
    fields: ["First Name", "Last Name", "Email", "Phone Number", "Personal Best"],
    placeholder: ["First Name", "Last Name", "Email", "Phone Number", "Personal Best"],
    expectedInput: ["text", "text", "email", "tel"],
  }, 
  goals: {
    name: "Goals",
    fields: ["Overall Javelin Goals", "Target Distance", "Time Frame"],
    placeholder: ["A brief statement on why you throw javelin", "The furthest distance you want to throw (meters)", "How many more years think you'll throw javelin for (years)"],
    expectedInput: ["text", "number", "number"],
},
  injuryHistory: {
    name: "Injury History",
    fields: ["Torn UCL", "Other"],
    placeholder: ["Yes or No", "If applicable, please list injuries below"],
    expectedInput: ["text", "text"],
  },
  bodyInformation: {
    name: "Body Information", 
    fields: ["Age", "Height", "Weight", "Body Fat %", "Lean Body Mass"],
    placeholder: ["Years", "cm", "kg", "%", "kg"],
    expectedInput: ["number", "number", "number", "number", "number"],
  }, 
  strength: {
    name: "Strength", 
    fields: ["Bench Press", "Squat", "Front Squat", "Deadlift"],
    placeholder: ["kg", "kg", "kg", "kg"],
    expectedInput: ["number", "number", "number", "number"],
  }, 
  olympicLifts: {
    name: "Olympic Lifts", 
    fields: ["Snatch", "Clean", "Jerk", "Power Clean", "Power Snatch", "Clean and Jerk"],
    placeholder: ["kg", "kg", "kg", "kg", "kg", "kg"],
    expectedInput: ["number", "number", "number", "number", "number", "number"],
  }, 
  jumps: {
    name: "Jumps", 
    fields: ["Vertical Jump", "Broad Jump", "Standing Long Jump", "Standing 3-Jumps", "Standing 5-Jumps"],
    placeholder: ["cm", "meters", "meters", "meters", "meters"],
    expectedInput: ["number", "number", "number", "number", "number"],
  }, 
  weightedBallThrows: {
    name: "Weighted Ball Throws", 
    fields: ["Overhead Backward (5.4kg)", "Overhead Backwards (4kg)", "Underhand Throw (5.4kg)", "Underhand Throw (4kg)", "Overhead Forward (4kg)", "Overhead Forward (2.5kg)", "Overhead Forward (2kg)"],
    placeholder: ["meters", "meters", "meters", "meters", "meters", "meters", "meters"],
    expectedInput: ["number", "number", "number", "number", "number", "number", "number"],

  },
  speed: {
    name: "Speed", 
    // I want to add the following fields
    // Flying 20m (seconds)	Standing 30m (seconds)	30m Dash (First Step)
    fields: ["Flying 20m", "Standing 30m", "30m Dash"],
    placeholder: ["seconds", "seconds", "seconds"],
    expectedInput: ["number", "number", "number"],
  },
  throws: {
    name: "Throws", 
    // I want to add the following fields
    // Standing Throw (800g), Standing Throw (600g), Standing Throw (1 kg Ball), Standing Throw (2 kg Ball), 3-step (800g), 3-step (600g)
    fields: ["Standing Throw (800g)", "Standing Throw (600g)", "Standing Throw (1 kg Ball)", "Standing Throw (2 kg Ball)", "3-step (800g)", "3-step (600g)"],
    placeholder: ["meters", "meters", "meters", "meters", "meters", "meters"],
    expectedInput: ["number", "number", "number", "number", "number", "number"],
  },
  mobility: {
    name: "Mobility", 
    // I want to add the following fields
    // Pass Through Mobility, Right Split (distance to ground), Left Split (distance to ground), Middle Split (distance to ground)
    fields: ["Pass Through Mobility", "Right Split", "Left Split", "Middle Split"],
    placeholder: ["cm", "cm", "cm", "cm"],
    expectedInput: ["number", "number", "number", "number"],
  }
}

const requirements = new Set();


// give uid to the form so it can then be sent (on submission) to the mongo database.
const Form = ({uid}) => {
  if (!uid) {
    throw new Error('No UID provided to Form component');
  }
  // there's probably a better way to do this
  const initialFormData = {
    accountInformation: {
      uid: uid
    },
    personalInformation: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      personalBest: 0
    },
    goals: {
      overallGoals: '',
      targetDistance: 0,
      timeFrame: 0
    },
    injuryHistory: {
      turnUCL: '',
      other: ''
    },
    bodyInformation: {
      age: 0,
      height: 0, 
      weight: 0, 
      bodyFatPercentage: 0,
      leanBodyMass: 0
    },
    strength: {
      benchPress: 0,
      squat: 0,
      frontSquat: 0,
      deadlift: 0
    },
    olympicLifts: {
      snatch: 0,
      clean: 0,
      jerk: 0,
      powerClean: 0,
      powerSnatch: 0,
      cleanAndJerk: 0
    },
    jumps: {
      verticalJump: 0,
      broadJump: 0,
      standingLongJump: 0,
      standing3Jumps: 0,
      standing5Jumps: 0
    },
    weightedBallThrows: {
      overheadBackward54: 0,
      overheadBackward4: 0, 
      underhand54: 0,
      underhand4: 0,
      overheadForeward4: 0,
      overheadForeward25: 0,
      overheadForeward2: 0
    },
    speed: {
      flying20m: 0,
      standing30m: 0,
      dash30m: 0
    },
    throws: {
      standingThrow800g: 0,
      standingThrow600g: 0,
      standingThrow1kgBall: 0,
      standingThrow2kgBall: 0,
      threeStep800g: 0,
      threeStep600g: 0
    },
    mobility: {
      passThroughMobility: 0,
      rightSplit: 0,
      leftSplit: 0,
      middleSplit: 0
    }
  };
  // really should be using ref here instead of state... who put this here?!?
  const [formData, setFormData] = useState(initialFormData);

  // This needs changed, causes a lot of re-renderings. #kindOfSucks! 
  const handleChange = (section, field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [fieldToSlug[field]]: value
      }
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // ideally we'd just extract the data out of the input box's
    // right here, but we're going to use the state instead
    // because we're lazy and don't want to refactor the handleChange function

    console.log("Attempting to Submit");
    console.log("Form Data:", formData);


    try {
      const response = await axios.post(process.env.REACT_APP_MONGODB_FORM_SUBMISSION,formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Server Response: ", response.data);

      
      setFormData(initialFormData); // Make sure to clear the form after submission!

      // navigate to the form submission page
      navigate('/formSubmission');

    } catch (error) {
      console.error('Error posting data:', error.response ? error.response.data : error);
      alert('Error submitting data. Please try again.');
    }
    
  };


  return (
    <>
      <h1 style={{textAlign: 'center', fontSize: '4em'}}>Open Javelin Project</h1>
      <h1 style={{textAlign: 'center', fontSize: '2em'}}>A data driven approach towards understanding elite javelin performance.</h1>

      <div className="form-container">
          <form onSubmit={handleSubmit}>
              {Object.keys(sections).map((section) => (
                  <div key={section} className="form-section">
                      <h2>{sections[section].name}</h2>
                      <div className="field-container">
                          {sections[section].fields.map((field, index) => (
                              <div key={field} className="input-row">
                                  <label className="input-label">{field}:</label>
                                  <input
                                      type={sections[section].expectedInput[index]}
                                      defaultValue={''}
                                      onChange={(e) => handleChange(section, field, e.target.value)}
                                      placeholder={sections[section].placeholder[index]}
                                      required={requirements.has(fieldToSlug[field])}
                                  />
                              </div>
                          ))}
                      </div>
                  </div>
              ))}
              <button type="submit">Submit</button>
          </form>
      </div>
    </>
  );
};

export default Form;
