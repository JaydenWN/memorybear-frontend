import type { MetaFunction } from "@remix-run/node";
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import CustomerStories from '../components/CustomerStories'
import styles from '../index.module.css'


export const meta: MetaFunction = () => {
  return [
    { title: "Memory Keepsake Bears | Love Patchwork" },
    { name: "description", content: "Memory Keepsake Bears made by Love Patchwork." },
  ];
};

export default function Index() {

  return(
    <div id={styles["page-container"]}>
      <Hero/>
      <HowItWorks/>
      <CustomerStories/>
    </div>
  )

}
