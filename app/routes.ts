import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {AppComponent, RegisterComponent} from './Composents';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: AppComponent,
        children: [
            {path: 'register', components: RegisterComponent}

        ]
    },
    {path: '**', redirectTo:''}
])