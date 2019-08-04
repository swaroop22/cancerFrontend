import {Component, EventEmitter, OnChanges, Output} from '@angular/core';



@Component({
  selector: 'app-viewregimens',
  templateUrl: './viewregimens.component.html',
  styleUrls: ['./viewregimens.component.scss']
})
export class ViewregimensComponent {

  @Output() yes = new EventEmitter();
  @Output() cancel = new EventEmitter();


  okay(event) {
    this.yes.emit(event);
  }

  close(event){
    this.cancel.emit(event);
  }

}
