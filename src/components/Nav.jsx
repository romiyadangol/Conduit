import { Link, Outlet } from 'react-router-dom'
import '../assets/css/components/nav.css'
export default function Nav() {
    return(
    <>
        <div className="navbar">
            <div className="header">
                <h1>conduit</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link className='sign' to="/signIn">Sign in</Link></li>
                    <li><Link className='sign' to="#">Sign up</Link></li>
                </ul>
            </nav>
        </div>
        <Outlet/>
    </>
    )
}