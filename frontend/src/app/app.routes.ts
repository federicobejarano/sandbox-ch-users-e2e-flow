import { Routes } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

export const routes: Routes = [
    {
        path: 'profile',
        component: ProfileCard
    },
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    }
];
