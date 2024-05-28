import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {FeatherModule} from "angular-feather";
import { allIcons } from 'angular-feather/icons';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(FeatherModule.pick(allIcons)),]
};
