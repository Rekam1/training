// ============================================================
// STABILITÄT TRAINER - MUSKELGRUPPEN & ÜBUNGEN
// Professioneller Rennrad Trainer für Radfahrer
// ============================================================

const MUSCLE_GROUPS = {
  ruecken_core: {
    name: 'Rücken & Core',
    icon: '💪',
    desc: 'Für Haltung & Stabilität auf dem Rad',
    color: '#ff6b35',
    ex: ['Plank', 'Band Rudern', 'Dead Bug', 'Seitenplank', 'Superman', 'Tischrudern', 'Hollow Hold', 'Bird Dog']
  },
  schultern: {
    name: 'Schultern & Nacken',
    icon: '🔙',
    desc: 'Für Schulterstabilität & Haltung',
    color: '#e94b3c',
    ex: ['Band Lateral', 'Face Pull', 'Scapular', 'Pull Apart', 'Reverse Fly', 'Wall Slides']
  },
  core_bauch: {
    name: 'Core & Bauch',
    icon: '⚙️',
    desc: 'Maximale Kernstabilität',
    color: '#f7931e',
    ex: ['Mountain Climbers', 'Bicycle Crunch', 'Flutter Kicks', 'Knee Raise', 'Pallof Press', 'Ab Wheel', 'Woodchop']
  },
  beine_huefte: {
    name: 'Beine & Hüfte',
    icon: '🦵',
    desc: 'Stabilität & Balance nach der Fahrt',
    color: '#6c5b7b',
    ex: ['Single Leg Squat', 'Glute Bridge', 'Single Leg RDL', 'Calf Raise', 'Side Lunge', 'Glute Walk']
  },
  balance: {
    name: 'Balance & Koordination',
    icon: '🧠',
    desc: 'Für Körperkontrolle & Propriozeption',
    color: '#2c5f8d',
    ex: ['Single Leg Stand', 'BOSU Ball', 'Tandem Stance', 'Eyes Closed', 'Wobble Board']
  },
  rennrad: {
    name: 'Rennrad-Spezifisch',
    icon: '🚴',
    desc: 'Für deine Pendel Ettingen-Basel',
    color: '#d32f2f',
    ex: ['Aero Position', 'Out-of-Saddle', 'Hip Opener', 'Lower Back', 'Shoulder Mobility', 'Core Combo']
  }
};

const WORKOUTS = {
  ruecken_core_5: {
    name: 'Rücken & Core Quick (5 Min)',
    exercises: ['Plank 30s', 'Dead Bug 10', 'Superman 20s'],
    duration: 5
  },
  ruecken_core_10: {
    name: 'Rücken & Core Standard (10 Min)',
    exercises: ['Plank 45s', 'Band Rudern 12', 'Dead Bug 12', 'Seitenplank 25s pro Seite'],
    duration: 10
  },
  ruecken_core_15: {
    name: 'Rücken & Core Intensiv (15 Min)',
    exercises: ['Plank 60s', 'Band Rudern 15', 'Dead Bug 15', 'Seitenplank 30s', 'Superman 30s', 'Hollow Hold 20s'],
    duration: 15
  },
  schultern_5: {
    name: 'Schultern Quick (5 Min)',
    exercises: ['Band Lateral 12', 'Pull Apart 15', 'Wall Slides 10'],
    duration: 5
  },
  schultern_10: {
    name: 'Schultern Standard (10 Min)',
    exercises: ['Band Lateral 15', 'Face Pull 12', 'Pull Apart 15', 'Reverse Fly 12'],
    duration: 10
  },
  schultern_15: {
    name: 'Schultern Intensiv (15 Min)',
    exercises: ['Band Lateral 15', 'Face Pull 15', 'Scapular 10', 'Pull Apart 15', 'Reverse Fly 12', 'Wall Slides 10'],
    duration: 15
  },
  core_bauch_5: {
    name: 'Core Quick (5 Min)',
    exercises: ['Mountain Climbers 20', 'Plank 30s', 'Bicycle Crunch 15'],
    duration: 5
  },
  core_bauch_10: {
    name: 'Core Standard (10 Min)',
    exercises: ['Mountain Climbers 20', 'Bicycle Crunch 20', 'Flutter Kicks 30s', 'Pallof 10 pro Seite'],
    duration: 10
  },
  core_bauch_15: {
    name: 'Core Intensiv (15 Min)',
    exercises: ['Mountain Climbers 20', 'Bicycle Crunch 20', 'Flutter Kicks 45s', 'Pallof 12 pro Seite', 'Ab Wheel 10', 'Woodchop 12'],
    duration: 15
  },
  rennrad_5: {
    name: 'Rennrad Quick (5 Min)',
    exercises: ['Aero Position 30s', 'Hip Opener 30s', 'Core Combo 3x'],
    duration: 5
  },
  rennrad_10: {
    name: 'Rennrad Standard (10 Min)',
    exercises: ['Aero Position 45s', 'Hip Opener 60s', 'Out-of-Saddle 20', 'Shoulder Mobility 10'],
    duration: 10
  },
  rennrad_15: {
    name: 'Rennrad Komplett (15 Min)',
    exercises: ['Aero Position 60s', 'Hip Opener 90s', 'Out-of-Saddle 25', 'Lower Back 45s', 'Shoulder Mobility 12', 'Core Combo 4x'],
    duration: 15
  }
};
