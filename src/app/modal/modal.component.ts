import { IModal, Modal } from '../modal-core/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends Modal {

  constructor() {
    super();
  }

}
