import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

/**
 * Common module for all other modules
 */
@NgModule(
{
    imports:
    [
        CommonModule
    ],
    exports:
    [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class CommonSharedModule
{
}