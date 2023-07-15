import {Component, Input} from '@angular/core';
import {Orientation, Type} from './drag-drop.constants';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {

  @Input() public type: Type;
  @Input() public addHandle: boolean;
  @Input() public orientation: Orientation;
  @Input() public restrictVerticalDrag: boolean;
  @Input() public restrictHorizontalDrag: boolean;
  @Input() public itemToDisableDrag: any;

  constructor() {
  }

}
