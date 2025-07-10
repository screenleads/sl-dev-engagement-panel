import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdviceComponent } from './advice/advice.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'advice/:id', component: AdviceComponent }
];