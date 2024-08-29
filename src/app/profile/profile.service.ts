import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  skillsData: any =[
    {
      'id':'1',
      'skill':'Angular',
    },
    {
      'id':'2',
      'skill':'React'
    },
    {
      'id':'3',
      'skill':'Python'
    },
    {
      'id':'4',
      'skill':'Cyber Security Analyst'
    },
    {
      'id':'5',
      'skill':'Devops Engineer'
    },
    {
      'id':'6',
      'skill':'Data Analysis'
    },
    {
      'id':'7',
      'skill':'Electrical & Telecommunications Engineer'
    }
  ];

  educationData: any = [
    {
      'id':'1',
      'from_to_year':'2018-2023',
      'Major':'Bachelors Degree',
      'Course':'BSC Electrical And Telecommunication Engineering',
      'Institution':'Multimedia University Of Kenya',

    },
    {
      'id':'2',
      'from_to_year':'2014-2017',
      'Major':'Secondary Education',

      'Institution':'Nkubu High School',
      
    }
  ];
  experienceData: any = [
    {
      'id': '1',
      'from_to_month': 'Jan 2024 - date',
      'organization': 'E&M Technology House Limited',
      'role': 'Software Developer',
      'details': `
        - Led the development and deployment of a comprehensive SACCO banking solution, enhancing financial services for SACCOs in Kenya.
        - Designed and implemented secure transaction processes, ensuring compliance with industry standards and protecting member data.
        - Developed member management systems, streamlining member registration, loan processing, and savings management.
        - Integrated various financial services, including automated loan disbursement and repayment, which improved operational efficiency.
        - Collaborated with cross-functional teams to customize the solution according to the specific needs of different SACCOs.
        - Provided ongoing technical support and maintenance to ensure the smooth operation of the SACCO system.
      `
    },
    {
      'id':'2',
      'from_to_month': 'August 2023 - October 2023',
      'organization':'Ministry Of Works under State Department of Public Transport',
      'role':'Intern Electrical Engineer',
      'details':`
        -Designed electrical systems using AutoCAD, ensuring compliance with industry standards.',
        -Implemented electrical designs on-site and supervised the installation processes.',
        -Carried out diagnostics and troubleshooting of electrical systems to ensure optimal performance.',
        -Conducted site visits to assess and ensure adherence to safety and quality standards.'
      `
    }
    
  ];
 contactus(data: any): Observable<any>{
  return this.http.post(this.baseUrl + 'contact',data);
 };
 skills(): Observable<any> {
   return this.skillsData;
 }
 education(): Observable<any> {

  return this.educationData;
}

exprience(): Observable<any> {

  return this.experienceData;
}
}
  

