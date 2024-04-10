import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)
    },

    {
        path: 'consults',
        loadComponent: () => import('./component/consults/consults.component')
    },
    {
        path: 'exams',
        loadComponent: () => import('./component/exams/exams.component')
    },
];
