import styles from './CustomerStories.module.css'
import TestimonialCard from './TestimonialCard'

export default function CustomerStories(){
    return(
        <div id={styles['customer-stories-container']}>
            <h2>Customer Stories</h2>

            <TestimonialCard
                testimonialArray={[
                    {
                        quotee: '- Sarah M',
                        quote: 'After losing my grandmother, I wanted something special to remember her by. The memory bear made from her favorite sweater has brought so much comfort to our family.',
                        img: './bear.jpg'
                    },
                    {
                        quotee: '- Jayden N',
                        quote: 'When we lost my grandfather, we wanted a unique way to keep his memory alive. The bear made from his old flannel shirt has become a cherished keepsake for us all, bringing warmth and solace in our time of grief.',
                        img: './bear.jpg'
                    },
                    {
                        quotee: '- Sam S',
                        quote: "Creating a memory bear from my mother’s beloved cardigan has been a healing experience for our family. It’s not just a reminder of her warmth, but a symbol of the love and comfort she always provided us.",
                        img: './bear.jpg'
                    }
                ]}/>
        </div>
    )
}