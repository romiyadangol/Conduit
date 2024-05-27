import { Link } from 'react-router-dom'
import '../assets/css/components/signIn.css'
export default function SignIn() {
    return(
        <>
            <div className="sign-in">
                <h1>Sign in</h1>
                <Link className='link' to="/signUp">Need an account?</Link>
                <form>
                    <input type="email" id="email" name="email" placeholder='Email' required/>
                    <input type="password" id="password" name="password" placeholder='Password' required/>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </>
    )
}