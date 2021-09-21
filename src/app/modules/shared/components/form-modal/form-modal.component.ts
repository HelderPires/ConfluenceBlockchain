
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormField } from '../../../../types/form-field';
import { FormControl, FormGroup } from '@angular/forms';

export interface DialogData {
  fields: Array<FormField>
  actions: Array<Component>;
  title: string
}

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  formGroup = new FormGroup({

  })
  @Input() title: string = '';
  constructor(
    public modelRef: MatDialogRef<FormModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}
    ngOnInit(){
      console.log(this.data)
    }

  onNoClick(): void {
    this.modelRef.close();
  }
}
