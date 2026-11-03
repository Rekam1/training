// ============================================================
// NUTRITION DATA – Rennradfahrer Ernährung
// ============================================================

const NUTRITION_MEALS = {
  breakfast: {
    name: 'Frühstück',
    icon: '🌅',
    meals: [
      {
        id: 'breakfast-1',
        name: 'Haferflocken mit Banane & Honig',
        portions: '60g Haferflocken, 1 Banane, 1 EL Honig, 200ml Milch',
        calories: 380,
        macros: { protein: 12, carbs: 68, fat: 8 },
        minerals: { calcium: 240, iron: 2.8, potassium: 420 },
        notes: 'Klassisches Pre-Ride Frühstück – gibt stabile Energie'
      },
      {
        id: 'breakfast-2',
        name: 'Vollkornbrot mit Ei & Tomaten',
        portions: '2 Scheiben Vollkornbrot, 2 Eier, 1 Tomate',
        calories: 340,
        macros: { protein: 18, carbs: 42, fat: 12 },
        minerals: { calcium: 120, iron: 3.2, potassium: 280 },
        notes: 'Protein-reich – gut für Muskelaufbau'
      },
      {
        id: 'breakfast-3',
        name: 'Müsli mit Joghurt & Beeren',
        portions: '50g Müsli, 150g Joghurt, 100g Beeren',
        calories: 280,
        macros: { protein: 10, carbs: 48, fat: 5 },
        minerals: { calcium: 200, iron: 1.5, potassium: 350 },
        notes: 'Leicht verdaulich – ideal vor Rennrad-Fahrten'
      }
    ]
  },
  
  lunch: {
    name: 'Mittagessen',
    icon: '☀️',
    meals: [
      {
        id: 'lunch-1',
        name: 'Pasta mit Hühnchen & Brokkoli',
        portions: '150g Vollkorn-Pasta, 150g Hühnerbrust, 200g Brokkoli',
        calories: 520,
        macros: { protein: 45, carbs: 62, fat: 8 },
        minerals: { calcium: 140, iron: 3.5, potassium: 580 },
        notes: 'Klassisch – perfekt zum Glykogenspeicher auffüllen'
      },
      {
        id: 'lunch-2',
        name: 'Fischfilet mit Kartoffeln & Salat',
        portions: '150g Fischfilet, 250g Kartoffeln, 150g Salat',
        calories: 480,
        macros: { protein: 42, carbs: 55, fat: 6 },
        minerals: { calcium: 80, iron: 2.8, potassium: 720 },
        notes: 'Omega-3 reich – entzündungshemmend'
      },
      {
        id: 'lunch-3',
        name: 'Rindfleisch-Eintopf',
        portions: '120g Rindfleisch, 150g Kartoffeln, 100g Karotten, 100g Erbsen',
        calories: 420,
        macros: { protein: 38, carbs: 48, fat: 8 },
        minerals: { calcium: 60, iron: 4.2, potassium: 650 },
        notes: 'Eisen-reich – unterstützt Sauerstofftransport'
      }
    ]
  },
  
  snack: {
    name: 'Zwischenmahlzeit',
    icon: '🥨',
    meals: [
      {
        id: 'snack-1',
        name: 'Apfel mit Nussbutter',
        portions: '1 Apfel, 2 EL Erdnussbutter',
        calories: 280,
        macros: { protein: 8, carbs: 35, fat: 12 },
        minerals: { calcium: 60, iron: 1.2, potassium: 380 },
        notes: 'Schnelle Energie – gut vor/nach Rennrad'
      },
      {
        id: 'snack-2',
        name: 'Naturjoghurt mit Nüssen & Honig',
        portions: '150g Joghurt, 30g Nüsse, 1 TL Honig',
        calories: 260,
        macros: { protein: 12, carbs: 24, fat: 13 },
        minerals: { calcium: 180, iron: 1.5, potassium: 220 },
        notes: 'Ausgewogen – Protein & Fett für Sättigung'
      },
      {
        id: 'snack-3',
        name: 'Banane mit dunkler Schokolade',
        portions: '1 Banane, 20g Schokolade (70%)',
        calories: 220,
        macros: { protein: 4, carbs: 38, fat: 7 },
        minerals: { calcium: 40, iron: 1.8, potassium: 420 },
        notes: 'Magnesium-Kick – hilft bei Muskelkrämpfen'
      }
    ]
  },
  
  dinner: {
    name: 'Abendessen',
    icon: '🌙',
    meals: [
      {
        id: 'dinner-1',
        name: 'Lachs mit Süßkartoffeln & Spinat',
        portions: '150g Lachs, 200g Süßkartoffel, 100g Spinat',
        calories: 480,
        macros: { protein: 40, carbs: 50, fat: 14 },
        minerals: { calcium: 100, iron: 3.2, potassium: 780 },
        notes: 'Omega-3 & Magnesium – ideal zum Regenerieren'
      },
      {
        id: 'dinner-2',
        name: 'Hähnchen-Risotto mit Gemüse',
        portions: '120g Hähnchen, 80g Risotto-Reis, 100g Gemüse',
        calories: 420,
        macros: { protein: 35, carbs: 52, fat: 8 },
        minerals: { calcium: 70, iron: 2.5, potassium: 480 },
        notes: 'Leicht verdaulich – gut vor dem Schlaf'
      },
      {
        id: 'dinner-3',
        name: 'Rotes Fleisch mit Quinoa & Mangold',
        portions: '120g Rindersteak, 80g Quinoa, 150g Mangold',
        calories: 460,
        macros: { protein: 42, carbs: 48, fat: 12 },
        minerals: { calcium: 120, iron: 4.8, potassium: 720 },
        notes: 'Hochwertige Proteine – für Muskelaufbau'
      }
    ]
  }
};


