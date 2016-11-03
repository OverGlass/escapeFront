import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {MainComponent, RegisterComponent} from './Composents';

export const Routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: MainComponent,
        children: [
            {path: '', components: RegisterComponent}

        ]
    },
    {path: '**', redirectTo:''}
]);