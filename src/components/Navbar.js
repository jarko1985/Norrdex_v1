import React, { Component } from 'react';
import logo from '../images/logo.jpg'; //logo from images folder
import {FaAlignRight} from 'react-icons/fa'; //npm install --save react-icons
import {Link} from 'react-router-dom';

class Navbar extends Component {

//define state to control toggle    
state={
    isOpen:false
}    

//function to toggle on and off onClick
handleToggle = ()=>{
    this.setState({
        isOpen:!this.state.isOpen
    })
}

    render() {
        return (
            <nav className='myNavbar'>
                <div className='myNav-center'>
                    <div className='myNav-header'>

                        {/*Logo image Starts Here*/}
                        <Link to='/' >
                            <img width='200px' height='80px' src={logo} alt='norrdex logo'/>
                        </Link>
                        {/*Logo image ends Here*/}

                         {/*Hamburger Menu Starts Here*/}
                        <button type='button' className='myNav-btn' onClick={this.handleToggle}>
                            <FaAlignRight className='myNav-icon'/>
                        </button>
                        {/*Hamburger Menu Ends Here*/}
                    </div>

                    {/*Links Starts Here*/}
                    <ul className={this.state.isOpen?'myNav-links show-myNav':'myNav-links' }>
                        <li>
                            <Link  to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/tours'>Tours</Link>
                        </li>
                        <li>
                            <Link to='/flights'>Flights</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    {/*Links ends Here*/}  
                          
                </div>    
            </nav>
        )
    }
}

export default Navbar;
