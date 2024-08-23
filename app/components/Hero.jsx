import styles from './Hero.module.css'

export default function Hero(){
    
    return(
        <div id={styles['hero-card']}>
            <div id={styles['hero-card-img']}>
            </div>

            <div id={styles['hero-card-content']}>
                <div id={styles['hero-card-content-text']}>
                    <h2>Comforting Keepsakes</h2>
                    <p>We create memory bears, beautifully handcrafted from your loved one’s clothing. These bears serve as a tangible reminder of cherished memories, offering comfort during times of loss and becoming a lasting keepsake for you and your family.</p>
                </div>
                <button id={styles['hero-card-button']}>Shop Now</button>
            </div>
        </div>
    )
}