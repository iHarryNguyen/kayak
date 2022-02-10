import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AirlineListComponent} from "./airline-list/airline-list.component";
import {AirlineInfoComponent} from "./airline-list/airline/airline-info/airline-info.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainComponent},
  {path: 'list', component: AirlineListComponent},
  {path: 'details', component: AirlineInfoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
