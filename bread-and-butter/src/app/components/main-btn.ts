import { Component, Input, OnInit } from "@angular/core";

@Component({
    template: `<a href="#" class="main-btn text-primary" (mouseenter)="show_arrow = true" (mouseleave)="show_arrow = false">{{btnText}} <down-arrow arrId="one"></down-arrow></a>`,
    selector:'main-btn',
    styles:[]
})

export class MainBtn implements OnInit {
    @Input() btnText: string = '';
    show_arrow :boolean = false;
    ngOnInit(): void {   
    }
    
}