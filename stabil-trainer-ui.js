// ============================================================
// STABILITÄT TRAINER UI - MUSKELGRUPPEN & WORKOUTS
// ============================================================

const EXERCISE_TIPS = {
  'Plank 30s': 'Schultern über Ellbogen, Körper gerade wie ein Brett, Po nicht hochstrecken. Schulterblätter aktiv.',
  'Dead Bug 10': 'Auf Rücken liegen, Arm & Bein diagonal strecken. Rücken flach halten, Becken stabil.',
  'Superman 20s': 'Brust & Beine vom Boden abheben, Nacken neutral (Blick nach unten). 2-3 Sekunden halten.',
  'Band Rudern 12': 'Schulterblätter zusammenziehen, Band zum Körper ziehen. 1-2 Sekunden halten am Ende.',
  'Seitenplank 25s': 'Hüfte gerade halten, nicht sausen lassen. Unterarm und seitliche Kante des Fußes.',
  'Band Lateral 12': 'Arme leicht gebeugt, Schulter nach oben ziehen. Langsam senken, kontrolliert.',
  'Pull Apart 15': 'Band vor dem Körper auf Brusthöhe, auseinanderziehen. Schultern nach hinten.',
  'Face Pull 12': 'Ellbogen hoch, zum Gesicht ziehen. Schulterblätter zusammen am Ende.',
  'Reverse Fly 12': 'Leichte Hantel, Ellbogen leicht gebeugt. Hintere Schultern aktivieren.',
  'Wall Slides 10': 'Rücken an Wand, Arme Y-Form machen. Rücken bleibt an Wand.',
  'Mountain Climbers 20': 'Po nicht hochstrecken, schnelle Beine. Schultern über Handgelenken.',
  'Bicycle Crunch 20': 'Langsam & kontrolliert, Nacken nicht belasten. Ellbogen zur gegenüber Seite.',
  'Flutter Kicks 30s': 'Rücken flach, kleine Bewegungen, Bauch angespannt. Kontinuierlich auf/ab.',
  'Pallof 10': 'Rumpf stabil, keine Rotation. Kraft aus dem Core, nicht aus den Armen.',
  'Single Leg Squat 8': 'Mit Stütze beginnen, Knie über Zehe. Standbein stabil, gerade Linie.',
  'Glute Bridge 12': 'Glutes anspannen, Hüfte hochdrücken. Oben 1-2 Sekunden halten.',
  'Single Leg RDL 10': 'Langsam, Standbein stabil, gerade Linie. Balance wichtig!',
  'Calf Raise 15': 'Auf Zehenspitzen, oben halten. Kontrolliert senken, kein Pendeln.',
  'Side Lunge 10': 'Knie über Zehe, gerade Rücken. Zur Seite treten, nicht nach vorne.',
  'Single Leg Stand 30s': 'Blick auf Punkt fixieren, stabiler Stand. Optional: Augen schließen für Intensität.',
  'BOSU Ball 30s': 'Augen offen, Core angespannt. Kleine Balance-Korrektionen machen.',
  'Tandem Stance 20s': 'Fuß vor Fuß, Arme zur Seite. Sehr herausfordernd für Balance!',
  'Eyes Closed 15s': 'Sehr schwierig! Langsam starten. Propriozeption maximieren.',
  'Wobble Board 45s': 'Langsam, kontrolliert, kleine Schritte. Sehr instabile Oberfläche!',
  'Aero Position 30s': 'In Aerodynamik-Position halten, Core aktiv. Nacken neutral.',
  'Hip Opener 30s': 'Tief & entspannt, kein Schmerz. Nach Fahrt WICHTIG!',
  'Out-of-Saddle 20': 'Rumpf stabil, nur Beine bewegen. Stehend fahren simulieren.',
  'Shoulder Mobility 10': 'Langsam & kontrolliert. Nach Drop-Bar Haltung.',
  'Core Combo 3x': 'Plank + Seitenplank + Hold. Fließend übergehen, keine Pausen.'
};

const MUSCLE_GROUPS_STABLE = {
  ruecken_core: { name: '💪 Rücken & Core', desc: 'Haltung & Stabilität', color: '#ff6b35' },
  schultern: { name: '🔙 Schultern & Nacken', desc: 'Schulterstabilität', color: '#e94b3c' },
  core_bauch: { name: '⚙️ Core & Bauch', desc: 'Kernstabilität', color: '#f7931e' },
  beine_huefte: { name: '🦵 Beine & Hüfte', desc: 'Balance & Kraft', color: '#6c5b7b' },
  balance: { name: '🧠 Balance & Koordination', desc: 'Propriozeption', color: '#2c5f8d' },
  rennrad: { name: '🚴 Rennrad-Spezifisch', desc: 'Für dein Pendeln', color: '#d32f2f' }
};

const STABLE_WORKOUTS = {
  ruecken_core: {
    5: ['Plank 30s', 'Dead Bug 10', 'Superman 20s'],
    10: ['Plank 45s', 'Band Rudern 12', 'Dead Bug 12', 'Seitenplank 25s'],
    15: ['Plank 60s', 'Band Rudern 15', 'Dead Bug 15', 'Seitenplank 30s', 'Superman 30s']
  },
  schultern: {
    5: ['Band Lateral 12', 'Pull Apart 15', 'Wall Slides 10'],
    10: ['Band Lateral 15', 'Face Pull 12', 'Pull Apart 15', 'Reverse Fly 12'],
    15: ['Band Lateral 15', 'Face Pull 15', 'Pull Apart 15', 'Reverse Fly 12', 'Wall Slides 10']
  },
  core_bauch: {
    5: ['Mountain Climbers 20', 'Plank 30s', 'Bicycle Crunch 15'],
    10: ['Mountain Climbers 20', 'Bicycle Crunch 20', 'Flutter Kicks 30s', 'Pallof 10'],
    15: ['Mountain Climbers 20', 'Bicycle Crunch 20', 'Flutter Kicks 45s', 'Pallof 12', 'Ab Wheel 10']
  },
  beine_huefte: {
    5: ['Single Leg Squat 8', 'Glute Bridge 12', 'Calf Raise 15'],
    10: ['Single Leg Squat 10', 'Glute Bridge 15', 'Single Leg RDL 10', 'Calf Raise 20'],
    15: ['Single Leg Squat 12', 'Glute Bridge 15', 'Single Leg RDL 12', 'Calf Raise 20', 'Side Lunge 10']
  },
  balance: {
    5: ['Single Leg Stand 30s', 'Tandem Stance 20s', 'Eyes Closed 15s'],
    10: ['Single Leg Stand 45s', 'BOSU Ball 30s', 'Tandem Stance 30s', 'Eyes Closed 20s'],
    15: ['Single Leg Stand 60s', 'BOSU Ball 45s', 'Tandem Stance 45s', 'Eyes Closed 30s', 'Wobble Board 45s']
  },
  rennrad: {
    5: ['Aero Position 30s', 'Hip Opener 30s', 'Core Combo 3x'],
    10: ['Aero Position 45s', 'Hip Opener 60s', 'Out-of-Saddle 20', 'Shoulder Mobility 10'],
    15: ['Aero Position 60s', 'Hip Opener 90s', 'Out-of-Saddle 25', 'Lower Back 45s', 'Shoulder Mobility 12']
  }
};

let selectedMuscleGroup = null;
let workoutDuration = 10;
let activeWorkout = null;
