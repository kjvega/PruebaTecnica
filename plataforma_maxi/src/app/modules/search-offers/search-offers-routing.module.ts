import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchOffersComponent} from "./pages/search-offers/search-offers.component";

const routes: Routes = [
  {
    path:'',
    component:SearchOffersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchOffersRoutingModule { }
