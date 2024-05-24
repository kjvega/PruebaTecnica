export interface DataTable {
  id:number
  lat: number,
  lng: number,
  description: string
}

export interface DataTableSave {
  lat: number,
  lng: number,
  description: string
}

export interface DataTableVentas {
  mes: string,
  inmuebles: number,
  totalVentas: number
}