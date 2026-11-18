"use client"
import Link from "next/link";
import "./PageNavigation.css"
import { usePathname } from "next/navigation";


export default function BackNavigation() {
    const pathname = usePathname();

    return(
        <nav className="page-navigation-container">
            {pathname !== "/" && <Link href="/">forside</Link>}

            {pathname.startsWith("/artikler") && (<> / <Link href="/artikler">artikler</Link></>) }

            {pathname.startsWith("/anmeldelser") && (<> / <Link href="/anmeldelser">anmeldelser</Link></>)}

            {pathname.startsWith("/filmkveld") && (<> / <Link href="/filmkveld">filmkveld</Link></>)}
        </nav>
    )
}