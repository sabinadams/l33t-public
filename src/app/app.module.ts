//Core Imports....
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Page Imports....
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home';
import { LoginPage } from './pages/login/login';
import { ForgotPasswordPage } from './pages/login/forgotPassword/forgotPassword';
import { VerifyCodePage } from './pages/login/verifyCode/verifyCode';

//Service Imports....
import { HttpClient } from './services/http-service';
import { AuthService } from './services/auth-service';

//Auth Guards 
import { AuthGuard } from './services/auth-guard';

//Pipe Imports....
import { FilterPipe } from './pipes/filter-pipe';
import { SortPipe } from './pipes/sort-pipe';
import { SafePipe } from './pipes/safe-pipe';
import { TimeAgoPipe } from './pipes/time-ago-pipe';



//Routing Imports....
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginPage, FilterPipe, SortPipe, 
    SafePipe, TimeAgoPipe, ForgotPasswordPage, VerifyCodePage
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  providers: [
    appRoutingProviders, HttpClient, AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
