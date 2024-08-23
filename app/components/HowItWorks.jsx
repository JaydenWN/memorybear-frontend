import styles from './HowItWorks.module.css'

export default function HowItWorks(){

    return(
    <div id={styles['how-container']}>
        <div id={styles['how-content']}>
        <h2>How It Works</h2>

        <div id={styles["how-card-container"]}>
            <div className={styles['how-card']}>
                <p>1</p>
                <h3>Select Your Clothing</h3>
                <p>Choose up to three garments that hold the most significance to you.</p>
            </div>

            <div className={styles['how-card']}>
                <p>2</p>
                <h3>Customize Your Bear</h3>
                <p>Choose from our variety of bear designs, sizes, and additional features such as embroidered names, dates, or messages.</p>
            </div>

            <div className={styles['how-card']}>
                <p>3</p>
                <h3>Place Your Order</h3>
                <p>After selecting your clothing and customizations, place your order, and ship the clothing to us. We’ll handle the rest with care and attention to detail.</p>
            </div>
            
        </div>
        </div>
    </div>
    )
}