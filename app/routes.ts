import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {AppComponent, RegisterComponent} from './Composents/index.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: AppComponent,
        children: [
            {path: '', components: RegisterComponent}

        ]
    },
    {path: '**', redirectTo:''}
])