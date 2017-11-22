import bugsnag from "../../.."
bugsnag({
  apiKey: "abc",
  appVersion: "1.2.3",
  autoNotify: true,
  beforeSend: [],
  endpoint: "//notify.bugsnag.com",
  notifyReleaseStages: [],
  releaseStage: "production",
  maxBreadcrumbs: 20,
  autoBreadcrumbs: true,
  eventWindowSize: 60000,
  maxEventsPerWindow: 100,
  maxDuplicateEventsPerWindow: 10,
  consoleBreadcumbsEnabled: undefined,
  interactionBreadcumbsEnabled: undefined,
  navigationBreadcumbsEnabled: undefined
})