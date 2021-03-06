import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ComponentsComponent } from './components/components.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildComponentComponent } from './component-interaction/child-component/child-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { EmpleadosService } from './services/empleados.service';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HttpObservablesComponent } from './http-observables/http-observables.component';
import { RoutingNavigationComponent } from './routing-navigation/routing-navigation.component';
import { DetailPageComponent } from './routing-navigation/detail/detail-page/detail-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildOverviewComponent } from './routing-navigation/child/child-overview/child-overview.component';
import { ChildContactoComponent } from './routing-navigation/child/child-contacto/child-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ComponentsComponent,
    ToolBarComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent,
    NgifDirectiveComponent,
    NgswitchDirectiveComponent,
    NgforDirectiveComponent,
    ComponentInteractionComponent,
    ChildComponentComponent,
    PipesComponent,
    ServicesComponent,
    DependencyInjectionComponent,
    FetchDataComponent,
    HttpObservablesComponent,
    RoutingNavigationComponent,
    DetailPageComponent,
    PageNotFoundComponent,
    ChildOverviewComponent,
    ChildContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
