import { signInWithGooglePopup } from '../../../utils/firebase/firebase.utils';

import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SingIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm />
        </div>
    );

}


export default SingIn;