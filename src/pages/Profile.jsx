import useStore from '../store/useStore'

function Profile() {
  const user = useStore((state) => state.user)
  const credits = useStore((state) => state.credits)

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Profil</h2>

      <div className="bg-kairo-panel rounded-2xl p-6 flex flex-col items-center gap-3 border border-white/5">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="Avatar"
            className="w-20 h-20 rounded-full border-2 border-kairo-accent2"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-kairo-accent2 to-kairo-accent flex items-center justify-center text-2xl font-bold">
            {(user?.displayName || 'H')[0]}
          </div>
        )}
        <h3 className="text-lg font-semibold">{user?.displayName || 'Host'}</h3>
        <p className="text-gray-400 text-sm">{user?.email || '—'}</p>
      </div>

      <div className="bg-kairo-panel rounded-2xl p-4 border border-white/5 flex justify-between items-center">
        <span className="text-gray-400 text-sm">Aktuální kredity</span>
        <span className="text-kairo-accent2 font-bold text-lg">{credits}</span>
      </div>
    </div>
  )
}

export default Profile
