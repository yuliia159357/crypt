import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.sass'

export default function Home() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/lab1'}>
                        <a> lab 1 </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/lab1'}>
                        <a> lab 2 </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}
