import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CorouselComponent } from './corousel/corousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule } from "@angular/fire/auth";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CorouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'my-chat-app'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
