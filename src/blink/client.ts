import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'indie-games-hub-ir3ae0ac',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_OQg4rgWdvymCibY9CoHlDKJZ9S8K74R7',
  authRequired: false,
  auth: { mode: 'managed' },
})
