import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CommonSharedModule} from './commonShared.module';
import {APP_TRANSFER_ID} from '../misc/constants';
import {providers} from './app.config';
import {NavigationComponent} from '../components';
import {DashboardComponent} from '../pages/dashboard.component';

/**
 * Main module shared for both server and browser side
 */
@NgModule(
{
    imports:
    [
        BrowserModule.withServerTransition(
        {
            appId: APP_TRANSFER_ID
        }),
        HttpClientModule,
        CommonSharedModule,
        RouterModule.forRoot(
        [
            {
                component: DashboardComponent,
                path: ''
            }
        ])
    ],
    providers: providers,
    declarations: [AppComponent, NavigationComponent, DashboardComponent],
    exports: [AppComponent]
})
export class AppModule
{
}
