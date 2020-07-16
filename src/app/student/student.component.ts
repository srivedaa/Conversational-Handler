import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService, Student } from '../student-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  students:string[];

 student='';
 numeric:number=0;
 mean:number=0;
 sum : number=0;
 sd:number=0;
 value:String;
 data:String[];
 id:String;
 name:String;
studentDetails:Student;
 scheduleForm: FormGroup;
 stdArray:Array<String>=[];
 showSimpleAcknowledgement:boolean = false;
 




 showSuccess = true;

  constructor(private http:HttpClient,private myService:StudentServiceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.scheduleForm = this.fb.group({

      sname:['',Validators.required],
 likeliness:[],

    });

    // console.log("get students"+this.myService.getStudents());

    // this.myService.getStudents().subscribe(
    //   response =>this.handleSuccessfulResponse(response),
    //  );
  }

  handleSuccessfulResponse(response)
  {
      this.students=response;
      console.log("student ids retrieving "+this.students);
  }
  
res;
userData;
  submit():void{
  this.showSimpleAcknowledgement = true;
   this.studentDetails = {
     stdname : this.scheduleForm.get("sname").value,
    stdlike:this.scheduleForm.get("likeliness").value,
   }
  console.log(this.studentDetails);
  this.myService.getStdDetail(this.studentDetails.stdlike,this.studentDetails.stdname);
  this.myService.getStdDetail(this.studentDetails.stdlike,this.studentDetails.stdname).subscribe(
  (response) =>  {this.res=response;
    console.log(this.res);
  }
  
  );
    }



  onSubmit(): void {
  };


}
