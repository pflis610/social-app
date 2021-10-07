export default function validate(values) {

    let errors = {};

    if (!values.userName) {
      errors.userName = 'User Name is required';
    } else if (values.userName.trim().length < 4) {
      errors.userName = 'User Name must be 4 or more characters';
    } else if (!(/^\S{3,}$/.test(values.userName))) {
      errors.userName = 'User Name cannot contain whitespace';
    }
    
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }else if (!(/^\S{3,}$/.test(values.userName))) {
      errors.userName = 'E-mail cannot contain whitespace';
    }

    console.log(/^[0-zA-Z$&+,:;=?@#|'<>.^*()%!]*$/.test(values.password));

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.trim().length < 6) {
      errors.password = 'Password must be 6 or more characters';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$/.test(values.password)) {
      errors.password = 'Password must contain at least one numeric digit and a special character';

    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords are not same';
      }

    return errors;

  };