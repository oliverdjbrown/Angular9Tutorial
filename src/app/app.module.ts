import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ComponentsComponent } from './components/components.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ComponentsComponent,
    ToolBarComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
