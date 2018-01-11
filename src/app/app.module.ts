import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AppNavbarComponent } from '../components/app-navbar/app-navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OcticonDirective } from '../directives/octicon/octicon.directive';
import { CarouselComponent } from '../components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    OcticonDirective,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
