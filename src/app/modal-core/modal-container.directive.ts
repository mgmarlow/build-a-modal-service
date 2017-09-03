import { ModalService } from './modal.service';
import { ComponentFactoryResolver, Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[appModalContainer]' })
export class ModalContainerDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private componentFactoryResolver: ComponentFactoryResolver,
        private modalService: ModalService
    ) {}
}
