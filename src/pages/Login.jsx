import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '../services/firebase'
import useStore from '../store/useStore'

function Login() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const setUser = useStore((state) => state.setUser)
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError(null)
    try {
      const user = await loginWithGoogle()
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      })
      navigate('/dashboard')
    } catch (err) {
      setError('Přihlášení se nezdařilo. Zkus to prosím znovu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-kairo-dark flex flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-sm flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-kairo-accent2 to-kairo-accent animate-pulseGlow shadow-xl shadow-kairo-accent/40" />
          <h1 className="text-3xl font-bold">Kairo</h1>
          <p className="text-gray-400 text-center text-sm">
            Tvůj osobní AI společník, který tě zná
          </p>
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center bg-red-500/10 px-4 py-2 rounded-lg w-full">
            {error}
          </p>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span>Přihlašování...</span>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.5 29.3 35.5 24 35.5c-6.9 0-12.5-5.6-12.5-12.5S17.1 10.5 24 10.5c3.2 0 6.1 1.2 8.3 3.2l6-6C34.6 4.1 29.6 2 24 2 11.9 2 2 11.9 2 24s9.9 22 22 22 22-9.9 22-22c0-1.2-.1-2.4-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.6 18.9 12.5 24 12.5c3.2 0 6.1 1.2 8.3 3.2l6-6C34.6 4.1 29.6 2 24 2 15.8 2 8.7 6.7 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 46c5.5 0 10.4-1.8 14.3-4.9l-6.6-5.4c-2.1 1.5-4.8 2.3-7.7 2.3-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C8.6 41.3 15.7 46 24 46z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.7l6.6 5.4C41.5 36 44 30.5 44 24c0-1.2-.1-2.4-.4-3.5z"/>
              </svg>
              <span>Přihlásit se přes Google</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          Přihlášením souhlasíš s podmínkami používání Kairo.
        </p>
      </div>
    </div>
  )
}

export default Login
