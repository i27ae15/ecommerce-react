const SignUpForm = () => {
    return (
        <div>
            <h1>Sign Up With Your Email and password</h1>
            <form onSubmit={() => {

            }}>
                <label>Display Name</label>
                <input type='text' required/>

                <label>Email</label>
                <input type='email' required/>

                <label>Passwords</label>
                <input type='password' required/>

                <label>Confirm Passwords</label>
                <input type='password' required/>

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}


export default SignUpForm;