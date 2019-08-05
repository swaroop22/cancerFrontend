import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SubcancertypeService} from '../../subcancertype.service';
import {Subcancertype2Service} from '../../subcancertype2.service';

@Component({
  selector: 'app-editregimen',
  templateUrl: './editregimen.component.html',
  styleUrls: ['./editregimen.component.scss']
})
export class EditregimenComponent{
  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() RegimenDetail: any;
  public subCancerTypes = {};
  public subCancerTypes2 = {};
  public subCancerTypes3 = {};
  id: number;
  id2: number;
  id3: number;

  constructor(private subCancerType1Service: SubcancertypeService,
              private subCancerType2Service: Subcancertype2Service) {
    //this.getSubCancerTypes();
  //  this.getSubCancerTypes2();
  }

  okay() {
    // this.RegimenDetail.id = this.id;
    this.RegimenDetail.id2 = this.id2;
    this.RegimenDetail.id3 = this.id3;
    this.yes.emit(this.RegimenDetail);
  }

  close(event) {
    this.cancel.emit(event);
  }

  // getSubCancerTypes(){
  //   const that = this;
  //   this.subCancerType1Service.getAllSubCancerTypes1().subscribe(function (resp) {
  //     that.subCancerTypes = resp;
  //   }, function (error) {
  //     alert('Error in getting SubCancer Types');
  //   });
  // }

  // getSubCancerTypes2(){
  //   const that = this;
  //   this.subCancerType2Service.getAllSubCancerTypes2().subscribe(function (resp) {
  //     that.subCancerTypes2 = resp;
  //   }, function (error) {
  //     alert('Error in getting SubCancer2 Types');
  //   });
  // }

  onSelect(event){
    this.id = event;
  }

  onSelect2(event){
    this.id2 = event;
  }

  onSelect3(event){
    this.id3 = event;
  }

}
