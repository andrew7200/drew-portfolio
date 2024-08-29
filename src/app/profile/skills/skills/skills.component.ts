import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skillsData:any;
  constructor(
    private profile: ProfileService
  ){

  }
  ngOnInit(): void {
      this.getSkills();
  }
  getSkills(){
    this.skillsData = this.profile.skills();
  }

}
