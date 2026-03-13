import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// añadidos

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

/*
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
*/

bootstrapApplication (
    App,
    // objeto de opciones
    { providers: [
        // provider factories
        provideHttpClient(),
        provideRouter(routes)
        // otros providers
    ]}
).catch(err => console.error(err));
