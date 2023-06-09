import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import { useState } from "react";
import 'animate.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = useState(1);

  function handleClick(n) {
    const currentImage = document.querySelector(`[data-id="${show}"]`);
    currentImage.classList.add("animate__animated", "animate__fadeOutLeft");
    currentImage.addEventListener("animationend", () => {
      setShow(n);
    });
  }

  return (
    <>
      <Head>
        <title>Autódromo José Muñiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {show === 1 && (
          <Image
            onClick={() => handleClick(2)}
            src={img1}
            alt="1"
            className="animate__animated animate__fadeIn"
            data-id="1"
            width="400"
            height="800"
          />
        )}
        {show === 2 && (
          <Image
            onClick={() => handleClick(3)}
            src={img2}
            alt="2"
            className="animate__animated animate__fadeInRight"
            data-id="2"
            width="400"
            height="800"
          />
        )}
        {show === 3 && (
          <Image
            onClick={() => handleClick(4)}
            src={img3}
            alt="3"
            className="animate__animated animate__fadeInRight"
            data-id="3"
            width="400"
            height="800"
          />
        )}
        {show === 4 && (
          <Image
            onClick={() => handleClick(5)}
            src={img4}
            alt="4"
            className="animate__animated animate__fadeInRight"
            data-id="4"
            width="400"
            height="800"
          />
        )}
        {show === 5 && (
          <Image
            onClick={() => handleClick(6)}
            src={img5}
            alt="5"
            className="animate__animated animate__fadeInRight"
            data-id="5"
            width="400"
            height="800"
          />
        )}
        {show === 6 && (
          <Image
            onClick={() => handleClick(1)}
            src={img6}
            alt="6"
            className="animate__animated animate__fadeInRight"
            data-id="6"
            width="400"
            height="800"
          />
        )}
      </main>
    </>
  );
}
