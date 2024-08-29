import { Component } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  model: any={};
  constructor(
    private profile: ProfileService
  ){}
  contact(){
    this.profile.contactus(this.model).subscribe(data=> {
   console.log(data)
    },
  err=> {
    console.log(err)

  })

  }

}
