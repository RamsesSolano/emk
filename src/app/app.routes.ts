import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokemon',
        component: undefined,
        children: [
            {
                path: 'register',
                component: undefined
            },
            {
                path: 'dashboard',
                component: undefined
            },
            {
                path: 'login',
                component: undefined
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: '',
        redirectTo: 'pokemon/dashboard',
        pathMatch: 'full'
    }
];
