import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientsService} from './patients.service';
import {CancerTypeService} from './cancer-type.service';
import {SubcancertypeService} from './subcancertype.service';
import {RegimenDetailService} from './regimen-detail.service';
import {Subcancertype2Service} from './subcancertype2.service';
import {SubcancerlevelsService} from './subcancerlevels.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PatientsService,
    CancerTypeService,
    SubcancertypeService,
    RegimenDetailService,
    Subcancertype2Service,
    SubcancerlevelsService
  ],
  declarations: []
})
export class ServicesModule {
}
