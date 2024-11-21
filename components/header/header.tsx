"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

import styles from "./header.module.css";

import logoImg from "@/assets/logo.png";
import HeaderBackground from "./header-background";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles?.logo} href={"/"}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  pathname.includes("meals") ? styles.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={
                  pathname.includes("community") ? styles.active : undefined
                }
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
