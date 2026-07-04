import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import useStore from '../../store/useStore'
import { logout } from '../../services/firebase'

const navItems = [
  { to: '/dashboard', label: 'Domů', icon: '🏠' },
  { to: '/profil', label: 'Profil', icon: '👤' },
  { to: '/nastaveni', label: 'Nastavení', icon: '⚙️' },
]

function MainLayout() {
  const user = useStore((state) => state.user)
  const clearUser = useStore((state) => state.clearUser)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Odhlášení selhalo:', error)
    } finally {
      clearUser()
      navigate('/login')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-kairo-dark text-white">
      <header className="flex items-center justify-between px-5 py-4 bg-kairo-panel border-b border-white/5 sticky top-0 z-20">
        <h1 className="text-lg font-bold tracking-wide text-kairo-accent2">Kairo</h1>
        <div className="flex items-center gap-3">
          {user && (
            <span className="text-sm text-gray-300 hidden sm:inline">
              {user.displayName}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-300"
          >
            Odhlásit
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 px-4 pt-4">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-kairo-panel border-t border-white/5 flex justify-around items-center py-2 z-30">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-colors duration-200 ${
                isActive ? 'text-kairo-accent2' : 'text-gray-500 hover:text-gray-300'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[11px] font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default MainLayout
