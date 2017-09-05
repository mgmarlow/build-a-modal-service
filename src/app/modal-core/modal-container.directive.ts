import { Subscription } from 'rxjs/Subscription';
import { ModalService } from './modal.service';
import { ComponentFactoryResolver, Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[appModalContainer]' })
export class ModalContainerDirective implements OnInit, OnDestroy {
    component: any;

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
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
