/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatSnackBarModule,
  MatChipsModule,
  MatButtonModule,
} from '@angular/material'

import {
  BtnContentDownloadModule,
  BtnContentFeedbackModule,
  BtnContentLikeModule,
  BtnContentShareModule,
  BtnGoalsModule,
  BtnPlaylistModule,
  DisplayContentTypeModule,
  UserImageModule,
  UserContentRatingModule,
  BtnContentFeedbackV2Module,
  PlayerBriefModule,
} from '@ws-widget/collection'

import {
  PipeDurationTransformModule,
  PipeLimitToModule,
  PipePartialContentModule,
} from '@ws-widget/utils'

import { WidgetResolverModule } from '@ws-widget/resolver'

import { PdfComponent } from './pdf.component'
import { RouterModule } from '@angular/router'
@NgModule({
  declarations: [PdfComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    MatSnackBarModule,
    BtnContentDownloadModule,
    BtnContentFeedbackModule,
    BtnContentLikeModule,
    BtnContentShareModule,
    BtnGoalsModule,
    BtnPlaylistModule,
    DisplayContentTypeModule,
    UserImageModule,
    PipeDurationTransformModule,
    PipeLimitToModule,
    PipePartialContentModule,
    WidgetResolverModule,
    UserContentRatingModule,
    BtnContentFeedbackV2Module,
    PlayerBriefModule,
  ],
  exports: [
    PdfComponent,
  ],
})
export class PdfModule { }
