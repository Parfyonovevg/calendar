import { useRouter } from 'next/router';
import { userType } from '@/types';
import LoginForm from '@/components/loginForm';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const loginHandler = (user: userType) => {
    localStorage.setItem('user', JSON.stringify(user));
    router.replace('/');
  };

  return <LoginForm login={loginHandler} />;
};
export default LoginPage;
