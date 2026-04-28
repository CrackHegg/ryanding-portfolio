import { useState } from "react";
import { Menu, X } from "lucide-react";

import styles from "./Navbar.module.css";

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className ={styles.navbar}>
        <a className={styles.title} href="#home">
            Ryan Ding
        </a>
        <div className ={styles.menu}>
            <button
                className={styles.menuBtn}
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#passions">Beyond Code</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};
