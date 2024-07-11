// 'use client'

import Image from "next/image";
import Header from "@/components/header/Header.jsx"
import Hero from "@/components/hero/Hero";
import Main from "@/components/main/Main";
import "./globals.css";
import gsap from "gsap";


export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Hero></Hero>
      <Main></Main>
    </main>
  );
}
