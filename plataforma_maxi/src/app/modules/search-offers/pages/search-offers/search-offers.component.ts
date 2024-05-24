import { Component, OnInit } from '@angular/core';
import {DataTable, DataTableVentas} from "../../interfaces/search-offers";
import {AddLocationModalComponent} from "./modals/add-location-modal/add-location-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {SearchOffersService} from "../../../../service/search-offers.service";

@Component({
  selector: 'app-search-offers',
  templateUrl: './search-offers.component.html',
  styleUrls: ['./search-offers.component.scss']
})
export class SearchOffersComponent implements OnInit {
  center: google.maps.LatLngLiteral = {
    lat: 8.23773,
    lng: -73.35604
  };
  zoom = 10;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  dataSource:DataTable[] =[];

  displayedColumns: string[] = ['lat', 'lng','description', 'action'];

  dataSourceVentas:DataTableVentas[] =[];

  displayedColumnsVentas: string[] = ['mes', 'inmuebles','totalVentas'];

  constructor(
    public dialog: MatDialog,
    private service:SearchOffersService
  ) {

  }

  ngOnInit(): void {
    this.getAllDataTable();
    this.getAllDataTableVentas();
  }
  getAllDataTable():void{
   this.service.getDataTable().subscribe({
      next:(response)=>{
       this.dataSource = response;
       this.mapDataTableMap();
      }
    })

  }

  getAllDataTableVentas():void{
    this.service.getDataTableVentas().subscribe({
      next:(response)=>{
        this.dataSourceVentas = response;
      }
    })


  }

  mapDataTableMap():void{
    this.markerPositions = this.dataSource.map(item =>{
      return {
        lat:item.lat,
        lng:item.lng
      }
    })

  }

  addModal():void{
    const dialogRef = this.dialog.open(AddLocationModalComponent, {
      height: '420px',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllDataTable();

      }
    });
  }

  editModal(item:DataTable):void{
    const dialogRef = this.dialog.open(AddLocationModalComponent, {
      height: '420px',
      width: '1000px',
      data:{
        id:item.id,
        lat:item.lat,
        lng:item.lng,
        description:item.description
      }

    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllDataTable();
      }
    });
  }



}
