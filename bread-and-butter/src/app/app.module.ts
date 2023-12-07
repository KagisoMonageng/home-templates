import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DownArrow } from './components/svg-icons/down-arrow';
import { MainBtn } from './components/main-btn';
import { HeaderComponent } from './components/header/header.component';
import { PortfoliosComponent } from './components/portfolios/portfolios.component';

@NgModule({
  declarations: [
    AppComponent,
    DownArrow,
    MainBtn,
    HeaderComponent,
    PortfoliosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
