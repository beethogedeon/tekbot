'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
const homeLinks = [
	{ id: 1, name: 'Accueil', path: '/' },
]
const pageLinks = [
	{ id: 1, name: 'About Us', path: '/about' },
	{ id: 2, name: 'Service', path: '/service' },
	{ id: 3, name: 'Service Details', path: '/service-details' },
	{ id: 4, name: 'Our Team', path: '/team' },
	{ id: 5, name: 'Team Details', path: '/team-details' },
	{ id: 6, name: 'Pricing', path: '/pricing' },
	{ id: 7, name: 'FAQ Page', path: '/faq' },
	{ id: 8, name: '404 Error Page', path: '/error' },
]
const porfolioLinks = [
	{ id: 1, name: 'Portfolio', path: '/project' },
	{ id: 2, name: 'Portfolio Details', path: '/project-details' },
]
const blogLinks = [
	{ id: 1, name: 'Blog', path: '/blog' },
	{ id: 2, name: 'Blog Details', path: '/blog-details' },
]
export default function Menu({ menuLeft }: any) {
    const pathname = usePathname()    
    const isActive = (path: string) => path === pathname
    const isHomeLinkActive = () => {
        return homeLinks.some((link) => link.path === pathname) ? true : false
    };
    const isPageLinkActive = () => {
        return pageLinks.some((link) => link.path === pathname) ? true : false
    };
    const isPorfolioLinkActive = () => {
        return porfolioLinks.some((link) => link.path === pathname) ? true : false
    };
    const isBlogLinkActive = () => {
        return blogLinks.some((link) => link.path === pathname) ? true : false
    };
    return (
        <>
            <ul className={`navigation ${menuLeft ? "ms-xxl-0" : "me-0"} `}>
                <li className={`menu-item-has-children ${isHomeLinkActive() ? 'active' : ''}`}><Link href="/">Accueil</Link>
                </li>
                <li className={`menu-item-has-children ${isPageLinkActive() ? 'active' : ''}`}><Link href="/about">A Propos</Link>
                </li>
                <li className={`menu-item-has-children ${isPorfolioLinkActive() ? 'active' : ''}`}><Link href="/#">Portfolio</Link>
                </li>
                <li className={`menu-item-has-children ${isBlogLinkActive() ? 'active' : ''}`}><Link href="/#">Blog</Link>
                </li>
                <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
