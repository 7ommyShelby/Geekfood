import './nav.css'
import photo from '../img/logo.svg'
import Button from './Button.js'

const Nav = () => {
    return (
        <nav className='flex-wrap flex-auto'>
            <div className='icon'>
                <img src={photo} alt="" />
                <h3>GeekFoods</h3>
            </div>
            <div><ul className='items flex-auto'>  
                <li>home</li>
                <li>quote</li>
                <li>resturants</li>
                <li>foods</li>
                <li>contact</li>
            </ul></div>

            <Button
                bgcol="rgb(91, 91, 227)"
                fontcol="white"
                brds="5px"
                pd = "5px 30px"
                fw = "600"
            >
                Get Started
            </Button>
        </nav>
    );
}

export default Nav;