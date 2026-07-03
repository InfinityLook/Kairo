import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './services/firebase';
import useStore from './store/useStore';
import MainLayout from './components/layout/MainLayout';
import Login from './pages/Login';

const App = () => {
  const { user, setUser } = useStore();

  useEffect(() => {
    // Sledování stavu přihlášení
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [setUser]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route 
          path="/" 
          element={
            user ? (
              <MainLayout>
                <h1 className="text-2xl">Vítej v Dashboardu, {user.displayName}!</h1>
              </MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
