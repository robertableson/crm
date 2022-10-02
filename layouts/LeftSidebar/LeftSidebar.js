import Link from 'next/link';

function LeftSidebar() {
  return(
    <aside>
      <div>Logo here</div>
      <ul class="pt-4">
        <li><Link href="/">Contacts</Link></li>
        <li><Link href="/">Other page</Link></li>
      </ul>
      
    </aside>
  );
}

export default LeftSidebar;