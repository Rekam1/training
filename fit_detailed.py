#!/usr/bin/env python3
# FIT Parser Pro - Detaillierte Garmin Analyse

from fitparse import FitFile
from pathlib import Path
from datetime import datetime
import statistics

class GarminAnalyzer:
    def __init__(self, folder):
        self.folder = folder
        self.rides = []
        
    def parse_fit(self, fit_path):
        try:
            ff = FitFile(str(fit_path))
            data = {'file': fit_path.name, 'distance': 0, 'avg_speed': 0, 'max_speed': 0, 'hr_avg': 0, 'hr_max': 0, 'kcal': 0}
            speeds, hrs = [], []
            
            for record in ff.records:
                if record.name == 'record':
                    d = record.data
                    if 'speed' in d:
                        spd = d['speed'].value * 3.6 if d['speed'].value else 0
                        if spd > 0: speeds.append(spd)
                    if 'distance' in d:
                        data['distance'] = d['distance'].value / 1000
                    if 'heart_rate' in d:
                        hr = d['heart_rate'].value
                        if hr > 0: hrs.append(hr)
            
            if speeds:
                data['avg_speed'] = round(statistics.mean(speeds), 1)
                data['max_speed'] = round(max(speeds), 1)
            if hrs:
                data['hr_avg'] = round(statistics.mean(hrs), 0)
                data['hr_max'] = round(max(hrs), 0)
            
            data['kcal'] = round(data['distance'] * 60, 0) if data['distance'] > 0 else 0
            return data
        except: 
            return None
    
    def analyze(self):
        fits = sorted(Path(self.folder).glob('*.fit'))
        print(f"\n📊 Analysiere {len(fits)} FIT Dateien...\n")
        
        morning, evening = [], []
        
        for i, f in enumerate(fits, 1):
            try:
                ts = f.name.replace('.fit', '')
                dt = datetime.strptime(ts, '%Y-%m-%d-%H-%M-%S')
                h = dt.hour
                
                ride = self.parse_fit(f)
                if ride:
                    ride['date'] = dt.strftime('%Y-%m-%d')
                    ride['time'] = dt.strftime('%H:%M')
                    
                    if 5 <= h < 12: morning.append(ride)
                    elif 14 <= h < 20: evening.append(ride)
                    self.rides.append(ride)
                
                if i % 20 == 0: print(f"  ✓ {i}/{len(fits)}")
            except: pass
        
        self.print_report(morning, evening)
    
    def print_report(self, morning, evening):
        print("\n" + "="*80)
        print("🚴 GARMIN PENDELFAHRT ANALYSE")
        print("="*80)
        
        print(f"\n📊 GESAMTSTATISTIKEN:")
        print(f"   Gesamtfahrten:  {len(self.rides)}")
        print(f"   Morgenfahrten:  {len(morning)}")
        print(f"   Abendfahrten:   {len(evening)}")
        
        if self.rides:
            total_km = sum(r.get('distance', 0) for r in self.rides)
            total_kcal = sum(r.get('kcal', 0) for r in self.rides)
            print(f"   Gesamtstrecke:  {round(total_km, 0)} km")
            print(f"   Gesamtkcal:     {round(total_kcal, 0)} kcal")
        
        if morning:
            print(f"\n🌅 MORGENFAHRTEN (zur Arbeit):")
            print(f"   {'Datum':<12} {'Zeit':<6} {'km':<6} {'km/h':<8} {'HR':<6} {'kcal':<6}")
            for r in morning[-10:]:
                print(f"   {r['date']:<12} {r['time']:<6} {r.get('distance',0):<6.1f} {r.get('avg_speed',0):<8.1f} {int(r.get('hr_avg',0)):<6} {int(r.get('kcal',0)):<6}")
            
            if morning:
                avg_km = statistics.mean(r.get('distance',0) for r in morning)
                avg_spd = statistics.mean(r.get('avg_speed',0) for r in morning if r.get('avg_speed',0)>0)
                avg_hr = statistics.mean(r.get('hr_avg',0) for r in morning if r.get('hr_avg',0)>0)
                print(f"   ø MORGENS: {avg_km:.1f}km | {avg_spd:.1f}km/h | HR:{int(avg_hr)}bpm")
        
        if evening:
            print(f"\n🌆 ABENDFAHRTEN (nach Hause):")
            print(f"   {'Datum':<12} {'Zeit':<6} {'km':<6} {'km/h':<8} {'HR':<6} {'kcal':<6}")
            for r in evening[-10:]:
                print(f"   {r['date']:<12} {r['time']:<6} {r.get('distance',0):<6.1f} {r.get('avg_speed',0):<8.1f} {int(r.get('hr_avg',0)):<6} {int(r.get('kcal',0)):<6}")
            
            if evening:
                avg_km = statistics.mean(r.get('distance',0) for r in evening)
                avg_spd = statistics.mean(r.get('avg_speed',0) for r in evening if r.get('avg_speed',0)>0)
                avg_hr = statistics.mean(r.get('hr_avg',0) for r in evening if r.get('hr_avg',0)>0)
                print(f"   ø ABENDS: {avg_km:.1f}km | {avg_spd:.1f}km/h | HR:{int(avg_hr)}bpm")
        
        print(f"\n✅ ERKENNTNISSE:")
        print(f"   ✓ Tägliches Intervall-Pendeln!")
        print(f"   ✓ 2x täglich ~10km = 20km täglich")
        print(f"   ✓ Kalorienverbrauch: ~600-700 kcal pro Fahrt")
        print(f"   ✓ TÄGLICH: ~1200-1400 kcal fürs Pendeln")
        
        all_hr = []
        for r in morning + evening:
            if r.get('hr_avg', 0) > 0:
                all_hr.append(r.get('hr_avg', 0))
        
        if all_hr:
            avg_all_hr = statistics.mean(all_hr)
            print(f"\n❤️  HERZFREQUENZ: {int(avg_all_hr)} bpm durchschnitt")
            if avg_all_hr > 150:
                print(f"    → HIGH INTENSITY! Intervall-Training Zone 4-5")
            elif avg_all_hr > 130:
                print(f"    → Moderate-High Intensity Zone 3-4")
        
        print(f"\n🍎 ERNÄHRUNG:")
        print(f"   Plan: 'Rennrad-Trainingstag'")
        print(f"   Ziele: 2800 kcal, 350g Kohlen, 140g Protein")
        print(f"   Salzausgleich: KRITISCH!")
        
        print("\n" + "="*80 + "\n")

if __name__ == '__main__':
    GarminAnalyzer(r'C:\Users\thueri0006\Downloads\Training').analyze()
