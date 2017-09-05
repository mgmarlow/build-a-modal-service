import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface IModal {
    activate: Function;
    close: Function;
}

export class Modal implements IModal {
    public active = new BehaviorSubject<boolean>(false);

    activate() {
        this.active.next(true);
        return this.active;
    }

    close() {
        this.active.next(false);
    }
}
