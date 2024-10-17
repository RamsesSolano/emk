import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TrainerComponent } from './pokemon/trainer/trainer.component';
import { DashboardComponent } from './pokemon/dashboard/dashboard.component';
import { LoginComponent } from './pokemon/login/login.component';

export const routes: Routes = [
    {
        path: 'pokemon',
        component: PokemonComponent,
        children: [
            {
                path: 'register',
                component: TrainerComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'login',
                component: LoginComponent
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
