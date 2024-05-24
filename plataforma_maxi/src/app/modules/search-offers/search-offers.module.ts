import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchOffersRoutingModule } from './search-offers-routing.module';
import { SearchOffersComponent } from './pages/search-offers/search-offers.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import {GoogleMapsModule} from "@angular/google-maps";
import {MatTableModule} from "@angular/material/table";
import { AddLocationModalComponent } from './pages/search-offers/modals/add-location-modal/add-location-modal.component';
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearchOffersComponent,
    AddLocationModalComponent
  ],
  imports: [
    CommonModule,
    SearchOffersRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    GoogleMapsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],

})
export class SearchOffersModule { }
