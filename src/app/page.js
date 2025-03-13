import Image from "next/image";
import styles from "./page.module.css";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Section10 from "@/components/Section10";
import Section11 from "@/components/Section11";

export default function Home() {
  return (
    <div className={styles.page}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <h1 style={{
        fontFamily: "Dancing Script",
        fontSize: "30px",
        textAlign: "center"
        
        }}>Donde y Cuando</h1>
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section11 />
      <Section10 />
      <Section9 />
      
    </div>
  );
}
