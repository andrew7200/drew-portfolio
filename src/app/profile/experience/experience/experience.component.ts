import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experienceData: any;
  constructor(
    private profile: ProfileService
  ){}
ngOnInit(): void {
    this.getExperience();
}
getExperience(){
  this.experienceData= this.profile.exprience();
}
}
