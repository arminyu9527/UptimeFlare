// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Armin's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    // { link: 'https://github.com/lyc8503', label: 'GitHub' },
    // { link: 'https://blog.lyc8503.net/', label: 'Blog' },
    // { link: 'mailto:me@lyc8503.net', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'azure',
      // `name` is used at status page and callback message
      name: 'Azure WS',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://ewewewew-g3hzfkhrckhsftb4.canadacentral-01.azurewebsites.net',
      // get target() {
      //   return `https://ewewewew-g3hzfkhcrckhsftb4.canadacentral-01.azurewebsites.net/?_t=${Date.now()}`
      // },
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'This is a tooltip for this monitor',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://ewewewew-g3hzfkhrckhsftb4.canadacentral-01.azurewebsites.net',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      },
      // [OPTIONAL] body to be sent (require POST/PUT/PATCH method)
      // body: 'Hello, world!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      // responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      // responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://`, `globalping://` and `http(s)://` proxies
      // checkProxy: 'worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      // checkProxyFallback: true,
    },
    {
      id: 'alwaysdata',
      name: 'Alwaysdata',
      method: 'GET',
      target: 'https://armin00.alwaysdata.net',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://armin00.alwaysdata.net',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      },
    },
    {
      id: 'botkeep',
      name: 'Botkeep',
      method: 'GET',
      target: 'https://s9nfn5.bot-keep.xyz',
      tooltip: 'This is a tooltip for this monitor',
      statusPageLink: 'https://s9nfn5.bot-keep.xyz',
      expectedCodes: [200,304],
      timeout: 10000,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      },
    }
    // Example TCP Monitor
    // {
    //   id: 'test_tcp_monitor',
    //   name: 'Example TCP Monitor',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'TCP_PING',
    //   // `target` should be `host:port` for tcp monitors
    //   target: '1.2.3.4:22',
    //   tooltip: 'My production server SSH',
    //   statusPageLink: 'https://example.com',
    //   timeout: 5000,
    // },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
    webhook: {
      // [Required] webhook URL (example: Telegram Bot API)
      url: 'https://api.telegram.org/bot__TG_BOT_TOKEN__/sendMessage',
      // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
      method: 'POST',
      // [Optional] headers to be sent
      // headers: {
      //   foo: 'bar',
      // },
      // [Required] Specify how to encode the payload
      // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
      // 'param': append url-encoded payload to URL search parameters
      // 'json': POST json payload as body, set content-type header to 'application/json'
      // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
      payloadType: 'json',
      // [Required] payload to be sent
      // $MSG will be replaced with the human-readable notification message
      payload: {
        chat_id: 1152929464,
        text: '$MSG',
      },
      // [Optional] timeout calling this webhook, in millisecond, default to 5000
      timeout: 10000,
    },
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  // {
  //   // [Optional] Monitor IDs to be affected by this maintenance
  //   monitors: ['foo_monitor', 'bar_monitor'],
  //   // [Optional] default to "Scheduled Maintenance" if not specified
  //   title: 'Test Maintenance',
  //   // Description of the maintenance, will be shown at status page
  //   body: 'This is a test maintenance, server software upgrade',
  //   // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
  //   start: '2020-01-01T00:00:00+08:00',
  //   // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
  //   // if not specified, the maintenance will be considered as on-going
  //   end: '2050-01-01T00:00:00+08:00',
  //   // [Optional] color of the maintenance alert at status page, default to "yellow"
  //   color: 'blue',
  // },
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
