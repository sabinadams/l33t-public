//Core Imports....
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Component Imports....
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home';
import { LoginPage } from './pages/login/login';

import { AuthGuard } from './services/auth-guard';


//App Routes....
const appRoutes: Routes = [
	{ path: '', component: LoginPage },
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
]; 

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);