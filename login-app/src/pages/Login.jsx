import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import logo from '../assets/logo.svg';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axiosInstance.post('/login/', formData);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError(err.response?.data?.message || 'Ocurrió un error durante el inicio de sesión');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-pattern">
      <div className="w-11/12 max-w-md glass-morphism rounded-2xl p-8 pb-6 shadow-xl border-t border-l border-white/30 relative overflow-visible">
        {/* Logo circular que corta el borde superior */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-10">
          <div className="logo-circle relative z-10">
            <img 
              src={logo} 
              alt="Nourish Logo" 
              className="w-16 h-16 object-contain transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
          
        {/* Título */}
        <div className="mt-12 mb-6 relative z-10">
          <h2 className="title-nourish text-center">
            NOURISH
          </h2>
          <p className="text-center text-sm text-gray-600 font-light tracking-wide mt-2">
            Inicia sesión en tu cuenta
          </p>
        </div>

        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="relative input-group">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="input-underline w-full px-0 py-4 text-lg"
                placeholder="Usuario"
                value={formData.username}
                onChange={handleChange}
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-tertiary transition-all duration-300 group-hover:w-full"></div>
            </div>

            <div className="relative input-group">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="input-underline w-full px-0 py-4 text-lg pr-10"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-tertiary/90 focus:outline-none transition-colors duration-300"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-xl opacity-70 hover:opacity-100`}></i>
              </button>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-tertiary transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a 
              href="#" 
              className="font-light text-tertiary hover:text-secondary transition-colors duration-300 text-sm tracking-wide"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center font-mono bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="login-button group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-light tracking-wider rounded-lg text-white bg-tertiary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </span>
              ) : (
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                <i className="fas fa-sign-in-alt text-base opacity-80"></i>
              </span>
              )}
              <span className="tracking-wider">
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
