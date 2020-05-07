/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs'
import { IResolveResponse, ConfigurationsService } from '@ws-widget/utils'
import { NsDiscussionForum, WsDiscussionForumService } from '@ws-widget/collection'
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class SocialTimelineResolverService implements
  Resolve<Observable<IResolveResponse<{ request: NsDiscussionForum.ITimelineRequest, response: NsDiscussionForum.ITimeline }>>
  | IResolveResponse<{ request: NsDiscussionForum.ITimelineRequest, response: NsDiscussionForum.ITimeline }>> {

  userId = ''
  constructor(
    private discussionSvc: WsDiscussionForumService,
    private configSvc: ConfigurationsService,
  ) {
    if (this.configSvc.userProfile) {
      this.userId = this.configSvc.userProfile.userId || ''
    }
  }

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Observable<IResolveResponse<{ request: NsDiscussionForum.ITimelineRequest, response: NsDiscussionForum.ITimeline }>> {
    if (route.data.postKind) {
      const request: NsDiscussionForum.ITimelineRequest = {
        postKind: route.data.postKind,
        pgNo: 0,
        pgSize: 10,
        sessionId: Date.now(),
        userId: this.userId,
        type: ((route.queryParamMap.get('tab') as NsDiscussionForum.ETimelineType) || route.data.type),
      }
      return this.discussionSvc.fetchTimelineData(request)
        .pipe(
          map(data => ({ data: { request, response: data }, error: null })),
          catchError((error: any) => of({ error, data: null })),
        )
    }
    return of({ error: 'INVALID_POST_KIND', data: null })
  }
}
