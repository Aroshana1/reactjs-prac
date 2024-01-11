import closeMenu from '../image/close.svg';
const Header = ()=>(
    <header className="head_container">

        <h1>Aroshana <span>Dev</span></h1>
        <nav>
            <ul>
                <div className='headerclose'>
                    <img src ={closeMenu} height="4%"/>
                </div>
                

               
                <div className='headermenu'>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Projects</li>

                </div>
                
            </ul>
        </nav>
    </header>
)

export default Header;