import React, { Component } from 'react'
import LandingPage from '../../pages/landingpage';
import home from '../../assets/home.svg'
import './header.css'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};        
    }
    
    render() {
        const {currentPage, handleNavigation} = this.props;
        let currentComponent = currentPage.type.name;

        return (
            <div className='box-area'>
                <div className='header'>
                    <div className='wrapper'>
                        <div className='logo'>
                            <a href='#'>Бостеринская Ривьера</a>
                        </div>
                        <div className='nav'>
                        <img 
                        className={`tablink ${
                            currentComponent === 'Home Page' ? 'homeButtonActive' : ''
                        }`}
                        src={home}
                        onClick={() => handleNavigation(<LandingPage/>)} > 
                        </img>
                        </div>
                    </div>

                    <div className='banner-area'>
                        <h2>Добро пожаловать в Бостеринскую Ривьеру!</h2>
                    </div>
                </div>
            </div>
        )
    }
}
