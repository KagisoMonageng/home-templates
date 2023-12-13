import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, EaselPlugin, PixiPlugin, TextPlugin);

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.sass']
})
export class PortfoliosComponent implements OnInit {

  texts : number[] =[]
  ngOnInit(): void {
    this.texts.length = 21
  }

}
