/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material'
import { ITrainingRequest } from '../../../../models/training-api.model'
import { TrainingRejectDialogComponent } from '../training-reject-dialog/training-reject-dialog.component'

@Component({
  selector: 'ws-app-training-approval-card',
  templateUrl: './training-approval-card.component.html',
  styleUrls: ['./training-approval-card.component.scss'],
})
export class TrainingApprovalCardComponent implements OnInit {
  @Input() trainingRequest!: ITrainingRequest
  @Output() trainingRejected: EventEmitter<any> = new EventEmitter()

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  onBtnRejectClick() {
    const dialogRef = this.dialog.open(TrainingRejectDialogComponent, {
      data: this.trainingRequest,
      maxWidth: '400px',
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.trainingRejected.emit(this.trainingRequest.offering_id)
      }
    })
  }
}