const DAILY_NUTRITION_PLANS = {
  rennradtag: {
    name: 'Rennrad-Trainingstag',
    icon: '🚴‍♂️',
    description: 'Erhöhte Kohlenhydrate & Salzaufnahme für lange Fahrten',
    dailyTargets: {
      calories: 2800,
      protein: 140,
      carbs: 350,
      fat: 80,
      water: 3500
    },
    minerals: {
      sodium: 1500,
      potassium: 4700,
      magnesium: 420,
      calcium: 1000,
      iron: 18
    },
    tips: [
      '💧 Vor Fahrt: 500ml Wasser + Elektrolytgetränk',
      '🥤 Während Fahrt: Alle 45min 200ml Sportgetränk',
      '⚡ Nach Fahrt: Kohlenhydrate + Protein innerhalb 30min',
      '🧂 Salzige Snacks für Elektrolyt-Ausgleich'
    ]
  },
  
  normaltag: {
    name: 'Normaler Trainingstag',
    icon: '💪',
    description: 'Ausgewogene Ernährung für Kraft & Ausdauer',
    dailyTargets: {
      calories: 2400,
      protein: 120,
      carbs: 280,
      fat: 70,
      water: 3000
    },
    minerals: {
      sodium: 1200,
      potassium: 4700,
      magnesium: 420,
      calcium: 1000,
      iron: 18
    },
    tips: [
      '🥗 Viel Gemüse & Obst für Vitamine',
      '🍗 Lean Protein bei jeder Mahlzeit',
      '💧 2-3 Liter Wasser über den Tag verteilt',
      '⏰ 2-3 Stunden vor Training essen'
    ]
  }
};

const MINERALS_INFO = {
  sodium: { name: 'Natrium', icon: '🧂', daily: 1500, importance: 'Rennradfahrer: Elektrolytbalance & Schweiß-Ausgleich' },
  potassium: { name: 'Kalium', icon: '🍌', daily: 4700, importance: 'Muskelkontraktion & Energie' },
  magnesium: { name: 'Magnesium', icon: '🌰', daily: 420, importance: 'Verhindert Muskelkrämpfe' },
  calcium: { name: 'Kalzium', icon: '🥛', daily: 1000, importance: 'Knochengesundheit & Muskelkontraktion' },
  iron: { name: 'Eisen', icon: '🥩', daily: 18, importance: 'Sauerstofftransport – kritisch für Ausdauer' }
};
