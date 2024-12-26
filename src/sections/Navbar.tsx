import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <nav className="py-4 lg:py-6">
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 p-2 px-4 md:px-2 rounded-full items-center">
                    <div>
                        <Image
                            src={logo}
                            alt="Layers Logo"
                            className="h-9 w-auto md:h-auto"
                        ></Image>
                    </div>

                    <div className="hidden lg:flex">
                        <ul className="flex gap-4 justify-center items-center">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-white font-medium"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-end gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-menu md:hidden"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <Button
                            className="hidden md:inline-block"
                            variant="secondary"
                        >
                            Log In
                        </Button>
                        <Button
                            className="hidden md:inline-block"
                            variant="primary"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
