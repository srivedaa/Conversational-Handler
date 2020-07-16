import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StddetailsComponent } from './stddetails/stddetails.component';

const appRoutes: Routes = [
  {path:'stdDetail/:id',component:StddetailsComponent},
  {path:'survey',component:StudentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StddetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
