/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3" */
export interface IContact {
  id: string
  name: string
  email: string
}

export interface IWsEmailContact {
  name?: string | undefined
  email: string | undefined
}

export interface IWsEmailArtifact {
  identifier: string
  title: string
  description: string
  thumbnailUrl: string
  authors: IContact[]
  duration: string
  track: string
  url: string
  downloadUrl?: string
  size?: number
  artifactUrl?: string
}
export interface IWsEmailRequest {
  emailTo: IWsEmailContact[]
  ccTo?: IWsEmailContact[]
  bccTo?: IWsEmailContact[]
  sharedBy: IWsEmailContact[]
  body: { text: string; isHTML: boolean }
  timestamp: number
  appURL: string
  artifacts: IWsEmailArtifact[]
  emailType?: string
}

export interface IWsEmailTextRequest {
  emailTo: IWsEmailContact[]
  ccTo?: IWsEmailContact[]
  bccTo?: IWsEmailContact[]
  sharedBy: IWsEmailContact[]
  body: { text: string }
  timestamp: number
  appURL: string
  subject: string
}

export interface IWsEmailPlaylistGoalShareRequest {
  emailTo: IWsEmailContact[]
  emailType: string
  sharedBy: IWsEmailContact[]
  ccTo: IWsEmailContact[]
  body: { text: string; isHTML: boolean }
  timestamp: number
  appURL: string
  artifact: IWsArtifactDetails[]
}

export interface IWsArtifactDetails {
  identifier: string
  title: string
  description: string
  content: string[]
}

export interface IWsEmailResponse {
  response: string
  invalidIds?: string[]
}
