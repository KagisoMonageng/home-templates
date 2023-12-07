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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass', '../../../input.css']
})
export class HeaderComponent implements OnInit {

  headerTimeline = gsap.timeline()
  ngOnInit(): void {
    this.headerTimeline.fromTo('.deskNav', { translateY: -100 }, { translateY: 0, duration: 1, ease: 'elastic.out', delay:.5 })
      .to('.deskNav', { width: 570, duration: 2, ease:'elastic.inOut' })
      .fromTo('.deskNav a', { display: 'none', opacity: 0 }, {
        display: 'inline', opacity: 1, duration: 1, onComplete: () => {
          gsap.to('.deskNav', { width: "fit-content",duration:2})
        }
      })
  }



}
