import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Mgo+DSMBaFt/QHFqVVhkW1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9jTXxQdkVnUX5acH1cRg==;Mgo+DSMBPh8sVXJ0S0d+XE9AcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xTckdgWX9aeHVRR2FUUQ==;ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFhWn9edHxUQmFeWEQ=;NjIzMDk4QDMyMzAyZTMxMmUzMEoxTVpiT2ZCZlRxY2V6N0J1SXczRWFHTjZmNUZmMGhHVVlmK0xWYm4xcnM9;NjIzMDk5QDMyMzAyZTMxMmUzMGdNSmVHUzdaV1ltOUZwM1RDNXJQZW1QaEkxeHgzWGJNOGZSdHlPTUhlT1k9;NRAiBiAaIQQuGjN/V0Z+XU9EaFtFVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdEVnW3xecHBdR2RdWUN2;NjIzMTAxQDMyMzAyZTMxMmUzMEx0ZnFURlZ6SmlkZFZvbTgwRnZWcDI5czQ5TmRHd0R4QVpZV1dwaFNrbDQ9;NjIzMTAyQDMyMzAyZTMxMmUzMGVSaURWYXZiR0hjRjdJVEJlblF0OFhkVGZ0U1dZaFRQbVdNaEhPVGdtMTQ9;Mgo+DSMBMAY9C3t2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkFhWn9edHxUQmJYUUQ=;NjIzMTA0QDMyMzAyZTMxMmUzMGVMTW4zbTVkNmo1Y0NCbWFjZ0lrK0FmRUxvakdoT1BOM2tmVWxUWlc0aTg9;NjIzMTA1QDMyMzAyZTMxMmUzMFRpYlcyVGpmZ3ZBNEdOSEhHc1pOQUxmVzlXVzd4UDdjb2RWSW5yMENDaEE9');
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
