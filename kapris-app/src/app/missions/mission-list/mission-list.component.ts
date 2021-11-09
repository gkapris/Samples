import { Component, Input, OnInit } from '@angular/core';
import { IHero } from 'src/app/core/hero.interface';
import { IMission } from 'src/app/core/mission.interface';

import { MissionService } from '../missions.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
})
export class MissionListComponent implements OnInit {
  @Input() hero?: IHero;

  constructor(public missionService: MissionService) {}

  completeMission(mission: IMission) {
    this.missionService.completeMission(mission, this.hero).subscribe(() => {
      this.hero.missions = this.hero.missions.filter((m) => m !== mission);
    });
  }

  getPriorityColor(mission: IMission): string {
    switch (mission.priority) {
      case 'medium':
        return 'yellow';
      case 'high':
        return 'red';
      default:
        return 'blue';
    }
  }

  ngOnInit() {
    this.missionService.missionAdded$.subscribe((mission) => {
      if (!this.hero.missions) {
        this.hero.missions = [];
      }
      this.hero.missions.push(mission);
    });
  }
}
