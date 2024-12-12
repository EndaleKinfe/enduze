const Navbar = () => {
    return ( 
        <nav className='navbar bg-dark'>
        <div className='container-fluid'>
        <a href='#' className="navbar-brand text-light">EndaleKinfe</a>
        <button className='navbar-toggler bg-warning' type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls='menu'
            aria-expanded="false"
            aria-label='Toggle navigation'
        >t</button>
        <div className='collapse navbar-collapse' id="menu">
            <ul className='navbar-nav '>
                <li className='nav-item '><a href="">Home</a></li>
                <li className='nav-item '><a href="">About</a></li>
                <li className='nav-item '><a href="">Skills</a></li>
                <li className='nav-item '><a href="">projects</a></li>
                <li className='nav-item '><a href="">Contact Me</a></li>
                <li className='nav-item '><a href="">Blog</a></li>
            </ul>
        </div>
        </div>
    </nav>
     );
}
 
export default Navbar;