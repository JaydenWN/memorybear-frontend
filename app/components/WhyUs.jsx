import styles from './WhyUs.module.css'

export default function WhyUs(){

    return(
        <div id={styles['why-us-container']}>
            <div id={styles['why-us-card']}>
                <h2>Why Choose Us?</h2>
                <p>We understand the importance of preserving memories. Our bears are handcrafted with care, ensuring each stitch is made with love. We take pride in creating something truly special for you to hold close.</p>

                <h3>Made With <span>Love.</span></h3>
                <button>Buy your bear today</button>
            </div>
        </div>
    )
}