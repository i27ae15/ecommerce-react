import { signInWithGooglePopup } from '../../../utils/firebase/firebase.utils';

import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';

const SingIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    );

}


export default SingIn;