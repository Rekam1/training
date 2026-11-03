// ============================================================
// STABILITÄT TRAINER - RENDER FUNKTIONEN
// ============================================================

function renderMuscleGroupSelection(el) {
  document.getElementById('header-title').textContent = '🏋️ Stabilität Trainer';
  document.getElementById('header-sub').textContent = 'Nach dem Radfahren direkt trainieren – Profi Rennrad Trainer';
  
  let html = '<div class="card-title" style="margin-bottom:14px">🎯 Welchen Bereich trainierst du nach der Fahrt?</div>';
  
  for (const [key, group] of Object.entries(MUSCLE_GROUPS_STABLE)) {
    html += `<div class="plan-card" onclick="selectMuscleGroup('${key}')" style="cursor:pointer; border-left:4px solid ${group.color}">
      <div class="plan-header">
        <div class="plan-icon">${group.name.split(' ')[0]}</div>
        <div style="flex:1">
          <div class="plan-name">${group.name}</div>
          <div class="plan-desc">${group.desc}</div>
        </div>
      </div>
    </div>`;
  }
  
  el.innerHTML = html;
}

function selectMuscleGroup(groupKey) {
  selectedMuscleGroup = groupKey;
  renderMuscleGroupWorkouts(document.getElementById('tab-training'));
}

function renderMuscleGroupWorkouts(el) {
  const group = MUSCLE_GROUPS_STABLE[selectedMuscleGroup];
  document.getElementById('header-title').textContent = group.name;
  document.getElementById('header-sub').textContent = 'Wähle deine Trainingsdauer';
  
  let html = `<div style="margin-bottom:14px">
    <div class="card-title">⏱️ Wie viel Zeit hast du?</div>
    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-bottom:20px;">
      <div class="plan-card" onclick="startStableWorkout(5)" style="cursor:pointer; padding:20px; text-align:center;">
        <div style="font-size:32px; margin-bottom:4px;">⚡</div>
        <div class="plan-name">5 Min</div>
        <div class="plan-desc">Quick</div>
      </div>
      <div class="plan-card" onclick="startStableWorkout(10)" style="cursor:pointer; padding:20px; text-align:center; border-color:var(--accent); border-width:2px;">
        <div style="font-size:32px; margin-bottom:4px;">💪</div>
        <div class="plan-name">10 Min</div>
        <div class="plan-desc">Standard</div>
      </div>
      <div class="plan-card" onclick="startStableWorkout(15)" style="cursor:pointer; padding:20px; text-align:center;">
        <div style="font-size:32px; margin-bottom:4px;">🔥</div>
        <div class="plan-name">15 Min</div>
        <div class="plan-desc">Intensiv</div>
      </div>
    </div>
  </div>`;
  
  html += `<div class="card-title">📋 Übungen</div>`;
  const exs10 = STABLE_WORKOUTS[selectedMuscleGroup][10] || [];
  
  exs10.forEach((ex, i) => {
    html += `<div class="card" style="padding:12px; margin-bottom:8px; font-weight:600;">${i+1}. ${ex}</div>`;
  });
  
  html += `<button class="btn btn-ghost" onclick="selectedMuscleGroup=null; renderMuscleGroupSelection(document.getElementById('tab-training'));" style="margin-top:16px;">↩️ Zurück</button>`;
  
  el.innerHTML = html;
}

function startStableWorkout(duration) {
  workoutDuration = duration;
  activeWorkout = { 
    muscleGroup: selectedMuscleGroup, 
    duration, 
    startTime: Date.now(), 
    exercises: STABLE_WORKOUTS[selectedMuscleGroup][duration],
    intervalId: null
  };
  renderWorkoutSession(document.getElementById('tab-training'));
}

function renderWorkoutSession(el) {
  const group = MUSCLE_GROUPS_STABLE[selectedMuscleGroup];
  const elapsed = Math.floor((Date.now() - activeWorkout.startTime) / 1000);
  const remaining = Math.max(0, activeWorkout.duration * 60 - elapsed);
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  
  document.getElementById('header-title').textContent = '⏱️ Training läuft';
  document.getElementById('header-sub').textContent = `${mins}:${String(secs).padStart(2, '0')}`;
  
  let html = `<div style="text-align:center; padding:30px 20px; background:rgba(249,115,22,0.1); border-radius:14px; border:2px solid var(--accent); margin-bottom:20px;">
    <div style="font-size:56px; font-weight:800; color:var(--accent);">${mins}:${String(secs).padStart(2, '0')}</div>
    <div style="font-size:13px; color:var(--muted); margin-top:8px;">von ${activeWorkout.duration} Minuten</div>
    <div style="font-size:14px; font-weight:700; color:var(--text); margin-top:12px;">${group.name}</div>
  </div>`;
  
  html += `<div class="card-title">📋 Heute trainierst du:</div>`;
  activeWorkout.exercises.forEach((ex, i) => {
    html += `<div class="card" style="padding:14px; margin-bottom:8px; font-weight:600; color:var(--accent);">${i+1}. ${ex}</div>`;
  });
  
  html += `<button class="btn btn-ok" onclick="finishStableWorkout();" style="margin-top:16px; margin-bottom:8px;">✅ Training beenden</button>`;
  html += `<button class="btn btn-danger" onclick="cancelStableWorkout();">Abbrechen</button>`;
  
  el.innerHTML = html;
  
  if (remaining <= 0) {
    finishStableWorkout();
  }
}

function finishStableWorkout() {
  trainingLog.unshift({
    id: Date.now(),
    date: new Date().toISOString(),
    planName: `${MUSCLE_GROUPS_STABLE[selectedMuscleGroup].name} (${workoutDuration}min)`,
    duration: workoutDuration,
    totalSets: 0,
    totalVolume: 0
  });
  saveData();
  
  showToast(`✅ ${workoutDuration}min Stabilität-Training gespeichert!`);
  activeWorkout = null;
  selectedMuscleGroup = null;
  renderTraining();
}

function cancelStableWorkout() {
  activeWorkout = null;
  renderMuscleGroupWorkouts(document.getElementById('tab-training'));
}
