import Link from 'next/link';
import Image from 'next/image'
const NavBar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/favicon.ico" width={100} height={77}/>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/salah"><a>Salah Listing</a></Link>
    </nav>
   );
}
 
export default NavBar;