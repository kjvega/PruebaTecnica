import { Injectable } from '@angular/core';
import {URL} from "../../environments/environment";
import {DataTable, DataTableSave} from "../modules/search-offers/interfaces/search-offers";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchOffersService {

  private apiUrl = URL

  constructor(private http: HttpClient) { }

  getDataTable(){
    return this.http.get<DataTable[]>(this.apiUrl+'dataTable');
  }

  saveDataTable(data: DataTableSave): Observable<DataTable> {
    return this.http.post<DataTable>(this.apiUrl+'guardar', data);
  }


  updateDataTable(data: DataTable): Observable<any> {
    const url = this.apiUrl+'actualizar';
    return this.http.put(url, data);
  }
}
