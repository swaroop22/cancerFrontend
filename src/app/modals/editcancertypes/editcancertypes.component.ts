import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PatientsService} from '../../patients.service';

@Component({
  selector: 'app-editcancertypes',
  templateUrl: './editcancertypes.component.html',
  styleUrls: ['./editcancertypes.component.scss']
})
export class EditcancertypesComponent{
  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() CancerType: any;
  id: number;
  public patientNames = [];

  constructor(private patientsService: PatientsService) {
    this.getPatientsNames();
  }

  okay() {
    this.yes.emit(this.CancerType);
  }


  getPatientsNames() {
    const that = this;
    this.patientsService.getPatients().subscribe(function (resp) {
      that.patientNames = resp;
    }, function (error) {
      alert('Error in getting medicines');
    });
  }

  close(event) {
    this.cancel.emit(event);
  }

  onSelect(event){
    this.id = event;
  }

}
