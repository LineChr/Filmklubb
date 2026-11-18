"use client"
import Link from "next/link"
import "./Header.css"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import { usePathname } from "next/navigation"


export default function Header() {
    const pathname = usePathname();

    return(
        <header className="header-container">
                <ThemeToggle/>
            <div className="header-main">
                <h1>rulletekst</h1>
                <nav>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>forside</Link>
                    <Link href="/artikler" className={pathname === "/artikler" ? "active" : ""}>artikler</Link>
                    <Link href="/anmeldelser" className={pathname === "/anmeldelser" ? "active" : ""}>anmeldelser</Link>
                    <Link href="/filmkveld" className={pathname === "/filmkveld" ? "active" : ""}>filmkveld</Link>
                </nav>
            </div>
        </header>
    )
}