import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthService } from "./shared/services/auth.service";

import { AppComponent } from "./app.component";
import { ToDoComponent } from "./to-do/to-do.component";
import { ToDoItemComponent } from "./to-do/to-do-item/to-do-item.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

@NgModule({
  declarations: [AppComponent, ToDoComponent, ToDoItemComponent, DashboardComponent, SignInComponent, SignUpComponent, ForgotPasswordComponent, VerifyEmailComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
