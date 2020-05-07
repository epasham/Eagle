/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import {
  // ApplicationRef,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router'
// import { interval, concat, timer } from 'rxjs'
import { BtnPageBackService } from '@ws-widget/collection'
import {
  AuthKeycloakService,
  ConfigurationsService,
  TelemetryService,
  ValueService,
} from '@ws-widget/utils'
import { delay } from 'rxjs/operators'
import { MobileAppsService } from '../../services/mobile-apps.service'
import { RootService } from './root.service'
// import { SwUpdate } from '@angular/service-worker'
// import { environment } from '../../../environments/environment'
// import { MatDialog } from '@angular/material'
// import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component'

@Component({
  selector: 'ws-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, AfterViewInit {
  @ViewChild('previewContainer', { read: ViewContainerRef, static: true })
  previewContainerViewRef: ViewContainerRef | null = null
  @ViewChild('appUpdateTitle', { static: true })
  appUpdateTitleRef: ElementRef | null = null
  @ViewChild('appUpdateBody', { static: true })
  appUpdateBodyRef: ElementRef | null = null

  isXSmall$ = this.valueSvc.isXSmall$
  routeChangeInProgress = false
  showNavbar = false
  currentUrl!: string

  constructor(
    private router: Router,
    public authSvc: AuthKeycloakService,
    public configSvc: ConfigurationsService,
    private valueSvc: ValueService,
    private telemetrySvc: TelemetryService,
    private mobileAppsSvc: MobileAppsService,
    private rootSvc: RootService,
    private btnBackSvc: BtnPageBackService,
    private changeDetector: ChangeDetectorRef,
  ) {
    this.mobileAppsSvc.init()
  }

  ngOnInit() {
    // Dynamically adding of routes based on environment
    // if (
path
    //   window.location.href.toLowerCase().indexOf('localhost') > -1
    // ) {
    //   const routerConfig = this.router.config
    //   routerConfig.splice(0, 0, {
    //     path: 'authoring',
    //     loadChildren: () =>
    //       import('../../routes/route-authoring-app.module').then(u => u.AuthoringAppModule),
    //     canActivate: [GeneralGuard],
    //   })
    //   this.router.resetConfig(routerConfig)
    // }

    this.btnBackSvc.initialize()
    // Application start telemetry
    if (this.authSvc.isAuthenticated) {
      this.telemetrySvc.start('app', 'view', '')
    }
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.routeChangeInProgress = true
        this.changeDetector.detectChanges()
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.routeChangeInProgress = false
        this.currentUrl = event.url
        this.changeDetector.detectChanges()
      }

      if (event instanceof NavigationEnd) {
        this.telemetrySvc.impression()
      }
    })
    this.rootSvc.showNavbarDisplay$.pipe(delay(500)).subscribe(display => {
      this.showNavbar = display
    })
  }

  ngAfterViewInit() {
    // this.initAppUpdateCheck()
  }

  // initAppUpdateCheck() {
  //   this.logger.log('LOGGING IN ROOT FOR PWA INIT CHECK')
  //   if (environment.production) {
  //     const appIsStable$ = this.appRef.isStable.pipe(
  //       first(isStable => isStable),
  //     )
  //     const everySixHours$ = interval(6 * 60 * 60 * 1000)
  //     const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$)
  //     everySixHoursOnceAppIsStable$.subscribe(() => this.swUpdate.checkForUpdate())
  //     if (this.swUpdate.isEnabled) {
  //       this.swUpdate.available.subscribe(() => {
  //         const dialogRef = this.dialog.open(DialogConfirmComponent, {
  //           data: {
  //             title: (this.appUpdateTitleRef && this.appUpdateTitleRef.nativeElement.value) || '',
  //             body: (this.appUpdateBodyRef && this.appUpdateBodyRef.nativeElement.value) || '',
  //           },
  //         })
  //         dialogRef.afterClosed().subscribe(
  //           result => {
  //             if (result) {
  //               this.swUpdate.activateUpdate().then(() => {
  //                 if ('caches' in window) {
  //                   caches.keys()
  //                     .then(keyList => {
  //                       timer(2000).subscribe(
  //                         _ => window.location.reload(),
  //                       )
  //                       return Promise.all(keyList.map(key => {
  //                         return caches.delete(key)
  //                       }))
  //                     })
  //                 }
  //               })
  //             }
  //           },
  //         )
  //       })
  //     }
  //   }
  // }
}
