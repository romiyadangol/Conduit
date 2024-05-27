import '../assets/css/components/signUp.css'
import { Link } from "react-router-dom";

export default function SignUp() {
    return(
        <>
            <div className="sign-up">
                <h1>Sign up</h1>
                <Link className='link' to="/signIn">Have an account?</Link>
                <form>
                    <input type="text" id="username" name="username" placeholder='Username' required/>
                    <input type="email" id="email" name="email" placeholder='Email' required/>
                    <input type="password" id="password" name="password" placeholder='Password' required/>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </>
    )
}