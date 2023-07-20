import {Injectable, Injector} from '@angular/core';
import {ComponentType, GlobalPositionStrategy, Overlay, OverlayRef} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {DialogRef} from "./dialog-ref";
import {DIALOG_DATA} from "./dialog-tokens";

export interface DialogData {
  headerTitle: string,
  data?: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {
  }

  public open<T>(component: ComponentType<T>, dialogData?: DialogData): DialogRef {
    // Defining the position of the overlay
    const position: GlobalPositionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // Create and customize overlay
    const overlayRef: OverlayRef = this.overlay.create({
      positionStrategy: position,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel'
    });

    const dialogRef: DialogRef = new DialogRef(overlayRef);

    // Create injector to be able to reference the DialogRef from within the component
    const injector: Injector = Injector.create({
      parent: this.injector,
      providers: [
        {provide: DialogRef, useValue: dialogRef},
        {provide: DIALOG_DATA, useValue: dialogData?.data}
      ]
    });

    // Attach a portal with the component to Overlay
    const portal: ComponentPortal<T> = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return dialogRef;
  }
}
