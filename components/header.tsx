import Link from 'next/link';
import { useDispatch } from 'react-redux';
import classes from './header.module.css';
import { removeUser } from '@/store/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem('user');
    dispatch(removeUser());
  };
  return (
    <header>
      <div className={classes.container}>
        <Link className={classes.link} href='/add-event'>
          Add event
        </Link>
        <Link onClick={logoutHandler} className={classes.link} href='/'>
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
