import {Component, OnDestroy, Inject, ViewChild, AfterViewInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Subscription} from 'rxjs';

import {showHideTrigger, routeAnimationTrigger} from './app.component.animations';
import {IN} from '../components';

/**
 * Application entry component
 */
@Component(
{
    selector: 'app',
    templateUrl: "app.component.html",
    styleUrls: ['app.component.scss'],
    animations:
    [
        showHideTrigger,
        routeAnimationTrigger
    ]
})
export class AppComponent implements AfterViewInit, OnDestroy
{
    //######################### private fields #########################

    /**
     * Subscription for router outlet activation changes
     */
    private _routerOutletActivatedSubscription: Subscription;

    //######################### public properties - template bindings #########################

    /**
     * Indication whether navigation should be visible
     */
    public navigationVisible: boolean = true;

    /**
     * Current navigation state
     */
    public navigationState: string = IN;

    /**
     * Name of state for routed component animation
     */
    public routeComponentState: string = 'none';

    /**
     * Indication whether is console visible
     */
    public consoleVisible: boolean = false;

    //######################### public properties - children #########################

    /**
     * Router outlet that is used for loading routed components
     */
    @ViewChild('outlet', {static: false})
    public routerOutlet: RouterOutlet;

    //######################### constructor #########################
    constructor(@Inject(DOCUMENT) document: HTMLDocument)
    {
        document.body.classList.add("app-page", 'dark');
    }

    //######################### public methods - implementation of AfterViewInit #########################
    
    /**
     * Called when view was initialized
     */
    public ngAfterViewInit()
    {
        this._routerOutletActivatedSubscription = this.routerOutlet.activateEvents.subscribe(() =>
        {
            this.routeComponentState = this.routerOutlet.activatedRouteData['animation'] || (<any>this.routerOutlet.activatedRoute.component).name;
        });
    }

    //######################### public methods - implementation of OnDestroy #########################

    /**
     * Called when component is destroyed
     */
    public ngOnDestroy()
    {
        if(this._routerOutletActivatedSubscription)
        {
            this._routerOutletActivatedSubscription.unsubscribe();
            this._routerOutletActivatedSubscription = null;
        }
    }
}