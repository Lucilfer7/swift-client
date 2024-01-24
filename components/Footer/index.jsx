import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className="bg-white dark:bg-swift-purple-100 absolute w-full">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                        <h2 className="text-xl lg:text-2xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li><Link href="/" className="hover:text-gray-500 transition duration-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-500 transition duration-300">About us</Link></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                        <h2 className="text-xl lg:text-2xl font-bold mb-4">Social Media</h2>
                        <ul>
                            <li><Link href="https://www.facebook.com/FraanBera7/" target="blank" className="hover:text-gray-500 transition duration-300">Facebook</Link></li>
                            <li><Link href="https://twitter.com/cutestscats" target="blank" className="hover:text-gray-500 transition duration-300">𝕏</Link></li>
                            <li><Link href="https://www.instagram.com/fraanbera/" target="blank" className="hover:text-gray-500 transition duration-300">Instagram</Link></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                        <h2 className="text-xl lg:text-2xl font-bold mb-4">Contact</h2>
                        <p>Email: francogbp@hotmail.com</p>
                        <p>Phone: +54 9 11 6701-1687</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-xs lg:text-sm">&copy; 2024 Swift. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;