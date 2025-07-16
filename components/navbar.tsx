import React from 'react'
import NavLink from './link'

function Navbar() {
    const navLinks = [
        {
            path: "/",
            title: "Overview"
        },
        {
            path: "/performance",
            title: "Performance"
        },
        {
            path: "#",
            title: "Technical"
        },
        {
            path: "#",
            title: "Trading"
        },
        {
            path: "#",
            title: "Calculators"
        },
        {
            path: "#",
            title: "Intelligence"
        },
        {
            path: "#",
            title: "Holdings"
        },
        {
            path: "#",
            title: "Notes & Tags"
        },
        {
            path: "#",
            title: "Insider Info"
        },
    ]
    return (
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col px-4 pt-2 md:flex-row md:space-x-5.5 rtl:space-x-reverse bg-white">
                {navLinks.map((link, index) => (
                    <li key={`link_${link.title}_${index}`}>
                        <NavLink {...link} />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Navbar