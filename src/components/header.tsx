import Link from "next/link";

const Header = () => {

    const navElements = [
        {text: "Home", ref: "/"},
        {text: "About me", ref: "/about"},
        {text: "My blog", ref: "/blog"},
        {text: "My projects", ref: "/projects"}
    ];

    return(
        <div className="float-right block">
            {
                navElements.map((item, index) => <Link key={`link-${index}`} className="pr-4" href={item.ref}> {item.text} </Link>)
            }
        </div>
    );
}

export default Header;