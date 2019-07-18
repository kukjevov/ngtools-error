import {trigger, transition, style, group, animate, query, animateChild} from "@angular/animations";

/**
 * Show hide animation for console
 */
export const showHideTrigger = trigger('showHide', 
[
    transition(':enter', 
    [
        style(
        {
            height: 0,
            opacity: 0
        }),
        group(
        [
            animate('350ms',
                    style(
                    {
                        height: "*"
                    })),
            animate('200ms',
                    style(
                    {
                        opacity: "*"
                    }))
        ])
    ]),
    transition(':leave', 
    [
        group(
        [
            animate('350ms',
                    style(
                    {
                        height: 0
                    })),
            animate('200ms 150ms',
                    style(
                    {
                        opacity: 0
                    }))
        ])
    ])
]);

/**
 * Animations run when changing route
 */
export const routeAnimationTrigger = trigger('routeAnimations',
[
    transition('LoginComponent => *',
    [
        group(
        [
            query('.main-content',
            [
                query(':leave, :enter', 
                [
                    style(
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    })
                ]),
                query(':enter', 
                [
                    style(
                    {
                        opacity: 0.3,
                        zIndex: -10,
                        top: '100%'
                    })
                ]),
                query(':leave', animateChild()),
                group(
                [
                    query(':leave', 
                    [
                        animate('800ms ease-in-out', style(
                        {
                            left: 'calc(-100% + 80px)'
                        }))
                    ]),
                    query(':enter', 
                    [
                        animate('800ms ease-in-out', style(
                        {
                            opacity: 1,
                            paddingLeft: '80px',
                            top: 0
                        }))
                    ])
                ]),
                query(':enter', animateChild())
            ]),
            query('navigation', animateChild())
        ])
    ]),
    transition('none => *, void => *',
    [
        query('navigation', animateChild(), {optional: true})
    ]),
    transition('* => LoginComponent',
    [
        query('.main-content',
        [
            query(':leave', animateChild())
        ]),
        group(
        [
            query('.main-content',
            [
                query(':leave, :enter', 
                [
                    style(
                    {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    })
                ]),
                query(':leave', 
                [
                    style(
                    {
                        paddingLeft: '80px'
                    })
                ]),
                query(':enter', 
                [
                    style(
                    {
                        left: 'calc(-100% + 80px)'
                    })
                ]),
                group(
                [
                    query(':leave', 
                    [
                        animate('800ms ease-in-out', style(
                        {
                            opacity: 0.3,
                            top: '-100%',
                            paddingLeft: 0
                        }))
                    ]),
                    query(':enter', 
                    [
                        animate('800ms ease-in-out', style(
                        {
                            left: '0'
                        }))
                    ])
                ]),
                query(':enter', animateChild())
            ])
        ])
    ]),
    transition('* => *',
    [
        query('.main-content',
        [
            query(':leave, :enter', 
            [
                style(
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    paddingLeft: '80px'
                })
            ]),
            query(':enter', 
            [
                style(
                {
                    opacity: 0.3,
                    top: '100%'
                })
            ]),
            query(':leave', animateChild()),
            group(
            [
                query(':leave', 
                [
                    animate('800ms ease-in-out', style(
                    {
                        opacity: 0.3,
                        top: '-100%'
                    }))
                ]),
                query(':enter', 
                [
                    animate('800ms ease-in-out', style(
                    {
                        opacity: 1,
                        top: 0
                    }))
                ])
            ]),
            query(':enter', animateChild())
        ])
    ])
]);