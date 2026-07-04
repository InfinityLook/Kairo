import useStore from '../store/useStore'

const moodStyles = {
  neutral: 'from-kairo-accent2 to-kairo-accent',
  happy: 'from-yellow-300 to-pink-500',
  excited: 'from-pink-500 to-purple-600',
  calm: 'from-cyan-300 to-blue-500',
  curious: 'from-green-300 to-teal-500',
}

const moodLabels = {
  neutral: 'Klidný',
  happy: 'Šťastný',
  excited: 'Nadšený',
  calm: 'V klidu',
  curious: 'Zvědavý',
}

function CompanionOrb({ size = 180, onClick }) {
  const kairoMood = useStore((state) => state.kairoMood)
  const gradient = moodStyles[kairoMood] || moodStyles.neutral

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={onClick}
        style={{ width: size, height: size }}
        className={`relative rounded-full bg-gradient-to-br ${gradient} animate-pulseGlow animate-floatY shadow-2xl shadow-kairo-accent/40 flex items-center justify-center transition-all duration-500 active:scale-95`}
      >
        <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm" />
        <div className="absolute inset-6 rounded-full bg-white/10" />
        <span className="relative text-white font-semibold text-sm tracking-wide select-none">
          Kairo
        </span>
      </button>
      <p className="text-sm text-gray-400">
        Nálada: <span className="text-kairo-accent2 font-medium">{moodLabels[kairoMood]}</span>
      </p>
    </div>
  )
}

export default CompanionOrb
