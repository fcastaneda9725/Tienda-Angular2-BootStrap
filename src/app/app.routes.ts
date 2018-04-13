import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { VerMasComponent } from './views/ver-mas/ver-mas.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'ver-mas',
        canActivate: [AuthGuard],
        component: VerMasComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
