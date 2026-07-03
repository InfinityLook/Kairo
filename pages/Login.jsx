import React from 'react';
import { auth } from '../services/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import useStore from '../store/useStore';

const Login = () => {
  const setUser = useStore((state) => state.setUser);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Chyba při přihlášení:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Vítej v Kairo</h1>
      <button 
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
      >
        Přihlásit se přes Google
      </button>
    </div>
  );
};

export default Login;
