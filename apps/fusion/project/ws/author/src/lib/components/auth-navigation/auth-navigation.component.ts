/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { AuthNavBarToggleService } from '@ws/author/src/lib/services/auth-nav-bar-toggle.service'
import { NsPage, ConfigurationsService } from '@ws-widget/utils'
import { Component, OnInit } from '@angular/core'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import { LoaderService } from '../../services/loader.service'

@Component({
  selector: 'ws-auth-root-navigation',
  templateUrl: './auth-navigation.component.html',
  styleUrls: ['./auth-navigation.component.scss'],
})
export class AuthNavigationComponent implements OnInit {

  appIcon: SafeUrl | null = null
  search = false
  primaryNavbar: Partial<NsPage.INavBackground> | null = null
  pageNavbar: Partial<NsPage.INavBackground> | null = null
  backData: any = { url: 'back' }
  canShow = true
  constructor(
    private domSanitizer: DomSanitizer,
    private configSvc: ConfigurationsService,
    private loaderSvc: LoaderService,
    private authNavBarSvc: AuthNavBarToggleService,
  ) { }

  ngOnInit() {
    this.authNavBarSvc.toggleNavBar.subscribe(
      data => this.canShow = data,
    )
    if (this.configSvc.instanceConfig) {
      this.appIcon = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.configSvc.instanceConfig.logos.app,
      )
      this.primaryNavbar = this.configSvc.primaryNavBar
      this.pageNavbar = this.configSvc.pageNavBar
    }
    this.loaderSvc.currentState.subscribe(state => {
      if (state) {
        this.backData = { url: 'home' }
      } else {
        this.backData = { url: 'back' }
      }
    })
  }

}
