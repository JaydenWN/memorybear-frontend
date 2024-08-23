import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer>
            <div id={styles['footer-links']}>
                <div id={styles['socials']}>
                    <p>Socials</p>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Etsy</a></li>
                    </ul>
                </div>
                <div>
                    <p>Site links</p>
                    <ul>
                        <li><a href="">How it works</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Products</a></li>
                    </ul>
                </div>
            </div>
            <div id={styles['dev-link']}>
                <a href="http://www.jaydenwnaylon.com">Designed and Developed by Jayden Naylon</a>
            </div>
        </footer>
    )
}