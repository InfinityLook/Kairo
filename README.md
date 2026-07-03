# Kairo PWA

**Kairo** je pokročilý studijní asistent nové generace, který kombinuje sílu AI, gamifikaci a efektivní organizaci studia. Projekt je vyvíjen jako PWA (Progressive Web App) s cílem poskytnout studentům osobního pomocníka, který je vždy po ruce.

## 🚀 Hlavní vize
Kairo není jen seznam úkolů. Je to **živý asistent**, který studenta provází celou aplikací, pomáhá s výpočty a motivuje k učení pomocí kreditového systému. Celý projekt je postaven na moderní **serverless architektuře** (Firebase), což zajišťuje maximální spolehlivost a rychlost bez nutnosti spravovat vlastní VPS.

## 🔑 Klíčové vlastnosti
- **Kairo Companion:** Vždy přítomný AI asistent (pulzující orb), který slyší a mluví.
- **Ekonomický systém:** 
    - Denní příděl 3 kreditů zdarma.
    - Možnost získat 4 kredity za zhlédnutí odměněné reklamy (AdMob).
- **Online Kalkulačka:** AI-poháněný nástroj pro složité výpočty s postupem řešení.
- **Role-Based Access Control:** Systém uživatelských rolí (`user` vs `admin`) pro efektivní správu platformy (včetně budoucí podpory více adminů).
- **PWA Ready:** Optimalizováno pro mobilní i desktopové použití s podporou offline přístupu k základním datům.

## 🛠 Technický stack
- **Frontend:** React + Vite
- **Stav:** Zustand (správa kreditů, rolí a uživatelského stavu)
- **Backend & DB:** Firebase (Authentication, Firestore, Cloud Functions)
- **Styling:** Tailwind CSS + Framer Motion (animace Orbu)
- **Ads:** Google AdMob (pro model "Sleduj a získej")
- **Hosting:** Firebase Hosting (s podporou vlastní domény a automatickým SSL)

## 📂 Struktura projektu
```text
src/
├── assets/             # Grafika a ikony
├── components/         # Znovupoužitelné UI prvky
│   ├── layout/         # Hlavní obal aplikace (Header, BottomMenu)
│   └── CompanionOrb.jsx # AI asistent (Kairo)
├── pages/              # Obrazovky aplikace (Login, Dashboard, Admin)
├── services/           # Firebase a AdMob integrace
├── store/              # Globální stav (kredity, role)
└── App.jsx             # Router aplikace
