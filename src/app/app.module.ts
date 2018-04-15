import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FavoriteProvider } from '../pages/shared/monitoringStorage';
import { RefresherProvider } from '../pages/shared/dragToRefresh';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DevotionsPage } from '../pages/devotions/devotions';
import { ExhortationsPage } from '../pages/exhortations/exhortations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from '../pages/shared/restConfig';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DevotionsPage,
    ExhortationsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RestangularModule.forRoot(RestangularConfigFactory),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DevotionsPage,
    ExhortationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoriteProvider,
    RefresherProvider
  ]
})
export class AppModule {}
