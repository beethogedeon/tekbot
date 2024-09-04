'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from 'react'
interface ActiveState {
    status: boolean
    key: number
}

export default function MobileMenu() {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 0,
    })

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation me-0">
                <li className="menu-item-has-children"><Link href="/">Accueil</Link>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(1)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/about">A Propos</Link>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(2)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/">PORTFOLIO</Link>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(3)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="/#">BLOG</Link>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(4)}><span className="plus-line" /></div>
                </li>
                <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
