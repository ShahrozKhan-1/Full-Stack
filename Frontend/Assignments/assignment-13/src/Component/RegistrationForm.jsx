import React, { useState, useEffect, useReducer } from 'react';
import "./RegistrationForm.css"

// Initial state for the form
const initialState = {
  name: '',
  email: '',
  password: '',
  address: '',
  gender: '',
  skills: [],
  country: '',
  errors: {}
};

// Reducer function to manage form state
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { name, email, password, address, gender, skills, country, errors } = state;

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const newSkills = checked ? [...skills, value] : skills.filter(skill => skill !== value);
      dispatch({ type: 'SET_FIELD', field: 'skills', value: newSkills });
    } else if (type === 'radio') {
      dispatch({ type: 'SET_FIELD', field: name, value });
    } else {
      dispatch({ type: 'SET_FIELD', field: name, value });
    }
  };

  // Validation logic in useEffect
  useEffect(() => {
    const validate = () => {
      const newErrors = {};

      if (!name.trim()) newErrors.name = 'Name is required';
      if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = 'Invalid email address';
      if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
      if (!address.trim()) newErrors.address = 'Address is required';
      if (!gender) newErrors.gender = 'Gender is required';
      if (skills.length === 0) newErrors.skills = 'Select at least one skill';
      if (!country) newErrors.country = 'Select a country';

      dispatch({ type: 'SET_ERRORS', errors: newErrors });
    };

    validate();
  }, [name, email, password, address, gender, skills, country]);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert(JSON.stringify({ name, email, password, address, gender, skills, country }, null, 2));
      dispatch({ type: 'RESET_FORM' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container'>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={address} onChange={handleChange} />
        {errors.address && <span>{errors.address}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={handleChange} /> Female
        {errors.gender && <span>{errors.gender}</span>}
      </div>
      <div>
        <label>Skills:</label>
        <input type="checkbox" name="skills" value="HTML" checked={skills.includes('HTML')} onChange={handleChange} /> HTML
        <input type="checkbox" name="skills" value="CSS" checked={skills.includes('CSS')} onChange={handleChange} /> CSS
        <input type="checkbox" name="skills" value="JavaScript" checked={skills.includes('JavaScript')} onChange={handleChange} /> JavaScript
        {errors.skills && <span>{errors.skills}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={country} onChange={handleChange}>
          <option value="">Select</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <span>{errors.country}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
