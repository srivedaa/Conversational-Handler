import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Student{
  constructor(
    public stdname:string,
    public stdlike:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  // serviceURL: string;
  // liveInterviewWindow: any;
  // private root: string;

  private usersUrl: string;
  private studentList:Array<String>=[];
  private std:Array<Student>=[];
  private stdDetail:Student;



  constructor( private http:HttpClient) {
  }

 // private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'public', 'Access-Control-Allow-Origin': '*','changeOrigin':'true'});

  // getEmployees()
  // {
  //   console.log("test call");
  //   return this.http.get<Employee[]>('http://localhost:8080/employees');
  // }

  // setEmployees(employee){
  //   console.log("adding employee");

  //   return this.http.post<Employee[]>('http://localhost:8080/employees',employee);
  // }

  getStdDetail(stdlike,stdname){
    return this.http.get<Student>('http://localhost:8081/transition'+'/'+stdlike+'/'+stdname);
  }

  // getStudents()
  // {
  //   return this.http.get<Student[]>('http://localhost:8080/client');
  // }

  // setStudent(student){
  //    return this.http.get('http://localhost:8080/students'+student);
  // }

}
