import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
