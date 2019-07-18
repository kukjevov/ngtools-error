import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

import {OUT} from './navigation.component.types';

/**
 * Component used for displaying navigation
 */
@Component(
{
    selector: 'navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent
{
    //######################### public properties - template bindings #########################

    /**
     * Height of active element
     */
    public activeHeight: number;

    /**
     * Top position of active element
     */
    public activeTop: number;

    /**
     * Indication that active item is displayed
     */
    public activeEnabled: boolean = false;

    //######################### public properties - inputs #########################

    /**
     * Current component state
     */
    @Input()
    public componentState: string = OUT;

    //######################### public methods - host #########################

    //######################### public methods - template binding #########################
    public setActive(target: HTMLElement)
    {
        if(!target)
        {
            return;
        }

        let element = this.getElement(target);

        if(element)
        {
            this.activeHeight = element.offsetHeight;
            this.activeTop = element.offsetTop - 16;
        }
    }

    //######################### private methods #########################

    /**
     * Gets menuitem element
     * @param target Element to be checked
     */
    private getElement(target: HTMLElement): HTMLElement
    {
        if(target.classList.contains('menuitem'))
        {
            return target;
        }

        if(!target.parentElement)
        {
            return null;
        }

        return this.getElement(target.parentElement);
    }
}