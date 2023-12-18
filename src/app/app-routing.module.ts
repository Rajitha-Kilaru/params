import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parameter1Component } from './parameter1/parameter1.component';
import { Parameter2Component } from './parameter2/parameter2.component';


const routes: Routes = [
	{ path: 'parameter1' , component: Parameter1Component },
	{ path: 'parameter2' , component: Parameter2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
