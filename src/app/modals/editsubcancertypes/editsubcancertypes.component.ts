import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RegimenDetailService} from '../../regimen-detail.service';

@Component({
  selector: 'app-editsubcancertypes',
  templateUrl: './editsubcancertypes.component.html',
  styleUrls: ['./editsubcancertypes.component.scss']
})
export class EditsubcancertypesComponent{
  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() SubCancerType: any;
  public regimenDetails: any= [];
  constructor(private RegimenDetailService: RegimenDetailService ) {
    this.getRegimens();
  }

  okay() {
    this.yes.emit(this.SubCancerType);
  }

  close(event) {
    this.cancel.emit(event);
  }

  getRegimens() {
    const that = this;
    this.RegimenDetailService.getRegimens().subscribe((resp) => {
      resp.forEach(regimen => {
        this.regimenDetails.push({label: regimen.dispName, value: regimen});
      });
    }, function (error) {
      alert('Error in getting medicines');
    });
  }

}
