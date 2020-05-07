/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { TestBed } from '@angular/core/testing'

import { UserPreferenceService } from './user-preference.service'

describe('UserPreferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: UserPreferenceService = TestBed.get(UserPreferenceService)
    expect(service).toBeTruthy()
  })
})
