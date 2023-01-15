import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactListComponent, CustomDialog } from './pages/contact-list/contact-list.component';
import { ButtonComponent } from './shared/button/button.component';
import { InputComponent } from './shared/input/input.component';
import { CardContactComponent } from './shared/card-contact/card-contact.component';
import { IntroIllustrationComponent } from './shared/intro-illustration/intro-illustration.component';
import { fakeBackendProvider } from './support-utility/local-backend';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegisterComponent,
    ContactListComponent,
    ButtonComponent,
    InputComponent,
    CardContactComponent,
    IntroIllustrationComponent,
    CustomDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    MatDialogModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
