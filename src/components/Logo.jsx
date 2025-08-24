import Link from 'next/link';
import React from 'react';

export default function Logo() {
    return(
        <div>
                <Link href="/" className="flex items-center gap-1">
                    <img className="w-8 h-8 rounded-full" 
                    src="https://i.postimg.cc/j2f7K5kV/ll.png" alt="Logo" />
                    <span className="font text-xl font-bold">Shoppy</span>
                </Link>
        </div>
    )
}