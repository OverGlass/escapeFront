import {style, animate, transition, state, trigger} from '@angular/core';


export class Animations {
    static page = [
        trigger('routeAnimation', [
            state('in', style({transform:'translate(100vh, 100vh)'})),
            transition('void => *', [
                style({
                    transform:'translate(150vw, 150vh)',
                    zIndex:'100',

                }),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({
                    transform:'translate(-100vw, -100vh)',
                    zIndex:'-100',
                }))
            ])
        ])
    ];
}
