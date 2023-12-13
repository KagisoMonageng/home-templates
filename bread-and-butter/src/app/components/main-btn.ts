import { Component, Input, OnInit } from "@angular/core";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, EaselPlugin, PixiPlugin, TextPlugin);

@Component({
    template: `<a href="#" id="scroll-btn" class="main-btn text-primary" (mouseenter)="show_arrow = true" (mouseleave)="show_arrow = false"><p class=" md:inline lg:inline">{{btnText}}</p> <down-arrow arrId="one"></down-arrow></a>`,
    selector:'main-btn',
    styles:[]
})

export class MainBtn implements OnInit {
    @Input() btnText: string = '';
    show_arrow :boolean = false;
    ngOnInit(): void {  
        document.querySelector('#scroll-btn')?.addEventListener('click',()=>{
            gsap.to(window, { duration: 1, scrollTo: "#scroll-target", ease: "power2.inOut" });
        })
    }
}