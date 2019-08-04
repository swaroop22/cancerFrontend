import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';



@Component({
  selector: 'app-viewregimens',
  templateUrl: './viewregimens.component.html',
  styleUrls: ['./viewregimens.component.scss']
})
export class ViewregimensComponent {

  @Input() public regimens: any = [];
  @Output() cancel = new EventEmitter();
  @Output() yes = new EventEmitter();


  okay(event) {
    this.yes.emit(event);
  }

  close(event) {
    this.cancel.emit(event);
  }

}
