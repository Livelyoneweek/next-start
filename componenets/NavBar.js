import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/" className="link1" style={ {color:router.pathname ==="/"? "red": ""} }>
                 Home
            </Link>
            
            <Link href="/about">
                About
            </Link>
        </nav>
    )
}