import styles from './Navbar.module.css'
import { useState } from 'react'

export default function Navbar(){
   
    const [mobileOpen, setMobileOpen] = useState(false);

    function handleMobileOpen(){
        setMobileOpen(!mobileOpen)
    }

    return(
        <div id={styles['nav-container']}>
            <nav>
                <ul className={mobileOpen ? styles['display'] : ''}>
                    <li><a href='/'>How it works</a></li>
                    <li><a href='/'>About</a></li>
                </ul>
                    <div id={styles['site-title']}>
                        <a href='/'>
                            <h1>Memory Keepsake Bears</h1>
                            <small>By Love Patchwork</small>
                        </a>
                        <button 
                            id={styles['mobile-nav-button']}
                            onClick={handleMobileOpen}>
                                {mobileOpen ? 
                                    <img src='./up_arrow.svg' alt='mobile menu icon'/> 
                                    :<img src='./down_arrow.svg' alt='mobile menu icon'/>}
                            
                        </button>
                    </div>
                <ul className={mobileOpen ? styles['display'] : ''}>
                    <li><a href='/'>Testimonials</a></li>
                    <li><a href='/'>Products</a></li>
                    <li>
                        <img src='./cartimg.svg' alt='cart icon'></img>
                        <p>Cart</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}