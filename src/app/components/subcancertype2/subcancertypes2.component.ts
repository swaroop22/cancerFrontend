import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';
import {MenuItem} from 'primeng/api';
import {Subcancertype2Service} from '../../subcancertype2.service';
import { CANCER_TYPES_ENDPOINT, PATIENT_TYPES_ENDPOINT, SUB_CANCERTYPES_ENDPOINT} from '../../global.constants';
import {SubcancerlevelsService} from '../../subcancerlevels.service';


@Component({
  selector: 'app-subcancertypes2',
  templateUrl: './subcancertypes2.component.html',
  styleUrls: ['./subcancertypes2.component.css']
})
export class Subcancertypes2Component implements OnInit {

  public subCancerTypes: any = [];
  @ViewChild('addModal') public addModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;
  @ViewChild('addModal2') public addModal2: ModalDirective;
  public isEditModal = false;
  public isDeleteModal = false;
  public isAddSubCancerTypeModal = false;
  public isAddSubCancerLevels = false;
  public SubCancerType = {};
  public addSubCancerTypeError = '';
  crumbs: MenuItem[];
  public url: string;
  subCancerTypes2: string ="subCancerTypes2";
  public SubCancerTypeLevels = [];
  public isViewAddressModal = false;

  constructor(private subCancerType1Service: Subcancertype2Service,
              private subCancerTypeLevels: SubcancerlevelsService,
              private routes: ActivatedRoute,
              private route: Router) {
    this.getSubCancerTypes();
    this.getSubCancerLevels();
    this.url = '/regimenDetails';

  }

  ngOnInit(): void {
    this.crumbs = [
      {label:'PATIENTTYPES', url: PATIENT_TYPES_ENDPOINT },
      {label:'CANCERTYPES',  url:  CANCER_TYPES_ENDPOINT+ this.routes.snapshot.params["id"]},
      {label:'SUBCANCERTYPES',  url:  SUB_CANCERTYPES_ENDPOINT + this.routes.snapshot.params["id"]},
      {label:'SUBCANCERTYPES2',   url: this.route.url}
    ];
  }

  showAddSubCancerType() {
    this.isAddSubCancerTypeModal = true;
  }

  showAddSubCancerLevels(){
    this.isAddSubCancerLevels = true;
  }

  getSubCancerTypes(){
    const that = this;
    this.subCancerType1Service.getSubCancerTypes2(this.routes.snapshot.params["id"]).subscribe(function (resp) {
      that.subCancerTypes = resp;
      console.log(resp);
    }, function (error) {
      alert('Error in getting SubCancer Types');
    });
  }

  getSubCancerLevels(){
    const that = this;
    this.subCancerTypeLevels.getAllSubCancerLevels().subscribe(function (resp) {
      that.subCancerTypeLevels = resp;
      console.log(resp);
    }, function (error) {
      alert('Error in getting SubCancer Types');
    });
  }

  edit(obj) {
    this.SubCancerType = JSON.parse(JSON.stringify(obj));
    this.isEditModal = true;
  }

  delete(obj) {
    this.SubCancerType = JSON.parse(JSON.stringify(obj));
    this.isDeleteModal = true;
  }

  onClose(event) {
    if (event === 'add') {
      this.addModal.hide();
    }  else if(event === 'add2'){
      this.addModal2.hide();
    } if (event === 'edit') {
      this.editModal.hide();
    } else if (event === 'delete') {
      this.deleteModal.hide();
    }
  }

  onHide(event) {
    if (event === 'add') {
      this.isAddSubCancerTypeModal = false;
    } else if (event === 'add2') {
      this.isAddSubCancerLevels = false;
    } if (event === 'edit') {
      this.isEditModal = false;
    } else if (event === 'delete') {
      this.isDeleteModal = false;
    }
  }

  addSubCancerTypes(event){
    const that = this;
    this.subCancerType1Service.addSubCancerTypes2(event).subscribe(function (resp) {
      that.addModal2.hide();
    }, function (error) {
      alert('Person add error ' + event);
    });
  }

  addSubCancerLevels(event){
    const that = this;
    this.subCancerTypeLevels.addSubCancerLevels(event).subscribe(function (resp) {
      that.getSubCancerTypes();
      that.addModal.hide();
      that.addModal2.hide();
    }, function (error) {
      alert('Person add error ' + event);
    });
  }

  editSubCancerTypes(data){
    const that = this;
    this.subCancerType1Service.editSubCancerTypes2(data).subscribe(function (resp) {
      that.getSubCancerTypes();
      that.editModal.hide();
    }, function (error) {
      alert('Error to update SubCancerType ' + data);
    });
  }

  deleteSubCancerTypes(data){
    const that = this;
    this.subCancerType1Service.deleteSubCancerTypes2(data.id).subscribe(function (resp) {
      that.getSubCancerTypes();
      that.deleteModal.hide();
    }, function (error) {
      alert('Error to update SubCancerType ' + data);
    });
  }

}
