/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ChannelsRoutingModule } from './channels-routing.module'
import { ChannelsHomeComponent } from './routes/channels-home/channels-home.component'
import { ChannelsResolverComponent } from './routes/channels-resolver/channels-resolver.component'
import { EventsCardComponent } from './routes/events-card/events-card.component'
import { InitiativesCardComponent } from './routes/initiatives-card/initiatives-card.component'
import { LeaderCardComponent } from './routes/leader-card/leader-card.component'
import { BtnPageBackModule, CardChannelModule } from '@ws-widget/collection'

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs'
import { ChannelHubsComponent } from './routes/channel-hubs/channel-hubs.component'

@NgModule({
  declarations: [
    ChannelsHomeComponent,
    ChannelsResolverComponent,
    EventsCardComponent,
    InitiativesCardComponent,
    LeaderCardComponent,
    ChannelHubsComponent,
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    CardChannelModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    BtnPageBackModule,
  ],
})
export class ChannelsModule { }
