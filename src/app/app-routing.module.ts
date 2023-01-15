import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: 'contacts/:id',
    component: ContactListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
