import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../gql/mutations';

const Signup = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      localStorage.setItem('id_token', data.addUser.token);
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
      <h2>Signup</h2>
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

      {error && <div>Signup failed</div>}
    </div>
  );
};

export default Signup;
