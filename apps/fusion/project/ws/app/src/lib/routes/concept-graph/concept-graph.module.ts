/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ConceptGraphRoutingModule } from './concept-graph-routing.module'
import { ConceptRootComponent } from './routes/concept-root/concept-root.component'
import { ConceptHomeComponent } from './routes/concept-home/concept-home.component'
import { ConceptGraphComponent } from './routes/concept-graph/concept-graph.component'

// material
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import {
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
} from '@angular/material'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { BtnPageBackModule } from '@ws-widget/collection/src/public-api'
import { WidgetResolverModule } from '@ws-widget/resolver'

@NgModule({
  declarations: [ConceptRootComponent, ConceptHomeComponent, ConceptGraphComponent],
  imports: [
    CommonModule,
    ConceptGraphRoutingModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    BtnPageBackModule,
    MatProgressSpinnerModule,
    WidgetResolverModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ],
})
export class ConceptGraphModule { }
