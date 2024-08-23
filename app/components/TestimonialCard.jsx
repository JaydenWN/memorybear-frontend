import styles from './TestimonialCard.module.css'
import { useState,useEffect } from 'react'

export default function TestimonialCard({testimonialArray}){
    const testimonialLength = testimonialArray.length
   
    const [currentTestimonial, setCurrentTestimonial] = useState(testimonialArray[0])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fadeClass, setFadeClass] = useState(styles['fade-in']);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass(styles['fade-out']);

            setTimeout(() => {
                setCurrentIndex(prevIndex => {
                    const newIndex = (prevIndex + 1) % testimonialLength;
                    setCurrentTestimonial(testimonialArray[newIndex]);
                    return newIndex;
                });
                setFadeClass(styles['fade-in']);
            }, 500); // Match the duration of the CSS transition
        }, 8000); // Adjust the duration for the interval between changes

        return () => clearInterval(interval);  // Cleanup interval on unmount
    }, [testimonialArray, testimonialLength]);

    return(
        <div id={styles['testimonial-card']}>
        <img src={currentTestimonial?.img} alt='Previous customers bear.'></img>
        
        <div className={`${styles['text-content']} ${fadeClass}`}>
            <blockquote>{currentTestimonial?.quote}</blockquote>
            <p id={styles['quotee']}>{currentTestimonial?.quotee}</p>
        </div>
    </div>
    )
}