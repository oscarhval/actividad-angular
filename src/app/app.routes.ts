import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'componente1', component: Componente1Component },
  { path: 'componente2', component: Componente2Component },
];
