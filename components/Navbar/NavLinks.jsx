"use client";
import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
const links = [
    { name: "Home", href: "/", },
    { name: "Authors", href: "/authors", },
    { name: "Books", href: "/books", },
    { name: "Collections", href: "/collections", },
    { name: "Publishers", href: "/publishers", },
    { name: "Works", href: "/works", },
];

const NavLinks = () => {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => (
                <NavItem key={link.name} link={link} pathname={pathname} />
            ))}
        </>
    );
};

export default NavLinks;