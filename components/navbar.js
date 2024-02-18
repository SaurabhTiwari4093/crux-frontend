import Image from "next/image";
import CruxLogo from "@/public/images/cruxLogo.png"
import Avatar from "./avatar";
import Link from "next/link";

export default function NavBar(){
    return (
        <div className="flex justify-center shadow">
            <div className="max-w-7xl flex justify-between items-center w-full p-4">
                <Link href="/">
                    <Image 
                    src={CruxLogo}
                    height={32}
                    alt="Crux"/>
                </Link>
                <div>
                    <Avatar/>
                </div>
            </div>
        </div>
    )
}