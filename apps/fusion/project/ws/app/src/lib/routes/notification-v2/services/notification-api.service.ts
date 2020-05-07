/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import {
  INotificationsQueryParams,
  INotificationData,
  ENotificationType,
} from '../models/notifications.model'

@Injectable()
export class NotificationApiService {
  private readonly API_BASE = '/apis/protected/v8/user/notifications'
  private readonly BADGE_COUNT = '/apis/protected/v8/user/iconBadge/unseenNotificationCount'

  constructor(private http: HttpClient) { }

  getNotifications(
    classification?: string,
    size?: number,
    page?: string,
  ): Observable<INotificationData> {
    const queryParams: INotificationsQueryParams = {}
    if (classification) {
      queryParams.classification = classification
    }

    if (size) {
      queryParams.size = size.toString()
    }

    if (page) {
      queryParams.page = page
    }

    return this.http.get<INotificationData>(`${this.API_BASE}`, { params: queryParams })
  }

  getCount(): Observable<number> {
    return this.http.get<number>(this.BADGE_COUNT)
  }

  updateNotificationSeenStatus(
    notificationId?: string,
    classification?: ENotificationType,
    status: boolean = true,
  ) {
    let notificationUrl = this.API_BASE
    if (notificationId && classification) {
      notificationUrl += `/${notificationId}/${classification}`
      return this.http.patch(notificationUrl, {
        seen: status,
      })
    } return this.http.patch(notificationUrl, {})

  }
}
