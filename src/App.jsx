import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MainLayout from './components/layout/MainLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import useStore from './store/useStore'
import { subscribeToAuthChanges } from './services/firebase'

function App() {
  const [checkingAuth, setCheckingAuth] = useState(true)
  const user = useStore((state) => state.user)
  const setUser = useStore((state) => state.setUser)

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
          photoURL: firebaseUser.photoURL,
        })
      } else {
        setUser(null)
      }
      setCheckingAuth(false)
    })
    return () => unsubscribe()
  }, [setUser])

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-kairo-dark flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kairo-accent2 to-kairo-accent animate-pulseGlow" />
      </div>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />

      <Route element={<MainLayout />}>
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profil"
          element={user ? <Profile /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/nastaveni"
          element={user ? <Settings /> : <Navigate to="/login" replace />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
