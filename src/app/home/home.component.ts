import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options:any;
  courseSelected:any;
  teacherSelected:any;
  students:any;
  constructor(private studentservice:StudentService) { }

  ngOnInit() {
  }
  coursechng(){
    this.studentservice.getTechbyCourse(this.courseSelected).subscribe(data=>this.options =data,error=>console.log(error));
  }
  getStudentsList(){
    this.studentservice.getstudentbycat(this.courseSelected,this.teacherSelected).subscribe(data=>this.students=data,error =>console.log(error));
  }


}
