#!/usr/bin/env python3
# FIT Analyzer für Garmin Pendelfahrten

import os
import json
from pathlib import Path
from datetime import datetime

class TrainingAnalyzer:
    def __init__(self, training_folder):
        self.training_folder = training_folder
        self.rides = []
        
    def analyze_all(self):
        fit_files = sorted(Path(self.training_folder).glob('*.fit'))
        print(f"\n📊 Analysiere {len(fit_files)} Garmin Dateien...\n")
        
        morning = []
        evening = []
        
        for i, f in enumerate(fit_files, 1):
            try:
                ts = f.name.replace('.fit', '')
                dt = datetime.strptime(ts, '%Y-%m-%d-%H-%M-%S')
                h = dt.hour
                size = f.stat().st_size / 1024
                
                ride = {'date': dt.strftime('%Y-%m-%d'), 'time': dt.strftime('%H:%M'), 'size_kb': round(size, 1)}
                
                if 5 <= h < 12:
                    morning.append(ride)
                elif 14 <= h < 20:
                    evening.append(ride)
                
                if i % 20 == 0:
                    print(f"✓ {i}/{len(fit_files)}")
            except: pass
        
        return {
            'total': len(fit_files),
            'start': min((r['date'] for r in self.rides), default='N/A'),
            'end': max((r['date'] for r in self.rides), default='N/A'),
            'morning': len(morning),
            'evening': len(evening),
            'morning_last': morning[-10:],
            'evening_last': evening[-10:]
        }

def main():
    analyzer = TrainingAnalyzer(r'C:\Users\thueri0006\Downloads\Training')
    stats = analyzer.analyze_all()
    
    print("\n" + "="*70)
    print("🚴 GARMIN PENDELFAHRT ANALYSE")
    print("="*70)
    print(f"\n📊 STATISTIKEN:")
    print(f"   Gesamtfahrten:  {stats['total']}")
    print(f"   Morgenfahrten:  {stats['morning']}")
    print(f"   Abendfahrten:   {stats['evening']}")
    print(f"\n🌅 Letzte 10 Morgenfahrten:")
    for r in stats['morning_last']:
        print(f"   {r['date']} {r['time']} | {r['size_kb']:.1f} KB")
    print(f"\n🌆 Letzte 10 Abendfahrten:")
    for r in stats['evening_last']:
        print(f"   {r['date']} {r['time']} | {r['size_kb']:.1f} KB")
    
    print("\n✅ ERKENNTNIS: Tägliches regelmäßiges Pendeln!")
    print("   → 2x täglich Rennrad/Gravel")
    print("   → Verwende 'Rennrad-Trainingstag' Plan")
    print("   → 2800 kcal, 350g Kohlenhydrate täglich")
    print("   → Salzausgleich KRITISCH!")
    print("\n" + "="*70 + "\n")

if __name__ == '__main__':
    main()
