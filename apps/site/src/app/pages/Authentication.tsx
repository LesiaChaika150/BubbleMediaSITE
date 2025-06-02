import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
      userId
    }
  }
`;

const REGISTER_MUTATION = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      login
      createdAt
    }
  }
`;

export default function Authentication() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [login] = useMutation(LOGIN_MUTATION);
  const [register] = useMutation(REGISTER_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isRegistering) {
      try {
        await register({ variables: { data: { login: username, password } } });
        alert('Реєстрацію завершено. Тепер увійдіть.');
        setIsRegistering(false);
      } catch (err) {
        setError('Помилка реєстрації. Можливо, користувач уже існує.');
      }
    } else {
      try {
        const { data } = await login({ variables: { data: { login: username, password } } });

        // ✅ Зберігаємо токен, ID користувача та прапорець автентифікації
        localStorage.setItem('token', data.login.token);
        localStorage.setItem('userProfile', JSON.stringify({ userId: data.login.userId }));
        localStorage.setItem('authenticatedUser', 'true');

        navigate('/demo');
      } catch (err) {
        setError('Невірні дані. Спробуйте ще раз.');
      }
    }
  };

  return (
    <div className="auth-container" style={{ fontFamily: 'sans-serif', padding: 20, textAlign: 'center' }}>
      <h2>{isRegistering ? 'Реєстрація' : 'Вхід'}</h2>
      <div style={{ marginBottom: 20 }}>
        <button type="button" onClick={() => setIsRegistering(false)} style={{ marginRight: 10 }}>
          Вхід
        </button>
        <button type="button" onClick={() => setIsRegistering(true)}>
          Реєстрація
        </button>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Імʼя користувача"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: 10, marginBottom: 10, width: 250 }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 10, marginBottom: 10, width: 250 }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ padding: '10px 20px' }}>
          {isRegistering ? 'Зареєструватися' : 'Увійти'}
        </button>
      </form>
    </div>
  );
}
