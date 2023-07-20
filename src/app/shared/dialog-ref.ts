import {Observable, Subject} from "rxjs";
import {OverlayRef} from "@angular/cdk/overlay";

export class DialogRef {
  private closeOverlaySubject: Subject<any> = new Subject<any>();

  constructor(private overlayRef: OverlayRef) {
  }

  public close(isOverlayActive?: boolean): void {
    this.overlayRef.dispose();
    this.closeOverlaySubject.next(isOverlayActive);
    this.closeOverlaySubject.complete();
  }

  public afterClosed(): Observable<any> {
    return this.closeOverlaySubject.asObservable();
  }
}
