import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex gap-4 justify-center">
            <h1 className="text-center text-xl font-semibold sm:text-3xl">
                つなぐ3
            </h1>
            <Image
                className="w-10"
                src="/logo.png"
                alt=""
                width={500}
                height={237}
            />
        </header>
    );
}