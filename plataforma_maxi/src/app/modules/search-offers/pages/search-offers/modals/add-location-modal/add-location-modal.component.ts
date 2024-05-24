import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DataTable} from "../../../../interfaces/search-offers";
import {SearchOffersService} from "../../../../../../service/search-offers.service";

@Component({
  selector: 'app-add-location-modal',
  templateUrl: './add-location-modal.component.html',
  styleUrls: ['./add-location-modal.component.scss']
})
export class AddLocationModalComponent implements OnInit {
  newForm: FormGroup = new FormGroup({});
  constructor(
    public dialogRef: MatDialogRef<AddLocationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dataModal: DataTable,
    private service:SearchOffersService
  ) { }

  ngOnInit(): void {
    this.initForm();
    if(this.dataModal){
      this.newForm.patchValue({
        latitude:this.dataModal.lat,
        length:this.dataModal.lng,
        description:this.dataModal.description
      })
    }
  }

  initForm() {
    this.newForm = new FormGroup({
      latitude: new FormControl(''),
      length: new FormControl(''),
      description: new FormControl('')
    });
  }

  save():void{
    if(this.dataModal){
      const dataUpdate = {
        id:this.dataModal.id,
        lat:this.newForm.get('latitude')?.value,
        lng:this.newForm.get('length')?.value,
        description:this.newForm.get('description')?.value
      }
      this.service.updateDataTable(dataUpdate).subscribe({
        next:()=>{
          this.closeDialog(true);
        }
      })
      return
    }

    const dataSave = {
      lat:this.newForm.get('latitude')?.value,
      lng:this.newForm.get('length')?.value,
      description:this.newForm.get('description')?.value
    }
    this.service.saveDataTable(dataSave).subscribe({
      next:()=>{
        console.log('actualizo');
        this.closeDialog(true);
      }
    })
  }

  closeDialog(result: boolean) {
    if (result) {
      this.dialogRef.close(true);
      return
    }
    this.dialogRef.close(false);
  }

}
