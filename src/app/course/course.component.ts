import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses=[
    {'id':1, 'name':'Learn Angular', 'description':'Angular is a platform for building mobile and desktop web applications.','image':'../../assets/angular.png'},
    {'id':2, 'name':'Learn React', 'description':'React makes it painless to create interactive UIs. · Component-Based.','image':'../../assets/react.png'},
    {'id':3, 'name':'Learn .Net Core', 'description':'NET Core is a new version of .NET Framework, which is a free, open-source, general-purpose development platform maintained by Microsoft.','image':'../../assets/core.png'},
    {'id':4, 'name':'Learn Node JS', 'description':'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment','image':'../../assets/nodejs.png'},
    {'id':5, 'name':'Learn Vue JS', 'description':'Approachable. Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.','image':'../../assets/vuejs.png'},
    {'id':6, 'name':'Learn Javascript', 'description':'JavaScript is the world is most popular programming language. JavaScript is the programming language of the Web.','image':'../../assets/js.png'},
    
  ]

}
