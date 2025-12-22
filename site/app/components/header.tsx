import Image from "next/image";
import Link from "next/link";
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub, IoMailOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="max-w-2xl mx-auto px-4 pt-8">
            <div className="flex items-center gap-6 pb-8 border-b border-gray-300 border-dashed">
                <Image
                    src="/avatar.png"
                    alt="Pramukh Raj Devkota"
                    width={115}
                    height={115}
                    className="rounded-full shrink-0 ring-2 ring-black"
                />
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-1">Pramukh Raj Devkota</h1>
                    <p className="text-gray-700 leading-relaxed text-sm mb-2.5 ">
                        I work on scaling DTC brands by applying first-principles thinking to email and retention
                        especially when things start to behave unpredictably at scale.
                    </p>
                    <div className="flex gap-3">
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                            <IoLogoTwitter size={15} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                            <IoLogoLinkedin size={15} />
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                            <IoLogoGithub size={15} />
                        </Link>
                        <Link href="mailto:" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors">
                            <IoMailOutline size={15} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
