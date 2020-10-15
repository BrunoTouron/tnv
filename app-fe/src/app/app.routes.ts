import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VeiculoListComponent } from './veiculo/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo/veiculo-form/veiculo-form.component';
import { VeiculoViewComponent } from './veiculo/veiculo-view/veiculo-view.component';

export const rotasApp: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'veiculos',
        component: VeiculoListComponent
    },
    {
        path: 'veiculos-form/:id',
        component: VeiculoFormComponent
    },
    {
        path: 'veiculos-form',
        component: VeiculoFormComponent
    },
    {
        path: 'veiculos-view/compkey',
        component: VeiculoViewComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export const ModuloRoteamento = RouterModule.forRoot(rotasApp);


