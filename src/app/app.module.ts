import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ModalModule, TooltipModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app.routing';
import {AddregimenComponent} from './modals/addregimendetail/addregimen.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditregimenComponent} from './modals/editregimendetail/editregimen.component';
import {ServicesModule} from "./services.module";
import { DeleteregimenComponent } from './modals/deleteregimendetail/deleteregimen.component';
import {HttpModule} from '@angular/http';
import { CKEditorModule } from 'ngx-ckeditor';
import {PatientsComponent} from './components/patients/patients.component';
import {RegimendetailsComponent} from './components/regimendetails/regimendetails.component';
import {CancertypeComponent} from './components/cancertypes/cancertype.component';
import {SubcancertypesComponent} from './components/subcancertypes/subcancertypes.component';
import {BreadcrumbsModule} from "ng6-breadcrumbs";
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {AddpatienttypesComponent} from './modals/addpatienttypes/addpatienttypes.component';
import {DeletepatienttypesComponent} from './modals/deletepatienttypes/deletepatienttypes.component';
import {EditpatienttypesComponent} from './modals/editpatienttypes/editpatienttypes.component';
import {AddcancertypesComponent} from './modals/addcancertypes/addcancertypes.component';
import {EditcancertypesComponent} from './modals/editcancertypes/editcancertypes.component';
import {DeletecancertypesComponent} from './modals/deletecancertypes/deletecancertypes.component';
import {AddsubcancertypesComponent} from './modals/addsubcancertypes/addsubcancertypes.component';
import {DeletesubcancertypesComponent} from './modals/deletesubcancertypes/deletesubcancertypes.component';
import {EditsubcancertypesComponent} from './modals/editsubcancertypes/editsubcancertypes.component';
import {Subcancertypes2Component} from './components/subcancertype2/subcancertypes2.component';

import {MultiSelectModule} from 'primeng/multiselect';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddsubcancerlevelsComponent} from './modals/addsubcancerlevels/addsubcancerlevels.component';
import {ViewregimensComponent} from './modals/ViewRegimens/viewregimens.component';



@NgModule({
  declarations: [
    AppComponent,
    AddregimenComponent,
    EditregimenComponent,
    DeleteregimenComponent,
    PatientsComponent,
    RegimendetailsComponent,
    SubcancertypesComponent,
    CancertypeComponent,
    AddpatienttypesComponent,
    DeletepatienttypesComponent,
    EditpatienttypesComponent,
    AddcancertypesComponent,
    EditcancertypesComponent,
    DeletecancertypesComponent,
    AddsubcancertypesComponent,
    DeletesubcancertypesComponent,
    EditsubcancertypesComponent,
    Subcancertypes2Component,
    AddsubcancerlevelsComponent,
    ViewregimensComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
    CKEditorModule,
    BreadcrumbsModule,
    BreadcrumbModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    HttpModule],
  entryComponents: [
    PatientsComponent,
    CancertypeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
