import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerImage from "../../assets/register.jpg"; 

function Register() {
    
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    height: '',
    weight: '',
    fitness_level: 'beginner',
    goals: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.detail || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Left side - Image */}
      <div style={{ flex: '1', height: '100%', overflow: 'hidden' }}>
        <img
          src={registerImage} // Replace with your desired image URL
          alt="Register"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right side - Form */}
      <div style={{
        flex: '1',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1>Join Us!</h1>
        <p>Create an account to get started on your fitness journey.</p>

        {error && (
          <div style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
              Username:
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="height" style={{ display: 'block', marginBottom: '5px' }}>
              Height (cm):
            </label>
            <input
              id="height"
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="weight" style={{ display: 'block', marginBottom: '5px' }}>
              Weight (kg):
            </label>
            <input
              id="weight"
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="fitness_level" style={{ display: 'block', marginBottom: '5px' }}>
              Fitness Level:
            </label>
            <select
              id="fitness_level"
              name="fitness_level"
              value={formData.fitness_level}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: 'purple',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Register
            </button>
          </div>
        </form>

        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Already have an account?{' '}
            <button
              type="button"
              onClick={handleLogin}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
