import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../gql/mutations';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      localStorage.setItem('id_token', data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="******"
          value={formState.password}
          onChange={handleChange}
        />
        <button className="button" type="submit">Submit</button>
      </form>

      {error && <div>Login failed</div>}
    </div>
  );
};

export default Login;
