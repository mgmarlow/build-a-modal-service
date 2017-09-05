import { ModalService } from './modal-core/modal.service';
import { ModalContainerDirective } from './modal-core/modal-container.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalContainerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ModalService ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
