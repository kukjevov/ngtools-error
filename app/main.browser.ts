import './dependencies';
import 'zone.js/dist/zone';
import {platformBrowser} from '@angular/platform-browser';

import {BrowserAppModule} from './boot/browser-app.module';

// enableProdMode();

if (module['hot'])
{
    module['hot'].accept();
}

// Enable Hot Module Reloading if available
if (module['hot'])
{
    module['hot'].dispose(() =>
    {
        platform.destroy();

        if(!document.querySelector('app'))
        {
            document.body.append(document.createElement('app'));
        }

        if((<any>window).___hmrDataGetters)
        {
            let getters = (<any>window).___hmrDataGetters;
            let data = (<any>window).___hmrData = {};
        
            Object.keys(getters).forEach((hmrKey: string) =>
            {
                data[hmrKey] = getters[hmrKey]();
            });
        }
    });
}

var platform = platformBrowser();

platform.bootstrapModule(BrowserAppModule, {preserveWhitespaces: true});