import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TrainerComponent } from './pokemon/trainer/trainer.component';
import { DashboardComponent } from './pokemon/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'rubiraiders',
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
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: '',
        redirectTo: 'rubiraiders',
        pathMatch: 'full'
    }
];
