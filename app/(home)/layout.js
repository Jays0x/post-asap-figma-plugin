import Navbar from "@/components/home/navbar/Navbar";


export default function HomeLayout({ children }) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-transparent pt-5 px-8"><Navbar /></div>
           <div>{children}</div>
        </div>
    )
}