import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {RegimenDetailService} from '../../regimen-detail.service';
import {SubcancerlevelsService} from '../../subcancerlevels.service';
import {MultiSelect} from 'primeng/primeng';

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
  public  subCancerLevel = {};
  public SubCancerTypeLevels: any = [];
  @ViewChild('multiselect') multi: MultiSelect;
  constructor(private RegimenDetailService: RegimenDetailService,
              private subCancerTypeLevels: SubcancerlevelsService) {
    this.getRegimens();
    this.getSubCancerLevels();

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


  view(event){
    if(event){
      this.subCancerLevel = event;
    }

  }

  getSubCancerLevels(){
    this.subCancerTypeLevels.getAllSubCancerLevels().subscribe((resp) => {
      this.SubCancerTypeLevels = resp;
    }, (error) => {
      alert('Error in getting SubCancer Types');
    });
  }

}
