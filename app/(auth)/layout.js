import Image from "next/image";
import Link from "next/link";


export default function AuthLayout({ children }) {
    return (
        <div className="flex flex-col justify-between">
            <Link href='/' className="container">
                <Image src='/icon.svg' alt='logo' width={50} height={50} />
            </Link>

            <div className="">{children}</div>

            {/* <div className="flex flex-col items-end">
                <Image src='/head.svg' alt='logo' width={0} height={0} className="w-[100%] h-[400px]" />
            </div> */}
        </div>
    )
}