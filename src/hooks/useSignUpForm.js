import { useState, useEffect } from 'react';
import axios from 'axios';

const useSignUpForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    
    let newUser = {
      username: "piotr",
      email: "hans2@hansbot.pl",
      password: "password2",
    }
  
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
  
    axios.post(
            'http://akademia108.pl/api/social-app/user/signup', 
            JSON.stringify(newUser),
            { 'headers': headers })
        .then((req) => {
    
            // your code :)      
      
            console.log(req.data);  
        }).catch((error) => {
            console.error(error);
        })
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useSignUpForm;