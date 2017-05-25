import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    message: string  = 'podaje haslo: OKON!';
    count: number = 0;
    decrement() {
        this.count--;
    }
    increment() {
        this.count++;
    }
}