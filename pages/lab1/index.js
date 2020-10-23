import React from 'react';
import Link from "next/link";

const Index = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/lab1/cezar'}>
                        <a> Cezar </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/lab1/vigenere'}>
                        <a> Vigenere </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Index;