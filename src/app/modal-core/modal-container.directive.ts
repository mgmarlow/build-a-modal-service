import { IModal } from './modal';
import { Subscription } from 'rxjs/Subscription';
import { ModalService } from './modal.service';
import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({ selector: '[appModalContainer]' })
export class ModalContainerDirective implements OnInit, OnDestroy {
    component: ComponentRef<IModal>;

    private subscription: Subscription;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private modalService: ModalService
    ) {}

    ngOnInit() {
        this.subscription = this.modalService.activeModal
            .subscribe(modalComponent => {
                const factory = this.componentFactoryResolver.resolveComponentFactory<any>(modalComponent);
                this.component = this.viewContainerRef.createComponent(factory);
                this.component.instance.activate()
                    .subscribe(test => console.log('test'));
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
