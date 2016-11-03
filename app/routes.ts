import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {MainComponent, RegisterComponent, NavComponent} from './Composents';

export const routes: ModuleWithProviders = RouterModule.forRoot([

    {path: '', component: MainComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo:''}
]);