import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SubcancertypeService} from '../../subcancertype.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';
import {MenuItem} from 'primeng/api';
import {Subcancertype2Service} from '../../subcancertype2.service';
import {RegimenDetailService} from '../../regimen-detail.service';
import {CANCER_TYPES_ENDPOINT, PATIENT_TYPES_ENDPOINT} from '../../global.constants';


@Component({
  selector: 'app-subcancertypes',
  templateUrl: './subcancertypes.component.html',
  styleUrls: ['./subcancertypes.component.css']
})

/* tslint:disable */

export class SubcancertypesComponent implements OnInit {

  public subCancerTypes: any = [];
  @ViewChild('addModal') public addModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;
  public isEditModal = false;
  public isDeleteModal = false;
  public isAddSubCancerTypeModal = false;
  public SubCancerType = {};
  public addSubCancerTypeError = '';
  crumbs: MenuItem[];
  public url: string;
  public SubCancerType2 = {};
  public RegimenDetails = {};
  subCancerTypes1: string = "subCancerTypes1";
  constructor(private subCancerType1Service: SubcancertypeService,
              private subcancertype2Service: Subcancertype2Service,
              private RegimenDetailService: RegimenDetailService,
              private routes: ActivatedRoute,
              private route: Router) {
    this.getSubCancerTypes();
    this.getRegimens();

    this.subcancertype2Service.getSubCancerTypes2(this.routes.snapshot.params["id"]).subscribe( value => {
      this.SubCancerType2 = value;
    });

    if((this.SubCancerType2 != null) &&((Object.keys(this.SubCancerType2).length != 0))){
      this.url = '/subCancerTypes2';
    }
    else {
      this.url = '/regimenDetails';
    }
  }

  ngOnInit(): void {
    this.crumbs = [
      {label:'PatientTypes',url: PATIENT_TYPES_ENDPOINT},
      {label:'CancerTypes', url: CANCER_TYPES_ENDPOINT + this.routes.snapshot.params["id"]},
      {label:'SubCancerTypes',  url: this.route.url}
    ]
  }

  showAddSubCancerType() {
    this.isAddSubCancerTypeModal = true;
  }

  getSubCancerTypes(){
    const that = this;
    this.subCancerType1Service.getSubCancerTypes(this.routes.snapshot.params["id"]).subscribe(function (resp) {
      that.subCancerTypes = resp;
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
    }  else if (event === 'edit') {
      this.editModal.hide();
    } else if (event === 'delete') {
      this.deleteModal.hide();
    }
  }

  onHide(event) {
    if (event === 'add') {
      this.isAddSubCancerTypeModal = false;
    }  else if (event === 'edit') {
      this.isEditModal = false;
    } else if (event === 'delete') {
      this.isDeleteModal = false;
    }
  }

  addSubCancerTypes(event){
    const that = this;
    this.subCancerType1Service.addSubCancerTypes(event).subscribe(function (resp) {
      that.getSubCancerTypes();
      that.addModal.hide();
    }, function (error) {
      alert('Person add error ' + event);
    });
  }

  editSubCancerTypes(data){
    const that = this;
    this.subCancerType1Service.editSubCancerTypes(data).subscribe(function (resp) {
      that.getSubCancerTypes();
      that.editModal.hide();
    }, function (error) {
      alert('Error to update SubCancerType ' + data);
    });
  }

  deleteSubCancerTypes(data){
    const that = this;
    this.subCancerType1Service.deleteSubCancerTypes(data.id).subscribe(function (resp) {
      that.getSubCancerTypes();
      that.editModal.hide();
    }, function (error) {
      alert('Error to delete SubCancerType ' + data);
    });
  }

  getRegimens() {
    const that = this;
    this.RegimenDetailService.getRegimenDetails(this.routes.snapshot.params["id"]).subscribe(function (resp) {
      that.RegimenDetails = resp;
    }, function (error) {
      alert('Error in getting medicines');
    });
  }

}
