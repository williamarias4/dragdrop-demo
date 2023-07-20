import {Component, Input} from '@angular/core';
import {Orientation, DragDropType} from './drag-drop.constants';
import {DialogRef} from "../shared/dialog-ref";
import {DialogService} from "../shared/dialog.service";

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent {

  @Input() public type: DragDropType;
  @Input() public addHandle: boolean;
  @Input() public orientation: Orientation;
  @Input() public restrictVerticalDrag: boolean;
  @Input() public restrictHorizontalDrag: boolean;
  @Input() public itemToDisableDrag: any;

  constructor(
    private dialogRef: DialogRef,
  ) {
  }

  public close(): void {
    this.dialogRef.close();
  }

}
