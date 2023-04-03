import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';


const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'tecnologias', component: TecnologiasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
