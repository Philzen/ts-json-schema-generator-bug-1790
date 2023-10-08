/// <reference lib="dom" />
/// <reference lib="ES2015" />
import type { RegisterOptions } from 'react-hook-form'

interface InterviewParticipantInfo {
  type: 'string' | 'email'
  validation: RegisterOptions
}

type ParticipantInfoKey = string

interface ParticipantInfoObject {
  [key: ParticipantInfoKey]: InterviewParticipantInfo
}

export interface InterviewToolConfig {
  /**
   * ParticipantInfoObject:
   * Add a key for every data itemyou want to capture. The keys
   * will show up in all subsequent data exports, i.e. in the
   * payload of webhooks.
   *
   * @example "firstName": { type: "string" }
   */
  participantInfo: ParticipantInfoObject
}
