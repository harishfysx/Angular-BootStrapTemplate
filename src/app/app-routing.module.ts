import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  // { path: '', redirectTo: 'signup' ,pathMatch: 'full' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
