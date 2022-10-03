import Link from 'next/link';
import Image from 'next/image'

function LeftSidebar() {
  return(
    <aside>       
      <Link href="/">
        <a>
          <div className="p-4 hover:bg-slate-700">
          
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
      
        
      <ul>
        <li><Link href="/"><a><div className="hover:bg-slate-700 bg-slate-700 text-slate-100 px-4 py-1">Contacts</div></a></Link></li>
        <li><Link href="/"><a><div className="hover:bg-slate-700 px-4 py-1">Other page</div></a></Link></li>
      </ul>
      
    </aside>
  );
}

export default LeftSidebar;