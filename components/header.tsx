import Link from 'next/link';
import classes from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={classes.container}>
        <Link className={classes.link} href='/add-event'>
          Add event
        </Link>
        <Link className={classes.link} href='/'>
          Logout
        </Link>
        <Link className={classes.link} href='/get-data'>
          Download
        </Link>
      </div>
    </header>
  );
};
export default Header;
