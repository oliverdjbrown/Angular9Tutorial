import { ComponentsComponent } from './components/components.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';

// Constante en donde se declaran las rutas para luego ser utilizadas
const routes: Routes = [
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'components', component: ComponentsComponent},
  { path: 'interpolation', component: InterpolationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
