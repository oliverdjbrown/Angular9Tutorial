import { ChildContactoComponent } from './routing-navigation/child/child-contacto/child-contacto.component';
import { ChildOverviewComponent } from './routing-navigation/child/child-overview/child-overview.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ServicesComponent } from './services/services.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChildComponentComponent } from './component-interaction/child-component/child-component.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ComponentsComponent } from './components/components.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DetailPageComponent } from './routing-navigation/detail/detail-page/detail-page.component';

// Constante en donde se declaran las rutas para luego ser utilizadas
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'class-binding', component: ClassBindingComponent },
  { path: 'style-binding', component: StyleBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'template-reference-variables', component: TemplateReferenceVariablesComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'ngif-directive', component: NgifDirectiveComponent },
  { path: 'ngswitch-directive', component: NgswitchDirectiveComponent },
  { path: 'ngfor-directive', component: NgforDirectiveComponent },
  { path: 'component-interaction', component: ComponentInteractionComponent },
  { path: 'child-component', component: ChildComponentComponent},
  { path: 'pipes', component: PipesComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'dependency-injection', component: DependencyInjectionComponent},
  { path: 'http-observables', component: HttpObservablesComponent },
  { path: 'fetch-data', component: FetchDataComponent},
  { path: 'routing-navigation', component: RoutingNavigationComponent},
  { path: 'detail-page/:id',
   component: DetailPageComponent,
   children: [
     { path: 'overview', component: ChildOverviewComponent},
     { path: 'contacto', component: ChildContactoComponent}
   ]
  },
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
