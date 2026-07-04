import { useNavigate } from 'react-router-dom'
import useStore from '../store/useStore'
import { logout } from '../services/firebase'

function Settings() {
  const clearUser = useStore((state) => state.clearUser)
  const kairoMood = useStore((state) => state.kairoMood)
  const setKairoMood = useStore((state) => state.setKairoMood)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Chyba při odhlašování:', error)
    } finally {
      clearUser()
      navigate('/login')
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Nastavení</h2>

      <div className="bg-kairo-panel rounded-2xl p-4 border border-white/5 flex flex-col gap-3">
        <p className="text-sm text-gray-400">Nálada Kairo (manuální reset)</p>
        <button
          onClick={() => setKairoMood('neutral')}
          className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm"
        >
          Resetovat na neutrální ({kairoMood})
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="w-full py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors font-medium"
      >
        Odhlásit se
      </button>
    </div>
  )
}

export default Settings
