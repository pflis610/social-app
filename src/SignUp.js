import React from 'react';
import './SignUp.css';


function SignUp(errors, handleBlur, handleChange, handleSubmit, touched, values,) {

    return(
        <div className="sign-up">
            <h1>Sign Up</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <input type="text" className="form-input" id="user-name-input" placeholder="Enter user name" value={values.userName} onChange={handleChange} onBlur={handleBlur} name="userName" required/>
                {touched.userName && errors.userName}
                <input type="email" className="form-input" id="email-input" placeholder="Enter e-mail" value={values.email} onChange={handleChange} onBlur={handleBlur} name="email" required/>
                {touched.email && errors.email}
                <input type="text" className="form-input" id="password-input" placeholder="Enter password" value={values.password} onChange={handleChange} onBlur={handleBlur} name="password" required/>
                {touched.password && errors.password}
                <input type="text" className="form-input" id="confirm-password-input" placeholder="Confirm password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} name="confirm-password" required/>
                {touched.confirmPassword && errors.confirmPassword}
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    );
}

// function SignUp() {
//     return(
//         <div className="sign-up">
//             <h1>Sign Up</h1>
//             <form className="sign-up-form">
//                 <input type="text" name="user-name" placeholder="User Name" />
//                 <input type="email" name="email-adress" placeholder="E-mail adress" />
//                 <input type="text" name="password" placeholder="Password" />
//                 <input type="text" name="confirm-password" placeholder="Confirm password" />
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// }



export default SignUp;