import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  private _activeModal: Subject<any> = new Subject<any>();
  activeModal: Observable<any> = this._activeModal.asObservable();

  constructor() { }

  open(component: any) {
    this._activeModal.next(component);
  }

}
