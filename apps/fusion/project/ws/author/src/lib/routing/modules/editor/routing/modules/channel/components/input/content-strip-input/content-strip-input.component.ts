/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'ws-auth-content-strip-input',
  templateUrl: './content-strip-input.component.html',
  styleUrls: ['./content-strip-input.component.scss'],
})
export class ContentStripInputComponent implements OnInit {

  @Input() isSubmitPressed = false
  @Input() identifier = ''
  @Input() content!: any[]
  @Output() data = new EventEmitter<{ content: any, isValid: boolean }>()
  constructor() { }

  ngOnInit() {
    this.data.emit({
      content: this.content,
      isValid: true,
    })
  }

  update(data: any) {
    this.content = data
    this.data.emit({
      content: this.content,
      isValid: true,
    })
  }

}
