import Link from 'next/link'

type Props = {
    title: JSX.Element;
    href: string;
    subTitle:string;
}


export default function NavButton({ href, title, subTitle }: Props) {
    return (
        <li className="sm:w-12 cursor-pointer text-3xl flex flex-col gap-2 items-center">
            <Link href={href}>
                {title}
            </Link>
            <span className="text-sm font-semibold">{subTitle}</span>
        </li>
    );
}