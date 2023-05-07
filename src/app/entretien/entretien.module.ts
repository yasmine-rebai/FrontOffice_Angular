import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntretienRoutingModule } from './entretien-routing.module';
import { EntretienService } from '../entretien.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  ListentretienComponent } from './list-entretien/list-entretien.component';
import {  EntretienDialogComponent } from './entretien-dialog/entretien-dialog.component';




@NgModule ({
  declarations: [
    EntretienDialogComponent,
    ListentretienComponent,
    
    
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    EntretienRoutingModule,
    
  ],
  providers:[EntretienService],
})
export class EntretienModule { }
