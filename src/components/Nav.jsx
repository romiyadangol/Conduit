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
                        <li><a href="#">Home</a></li>
                        <li><a className='sign' href="#">Sign in</a></li>
                        <li><a className='sign' href="#">Sign up</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}