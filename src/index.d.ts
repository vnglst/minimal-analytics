interface InitOptions {
  anonymizeIp: boolean
  colorDepth: boolean
  language: boolean
  characterSet: boolean
  screenSize: boolean
}

export function initialize(
  context: Window,
  trackingId: string,
  options: InitOptions
): void
