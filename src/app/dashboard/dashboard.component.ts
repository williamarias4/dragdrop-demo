import {Component, OnDestroy, OnInit} from '@angular/core';
import {DragDropConfig, DragDropType} from "../drag-drop/drag-drop.constants";
import {DialogData, DialogService} from "../shared/dialog.service";
import {DragDropComponent} from "../drag-drop/drag-drop.component";
import {DialogRef} from "../shared/dialog-ref";
import {takeWhile} from "rxjs";
import {Dialog} from "@angular/cdk/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public readonly dragDropTypeDescriptions: string[];
  private isComponentActive: boolean = true;

  constructor(private dialogService: DialogService,
  private cdkDialog: Dialog) {
    this.dragDropTypeDescriptions = Object.values(DragDropType);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }

  public openSelectedOption(type: string): void {
    console.log("SS");
    switch (type) {
      case DragDropType.Basic: {
        const basicDragDrop: DragDropConfig = {
          type: DragDropType.Basic,
        }
        const dialogData: DialogData = {
          data: basicDragDrop,
          headerTitle: DragDropType.Basic
        }
        this.openDragDrop(dialogData);
      }
    }
  }

  private openDragDrop(dialogData: DialogData): void {
    const dialogRef: DialogRef = this.dialogService.open(DragDropComponent, dialogData);

    dialogRef.afterClosed().pipe(takeWhile(isActive => this.isComponentActive))
      .subscribe(() => {
      // Subscription runs after the dialog closes
      console.log('Dialog closed!');
    });
  }

}
