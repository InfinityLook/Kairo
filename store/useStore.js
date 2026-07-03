import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  credits: 0,
  role: 'user', // Výchozí role

  setUser: (user) => set({ user }),
  setCredits: (credits) => set({ credits }),
  setRole: (role) => set({ role }),
  
  // Metoda pro přičtení kreditů
  addCredits: (amount) => set((state) => ({ credits: state.credits + amount })),
  
  // Metoda pro odečtení kreditů
  useCredit: (amount) => set((state) => ({ credits: Math.max(0, state.credits - amount) })),
}));

export default useStore;
