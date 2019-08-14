import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {CancerTypeService} from '../../cancer-type.service';
import {ActivatedRoute} from '@angular/router';
import {RegimenDetailService} from '../../regimen-detail.service';
import {MultiSelect} from 'primeng/primeng';
import {SubcancertypeService} from '../../subcancertype.service';

@Component({
  selector: 'app-addsubcancerlevels',
  templateUrl: './addsubcancerlevels.component.html',
  styleUrls: ['./addsubcancerlevels.component.scss']
})
/* tslint:disable */


export class AddsubcancerlevelsComponent implements OnChanges {

  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() Error: any;
  id: number;
  public CancerTypes: any = [];
  @ViewChild('multiselect') multi: MultiSelect;
  @Input() subCancerType: string;
  public subCancerTypes: any = [];

  public regimenDetails: any= [];
  public SubCancerType = {};


  public CancerType = {
    id:0,
    title: '',
    regimenDetailList: []
  };

  constructor(private cancerTypeService: CancerTypeService,
              private RegimenDetailService: RegimenDetailService,
              private subCancerType1Service: SubcancertypeService,
              private routes: ActivatedRoute) {
    this.getRegimens();
    this.getCancerTypes();
    this.getSubCancerTypes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.Error.currentValue.login) {
      this.initEmptyUser();
    }
  }

  getCancerTypes(){
    const that = this;
    this.cancerTypeService.getCancerTypes(this.routes.snapshot.params["id"]).subscribe(function (resp) {
      that.CancerTypes = resp;
    }, function (error) {
      alert('Error in getting medicines');
    });
  }

  initEmptyUser() {
    const CancerType = {
      id:0,
      title: '',
      regimenDetailList: []
    };
    this.CancerType = JSON.parse(JSON.stringify(CancerType));
  }

  okay() {
    // this.CancerType.id = this.routes.snapshot.params["id"];
      this.CancerType.regimenDetailList = this.multi.value;
    this.yes.emit(this.CancerType);
  }

  close(event) {
    this.cancel.emit(event);
  }

  onSelect(event){
    this.id = event;
  }

  getSubCancerTypes(){
    const that = this;
    this.subCancerType1Service.getSubCancerTypes(this.routes.snapshot.params["id"]).subscribe(function (resp) {
      that.subCancerTypes = resp;
    }, function (error) {
      alert('Error in getting SubCancer Types');
    });
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
