import { useState } from 'react';
import classes from './loginForm.module.css';

interface LoginFormProps {
  login: (user: { name: string; email: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input
        className={classes.input}
        type='text'
        placeholder='username'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={classes.input}
        type='email'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={classes.button} type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
