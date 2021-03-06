import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {SubcancertypeService} from '../../subcancertype.service';
import {ActivatedRoute} from '@angular/router';
import {Subcancertype2Service} from '../../subcancertype2.service';

@Component({
  selector: 'app-addregimen',
  templateUrl: './addregimen.component.html',
  styleUrls: ['./addregimen.component.scss']
})
export class AddregimenComponent implements OnChanges {

  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() Error: any;
  id2: number;
  id3: number;
  id4: number;

  public RegimenDetail = {
    dispName: '',
    name: '',
    schedule: '',
    emetogenicPotential: '',
    reference: '',
    dosageModifications: '',
    brandNames: '',
    id2: 0,
    id3: 0,
    id4: 0,
  };

  public subCancerTypes = {};
  public subCancerTypes2 = {};
  public subCancerTypes3 = {};

  constructor(private subCancerType1Service: SubcancertypeService,
              private subCancerType2Service: Subcancertype2Service,
              private routes: ActivatedRoute) {
    // this.getSubCancerTypes();
    // this.getSubCancerTypes2();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.Error.currentValue.login) {
      this.initEmptyUser();
    }
  }

  initEmptyUser() {
    const RegimenDetail = {
      dispName: '',
      name: '',
      schedule: '',
      emetogenicPotential: '',
      reference: '',
      dosageModifications: '',
      brandNames: '',
      id2: 0,
      id3: 0,
      id4: 0,

    };
    this.RegimenDetail = JSON.parse(JSON.stringify(RegimenDetail));
  }

  okay() {
    this.RegimenDetail.id2 = this.routes.snapshot.params["id"];
    this.RegimenDetail.id3 = this.id3;
    this.RegimenDetail.id4 = this.id4;
    this.yes.emit(this.RegimenDetail);
  }

  close(event) {
    this.cancel.emit(event);
  }

  onSelect(event){
    this.id2 = event;
  }

  // getSubCancerTypes(){
  //   const that = this;
  //   this.subCancerType1Service.getAllSubCancerTypes1().subscribe(function (resp) {
  //     that.subCancerTypes = resp;
  //   }, function (error) {
  //     alert('Error in getting SubCancer Types');
  //   });
  // }
  //
  // getSubCancerTypes2(){
  //   const that = this;
  //   this.subCancerType2Service.getAllSubCancerTypes2().subscribe(function (resp) {
  //     that.subCancerTypes2 = resp;
  //   }, function (error) {
  //     alert('Error in getting SubCancer Types');
  //   });
  // }

}
