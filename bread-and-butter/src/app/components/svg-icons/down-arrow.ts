import { Component, Input, OnInit } from '@angular/core';

import { gsap } from "gsap";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, EaselPlugin, PixiPlugin, TextPlugin);

@Component({
    selector: 'down-arrow',
    template: `<svg class="arrow-svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
  <g clip-path="url(#clip0_37_21106)">
      <path fill-rule="evenodd" clip-rule="evenodd"
          d="M7.02722 13.1657C7.3145 12.8537 7.66169 12.4914 8.05373 12.1103C9.1898 11.0057 10.745 9.70094 12.335 9.03846L12.7196 9.96154C11.3095 10.5491 9.86474 11.7443 8.75081 12.8272C8.1993 13.3634 7.73931 13.8617 7.41747 14.2257C7.25668 14.4076 7.13071 14.5555 7.04541 14.6574C7.00277 14.7083 6.97032 14.7477 6.94878 14.7741L6.92477 14.8036L6.91909 14.8106L6.91785 14.8122L6.52727 15.3004L6.1369 14.8124L6.13545 14.8106L6.12976 14.8036L6.10575 14.7741C6.08422 14.7477 6.05177 14.7083 6.00912 14.6574C5.92383 14.5555 5.79786 14.4076 5.63707 14.2257C5.31523 13.8617 4.85524 13.3634 4.30373 12.8272C3.1898 11.7443 1.74502 10.5491 0.334961 9.96154L0.719576 9.03846C2.30951 9.70094 3.86474 11.0057 5.00081 12.1103C5.39281 12.4914 5.73996 12.8537 6.02722 13.1656V0.5H7.02722V13.1657Z"
          fill="black" stroke="black" />
  </g>
  <defs>
      <clipPath id="clip0_37_21106">
          <rect width="13" height="15" transform="translate(0 0.5)" />
      </clipPath>
  </defs>
</svg>`,
    styleUrls: []
})
export class DownArrow implements OnInit {
    ngOnInit(): void {
        gsap.fromTo('.arrow-svg', { opacity: 1, translateY: 0 }, {
            translateY: 50, opacity: 0, delay:1, duration:2,ease:'power3.inOut', onComplete: () => {
                gsap.fromTo('.arrow-svg', { translateY: -50 ,opacity:0}, { translateY: 0, opacity:1, duration:2,ease:'power3.inOut' })
            }
        })
    }


}