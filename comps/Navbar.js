import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={100} height={60}/>
      </div>
      <Link href="/">
        <a>Home </a>
      </Link>
      <Link href="/about">
        <a>AboutUs  </a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
