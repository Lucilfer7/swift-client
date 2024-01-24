import Link from "next/link";

const NavItem = ({ link, pathname }) => {
    return (
        <Link
            href={link.href}
            className={`
                        flex h-[48px] items-center justify-center p-3 border-b-2 text-sm font-medium text-swift-purple-900
                        hover:border-swift-purple-400 hover:text-swift-purple-400 transition-all duration-300 
                        md:flex-none md:justify-start md:p-2 md:px-5  active:text-swift-purple-900 active:border-swift-purple-900
                        ${pathname === link.href ? 'border-b-2 border-swift-purple-500 text-swift-purple-500' : ''}
                    `}
        >
            <p className='hidden md:block'>
                {link.name}
            </p>
        </Link>
    );
};

export default NavItem;