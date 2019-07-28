import {CancerTypeService} from '../../cancer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';
import {MenuItem} from 'primeng/api';
import {Component, ViewChild} from '@angular/core';
import {SubcancertypeService} from '../../subcancertype.service';
import {Subcancertype2Service} from '../../subcancertype2.service';
import {API_ENDPOINT} from '../../global.constants';

@Component({
  selector: 'app-cancertype',
  templateUrl: './cancertype.component.html',
  styleUrls: ['./cancertype.component.css']
})
export class CancertypeComponent {

  public CancerTypes: any = [];
  @ViewChild('addModal') public addModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('editModal') public editModal: ModalDirective;

  public isEditModal = false;
  public isDeleteModal = false;
  crumbs: MenuItem[];
  public isAddCancerTypeModal = false;
  public CancerType = {};
  public addCancerTypeError = '';
  public subCancerType = {};
  public subCancerType2 = {};
  public url: string;

  constructor(private cancerTypeService: CancerTypeService,
              private routes: ActivatedRoute,
              private route: Router,
              private subcancertypeService: SubcancertypeService,
              private subcancertypeService2: Subcancertype2Service) {
    this.getCancerTypes();
    this.subcancertypeService.getSubCancerTypes(this.routes.snapshot.params["id"]).subscribe(function (resp) {
      this.subCancerType = resp;
    }, function (error) {
      alert('Error in getting SubCancer Types');
    });
    this.subcancertypeService2.getSubCancerTypes2(this.routes.snapshot.params["id"]).subscribe(function (resp) {
      this.subCancerType2 = resp;
    }, function (error) {
      alert('Error in getting SubCancer Types');
    });
    this.crumbs = [
      {label:'PATIENTTYPES',  url: API_ENDPOINT +'/patients', styleClass: 'ui-breadcrumb'},
     {label:'CANCERTYPES',url: this.route.url}
     ];

    if( (!this.subCancerType == null)  &&((Object.keys(this.subCancerType).length != 0)) ){
      this.url = '/subCancerTypes';
    }
    else if((this.subCancerType2 != null) &&((Object.keys(this.subCancerType2).length != 0))){
      this.url = '/subCancerTypes2';
    }
    else {
      this.url = '/regimenDetails';
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

  showAddCancerType() {
    this.isAddCancerTypeModal = true;
  }

  edit(obj) {
    this.CancerType = JSON.parse(JSON.stringify(obj));
    this.isEditModal = true;
  }

  delete(obj) {
    this.CancerType = JSON.parse(JSON.stringify(obj));
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
      this.isAddCancerTypeModal = false;
    }  else if (event === 'edit') {
      this.isEditModal = false;
    } else if (event === 'delete') {
      this.isDeleteModal = false;
    }
  }

  editCancerTypes(data){
    const that = this;
    this.cancerTypeService.editCancerTypes(data).subscribe(function (resp) {
      that.getCancerTypes();
      that.editModal.hide();
    }, function (error) {
      alert('Error to update cancer types ' + data);
    });
  }

  deleteCancerTypes(data){
    const that = this;
    this.cancerTypeService.deleteCancerTypes(data.id).subscribe(function (resp) {
      that.getCancerTypes();
      that.deleteModal.hide();
    }, function (error) {
      alert('Error to update medicine ' + data);
    });
  }

  addCancerTypes(event) {
    const that = this;
    this.cancerTypeService.addCancerTypes(event).subscribe(function (resp) {
      that.getCancerTypes();
      that.addModal.hide();
    }, function (error) {
      alert('Person add error ' + event);
    });
  }

}
