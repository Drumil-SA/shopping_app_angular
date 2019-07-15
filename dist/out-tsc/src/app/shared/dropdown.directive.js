import * as tslib_1 from "tslib";
import { Directive, HostBinding, HostListener } from '@angular/core';
let DropdownDirective = class DropdownDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isOpen = false;
    }
    clickout(event) {
        // console.log(this.elementRef.nativeElement);
        if (this.elementRef.nativeElement.contains(event.target) && !this.isOpen) {
            this.elementRef.nativeElement.querySelector(".dropdown-menu").classList.add('show');
            this.isOpen = true;
        }
        else {
            this.elementRef.nativeElement.querySelector(".dropdown-menu").classList.remove('show');
            this.isOpen = false;
        }
    }
};
tslib_1.__decorate([
    HostBinding('class.show')
], DropdownDirective.prototype, "isOpen", void 0);
tslib_1.__decorate([
    HostListener('document:click', ['$event'])
], DropdownDirective.prototype, "clickout", null);
DropdownDirective = tslib_1.__decorate([
    Directive({
        selector: '[appDropdown]'
    })
], DropdownDirective);
export { DropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map