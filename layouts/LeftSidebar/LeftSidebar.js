import Link from 'next/link';
import Image from 'next/image'

function LeftSidebar() {
  return(
    <aside>       
      <Link href="/">
        <a>
          <div className="p-4">
          
            <Image
                src="/logo.png"
                alt="Picture of the author"
                layout="fixed"
                width="56"
                height="48.5"
              />
              
          </div>
        </a>
      </Link>
      
        
      <ul className="p-4">
        <li  className="hover:bg-cyan-600"><Link className="hover:bg-cyan-600" href="/"><a className="hover:bg-cyan-600">Contacts</a></Link></li>
        <li ><Link href="/"><a>Other</a></Link></li>
      </ul>

      
    </aside>
  );
}

export default LeftSidebar;