import Link from "next/link";

const Header = () => {
    return(
        <div>
            <Link href="/"> Home </Link>
            <Link href="/about"> About me </Link>
            <Link href="/blog"> My blog </Link>
            <Link href="/projects"> My projects </Link>
        </div>
    );
}

export default Header;