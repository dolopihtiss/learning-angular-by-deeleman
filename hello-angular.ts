
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-angular',
    template: '<hl> {{greeting}} </hl>'
})
class HelloAngularComponent {
    greeting: string;

    constructor() {
        this.greeting = 'Hello Angular 2!';
    }
}