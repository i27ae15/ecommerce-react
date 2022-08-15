import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up-form.styles.scss';

const defaultFormFields = {
    'displayName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
};

const SignUpForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = formFields;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const response:any = await createAuthUserWithEmailAndPassword(email, password);
        
            await createUserDocumentFromAuth(response.user, { displayName });
            
            resetFormFields();
        
        } catch (error:any) {            

            if (error.error_code === 'auth/email-already-in-use') {
                alert('Email is already in use');
            } else {
                alert(error);
            }
        }
    }

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    
    return (
        <div className="sign-up-container"> 
            <h2> Don't have an account? </h2>
               <span> Sign Up With Your Email and password</span>
            <form onSubmit={() => (handleSubmit)}>
                <FormInput
                    label={'Display Name'}
                    type='text'
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label={'Email'}
                    type='text'
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label={'Password'}
                    type='text'
                    name="password" 
                    value={password} 
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label={'Confirm Password'}
                    type='text'
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange}
                    required
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}


export default SignUpForm;