import { useNavigate } from 'react-router-dom'
import useStore from '../store/useStore'
import CompanionOrb from '../components/CompanionOrb'

function Dashboard() {
  const user = useStore((state) => state.user)
  const credits = useStore((state) => state.credits)
  const interactWithOrb = useStore((state) => state.interactWithOrb)
  const navigate = useNavigate()

  const displayName = user?.displayName || 'Hosťe'

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold">
          Ahoj, {displayName.split(' ')[0]} 👋
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Rád tě zase vidím. Podívej se, jak se má Kairo.
        </p>
      </div>

      <div className="bg-kairo-panel rounded-2xl p-6 flex flex-col items-center gap-4 border border-white/5">
        <CompanionOrb onClick={interactWithOrb} />
        <button
          onClick={interactWithOrb}
          className="px-5 py-2.5 rounded-full bg-kairo-accent hover:bg-kairo-accent/80 transition-colors text-sm font-medium"
        >
          Interagovat s Kairo koulí
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-kairo-panel rounded-2xl p-4 border border-white/5">
          <p className="text-gray-400 text-xs">Kredity</p>
          <p className="text-2xl font-bold text-kairo-accent2">{credits}</p>
        </div>
        <div className="bg-kairo-panel rounded-2xl p-4 border border-white/5">
          <p className="text-gray-400 text-xs">Email</p>
          <p className="text-sm font-medium truncate">
            {user?.email || 'nepřihlášen'}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => navigate('/profil')}
          className="w-full py-3 rounded-xl bg-kairo-panel border border-white/5 hover:border-kairo-accent2/50 transition-colors text-left px-4 flex items-center justify-between"
        >
          <span>Zobrazit profil</span>
          <span className="text-kairo-accent2">→</span>
        </button>
        <button
          onClick={() => navigate('/nastaveni')}
          className="w-full py-3 rounded-xl bg-kairo-panel border border-white/5 hover:border-kairo-accent2/50 transition-colors text-left px-4 flex items-center justify-between"
        >
          <span>Otevřít nastavení</span>
          <span className="text-kairo-accent2">→</span>
        </button>
      </div>
    </div>
  )
}

export default Dashboard
