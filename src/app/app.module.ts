import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidatureModule } from './candidature/candidature.module';
import { EntretienModule } from './entretien/entretien.module';

import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import {  MatOptionModule } from '@angular/material/core'; 
import { MatIcon } from '@angular/material/icon';
import {  MatLabel } from '@angular/material/form-field';
import { MatTable } from '@angular/material/table';
/*FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);*/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CandidatureModule,
    EntretienModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
