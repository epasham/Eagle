/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'viewer-plugin-audio-native',
  templateUrl: './audio-native.component.html',
  styleUrls: ['./audio-native.component.scss'],
})
export class AudioNativeComponent implements OnInit {
  @Input() artifactUrl: string | null = null
  constructor() { }

  ngOnInit() {
  }

}
