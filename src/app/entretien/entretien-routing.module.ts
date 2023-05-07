import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListentretienComponent } from './list-entretien/list-entretien.component';

const routes: Routes = [
  {path:"listEntretien",component:ListentretienComponent},
  
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntretienRoutingModule { }
