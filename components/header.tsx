import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div>
        <Link href='/add-event'>Add event</Link>
        <Link href='/'>Logout</Link>
        <Link href='/'>Download</Link>
      </div>
    </header>
  );
};
export default Header;
