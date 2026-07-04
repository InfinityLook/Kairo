import { create } from 'zustand'

const useStore = create((set, get) => ({
  user: null,
  credits: 100,
  kairoMood: 'neutral',

  setUser: (user) => set({ user }),

  clearUser: () => set({ user: null, credits: 100, kairoMood: 'neutral' }),

  addCredits: (amount) =>
    set((state) => ({ credits: state.credits + amount })),

  spendCredits: (amount) => {
    const current = get().credits
    if (current < amount) {
      return false
    }
    set({ credits: current - amount })
    return true
  },

  setKairoMood: (mood) => set({ kairoMood: mood }),

  interactWithOrb: () => {
    const moods = ['happy', 'excited', 'calm', 'curious']
    const randomMood = moods[Math.floor(Math.random() * moods.length)]
    set({ kairoMood: randomMood })
    set((state) => ({ credits: Math.max(0, state.credits - 1) }))
  },
}))

export default useStore
