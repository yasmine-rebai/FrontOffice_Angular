import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  //lazy loading (kima fb ychargili kn eli hachti bih)
  //{path:'candidature',  loadChildren:() =>import('./candidature/candidature.module').then(m=>m.CandidatureModule)},
{path:'entretien',  loadChildren:() =>import('./entretien/entretien.module').then(m=>m.EntretienModule)
},
{path:'candidature',  loadChildren:() =>import('./candidature/candidature.module').then(m=>m.CandidatureModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
