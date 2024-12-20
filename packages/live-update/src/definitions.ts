/// <reference types="@capacitor/cli" />

declare module '@capacitor/cli' {
  export interface PluginsConfig {
    LiveUpdate?: {
      /**
       * The app ID is used to identify the app when using [Capawesome Cloud](https://capawesome.io/cloud).
       *
       * This is **NOT** the same as the app identifier (e.g. `com.example.app`).
       * This is a unique identifier generated by Capawesome Cloud (e.g. `6e351b4f-69a7-415e-a057-4567df7ffe94`).
       *
       * @since 5.0.0
       * @example '6e351b4f-69a7-415e-a057-4567df7ffe94'
       */
      appId?: string;
      /**
       * Whether or not to automatically delete unused bundles.
       *
       * When enabled, the plugin will automatically delete unused bundles after calling `ready()`.
       *
       * @since 5.0.0
       * @default false
       */
      autoDeleteBundles?: boolean;
      /**
       * The default channel of the app.
       *
       * @since 6.3.0
       * @example 'production'
       */
      defaultChannel?: string;
      /**
       * Whether or not the plugin is enabled.
       *
       * @since 5.0.0
       * @default true
       */
      enabled?: boolean;
      /**
       * The timeout in milliseconds for HTTP requests.
       *
       * @since 6.4.0
       * @default 60000
       */
      httpTimeout?: number;
      /**
       * The location of the server to use when using [Capawesome Cloud](https://capawesome.io/cloud).
       *
       * @since 6.2.0
       * @default 'us'
       * @example 'eu'
       * @deprecated This option will be removed in the future.
       */
      location?: 'us' | 'eu';
      /**
       * The public key to verify the integrity of the bundle.
       *
       * The public key must be a PEM-encoded RSA public key.
       *
       * @since 6.1.0
       * @example '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDodf1SD0OOn6hIlDuKBza0Ed0OqtwyVJwiyjmE9BJaZ7y8ZUfcF+SKmd0l2cDPM45XIg2tAFux5n29uoKyHwSt+6tCi5CJA5Z1/1eZruRRqABLonV77KS3HUtvOgqRLDnKSV89dYZkM++NwmzOPgIF422mvc+VukcVOBfc8/AHQIDAQAB-----END PUBLIC KEY-----'
       */
      publicKey?: string;
      /**
       * The timeout in milliseconds to wait for the app to be ready before resetting to the default bundle.
       *
       * @since 5.0.0
       * @default 10000
       */
      readyTimeout?: number;
      /**
       * Whether or not the app should be reset to the default bundle during an update.
       *
       * @since 5.0.0
       * @default true
       */
      resetOnUpdate?: boolean;
    };
  }
}

export interface LiveUpdatePlugin {
  /**
   * Delete a bundle from the app.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  deleteBundle(options: DeleteBundleOptions): Promise<void>;
  /**
   * Download a bundle.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  downloadBundle(options: DownloadBundleOptions): Promise<void>;
  /**
   * Fetch the latest bundle using the [Capawesome Cloud](https://capawesome.io/cloud/).
   *
   * Only available on Android and iOS.
   *
   * @since 6.6.0
   */
  fetchLatestBundle(options?: FetchLatestBundleOptions): Promise<FetchLatestBundleResult>;
  /**
   * Get the active bundle identifier.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   * @deprecated Use `getCurrentBundle()` instead.
   */
  getBundle(): Promise<GetBundleResult>;
  /**
   * Get all identifiers of bundles that have been downloaded.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  getBundles(): Promise<GetBundlesResult>;
  /**
   * Get the channel that is used for the update.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  getChannel(): Promise<GetChannelResult>;
  /**
   * Get the bundle identifier of the current bundle.
   * The current bundle is the bundle that is currently used by the app.
   *
   * Only available on Android and iOS.
   *
   * @since 6.7.0
   */
  getCurrentBundle(): Promise<GetCurrentBundleResult>;
  /**
   * Get the custom identifier of the device.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  getCustomId(): Promise<GetCustomIdResult>;
  /**
   * Get the unique device identifier.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  getDeviceId(): Promise<GetDeviceIdResult>;
  /**
   * Get the bundle identifier of the next bundle.
   * The next bundle is the bundle that will be used after calling `reload()`
   * or restarting the app.
   *
   * Only available on Android and iOS.
   *
   * @since 6.7.0
   */
  getNextBundle(): Promise<GetNextBundleResult>;
  /**
   * Get the version code of the app.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  getVersionCode(): Promise<GetVersionCodeResult>;
  /**
   * Get the version name of the app.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  getVersionName(): Promise<GetVersionNameResult>;
  /**
   * Notify the plugin that the app is ready to use and no rollback is needed.
   *
   * **Attention**: This method should be called as soon as the app is ready to use
   * to prevent the app from being reset to the default bundle.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  ready(): Promise<void>;
  /**
   * Reload the app to apply the new bundle.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  reload(): Promise<void>;
  /**
   * Reset the app to the default bundle.
   *
   * Call `reload()` or restart the app to apply the changes.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  reset(): Promise<void>;
  /**
   * Set the next bundle to use for the app.
   *
   * Call `reload()` or restart the app to apply the changes.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   * @deprecated Use `setNextBundle()` instead.
   */
  setBundle(options: SetBundleOptions): Promise<void>;
  /**
   * Set the channel to use for the update.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  setChannel(options: SetChannelOptions): Promise<void>;
  /**
   * Set the custom identifier of the device.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  setCustomId(options: SetCustomIdOptions): Promise<void>;
  /**
   * Set the next bundle to use for the app.
   *
   * Call `reload()` or restart the app to apply the changes.
   *
   * Only available on Android and iOS.
   *
   * @since 6.7.0
   */
  setNextBundle(options: SetNextBundleOptions): Promise<void>;
  /**
   * Automatically download and set the latest bundle for the app using the [Capawesome Cloud](https://capawesome.io/cloud/).
   *
   * Call `reload()` or restart the app to apply the changes.
   *
   * Only available on Android and iOS.
   *
   * @since 5.0.0
   */
  sync(options?: SyncOptions): Promise<SyncResult>;
}

/**
 * @since 5.0.0
 */
export interface DeleteBundleOptions {
  /**
   * The unique identifier of the bundle to delete.
   *
   * @since 5.0.0
   * @example '1.0.0'
   */
  bundleId: string;
}

export interface DownloadBundleOptions {
  /**
   * The artifact type of the bundle.
   *
   * @since 6.6.0
   * @default 'zip'
   * @example 'manifest'
   */
  artifactType?: 'manifest' | 'zip';
  /**
   * The unique identifier of the bundle.
   *
   * @since 5.0.0
   * @example '1.0.0'
   */
  bundleId: string;
  /**
   * The checksum of the bundle to verify the integrity of the ZIP file.
   *
   * Must be a SHA-256 hash in base64 format.
   *
   * @since 6.1.0
   * @deprecated The server should return a `X-Checksum` header instead.
   */
  checksum?: string;
  /**
   * The URL of the bundle to download.
   *
   * For the `zip` artifact type, the URL must point to a ZIP file.
   * For the `manifest` artifact type, the URL serves as the base URL
   * to download the individual files. For example, if the URL is
   * `https://example.com/download`, the plugin will download the file
   * with the href `index.html` from `https://example.com/download?href=index.html`.
   *
   * To **verify the integrity** of the file, the server must return
   * a `X-Checksum` header with the SHA-256 hash in base64 format.
   *
   * To **verify the signature** of the file, the server must return
   * a `X-Signature` header with the signed SHA-256 hash in base64 format.
   *
   * @since 5.0.0
   * @example 'https://example.com/bundle.zip'
   */
  url: string;
}

/**
 * @since 6.7.0
 */
export interface FetchLatestBundleOptions {
  /**
   * The name of the channel where the latest bundle is fetched from.
   *
   * @since 6.7.0
   */
  channel?: string;
}

/**
 * @since 6.6.0
 */
export interface FetchLatestBundleResult {
  /**
   * The artifact type of the bundle.
   *
   * @since 6.7.0
   */
  artifactType?: 'manifest' | 'zip';
  /**
   * The unique identifier of the latest bundle.
   *
   * If `null`, no bundle is available.
   *
   * @since 6.6.0
   */
  bundleId: string | null;
  /**
   * The URL of the latest bundle to download.
   * Pass this URL to the `downloadBundle(...)` method to download the bundle.
   *
   * @since 6.7.0
   */
  downloadUrl?: string;
}

/**
 * @since 5.0.0
 */
export interface GetBundleResult {
  /**
   * The unique identifier of the active bundle.
   *
   * If `null`, the default bundle is being used.
   *
   * @since 5.0.0
   * @example '1.0.0'
   */
  bundleId: string | null;
}

/**
 * @since 5.0.0
 */
export interface GetBundlesResult {
  /**
   * An array of unique identifiers of all available bundles.
   *
   * @since 5.0.0
   */
  bundleIds: string[];
}

/**
 * @since 5.0.0
 */
export interface GetChannelResult {
  /**
   * The channel name.
   *
   * If `null`, the app is using the default channel.
   *
   * @since 5.0.0
   * @example 'production'
   */
  channel: string | null;
}

/**
 * @since 6.7.0
 */
export interface GetCurrentBundleResult {
  /**
   * The unique identifier of the current bundle.
   *
   * If `null`, the default bundle is being used.
   *
   * @since 6.7.0
   */
  bundleId: string | null;
}

/**
 * @since 5.0.0
 */
export interface GetDeviceIdResult {
  /**
   * The unique identifier of the device.
   *
   * On iOS, [`identifierForVendor`](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor) is used.
   * The value of this property is the same for apps that come from the same vendor running on the same device.
   *
   * @since 5.0.0
   *
   * @example '50d2a548-80b7-4dad-adc7-97c0e79d8a89'
   */
  deviceId: string;
}

/**
 * @since 6.7.0
 */
export interface GetNextBundleResult {
  /**
   * The unique identifier of the next bundle.
   *
   * If `null`, the default bundle is being used.
   *
   * @since 6.7.0
   */
  bundleId: string | null;
}

/**
 * @since 5.0.0
 */
export interface GetVersionCodeResult {
  /**
   * The version code of the app.
   *
   * On **Android**, this is the `versionCode` from the `android/app/build.gradle` file.
   * On **iOS**, this is the `CFBundleVersion` from the `Info.plist` file.
   *
   * @since 5.0.0
   * @example "1"
   */
  versionCode: string;
}

/**
 * @since 5.0.0
 */
export interface GetVersionNameResult {
  /**
   * The version name of the app.
   *
   * On **Android**, this is the `versionName` from the `android/app/build.gradle` file.
   * On **iOS**, this is the `CFBundleShortVersionString` from the `Info.plist` file.
   *
   * @since 5.0.0
   * @example "1.0.0"
   */
  versionName: string;
}

/**
 * @since 5.0.0
 */
export interface GetCustomIdResult {
  /**
   * The custom identifier of the device.
   *
   * If `null`, no custom identifier is set.
   *
   * @since 5.0.0
   * @example '50d2a548-80b7-4dad-adc7-97c0e79d8a89'
   */
  customId: string | null;
}

/**
 * @since 5.0.0
 */
export interface SetBundleOptions {
  /**
   * The unique identifier of the bundle to use.
   *
   * @since 5.0.0
   * @example '1.0.0'
   */
  bundleId: string;
}

/**
 * @since 5.0.0
 */
export interface SetChannelOptions {
  /**
   * The channel name.
   *
   * Set `null` to remove the channel.
   *
   * @since 5.0.0
   */
  channel: string | null;
}

/**
 * @since 5.0.0
 */
export interface SetCustomIdOptions {
  /**
   * The custom identifier of the device.
   *
   * Set `null` to remove the custom identifier.
   *
   * @since 5.0.0
   */
  customId: string | null;
}

/**
 * @since 6.7.0
 */
export interface SetNextBundleOptions {
  /**
   * The unique identifier of the bundle to use.
   *
   * @since 6.7.0
   * @example '1.0.0'
   */
  bundleId: string;
}

/**
 * @since 6.7.0
 */
export interface SyncOptions {
  /**
   * The name of the channel where the latest bundle is fetched from.
   *
   * @since 6.7.0
   */
  channel?: string;
}

/**
 * @since 5.0.0
 */
export interface SyncResult {
  /**
   * The identifier of the next bundle to use.
   *
   * If `null`, the app is up-to-date and no new bundle is available.
   *
   * @since 5.0.0
   */
  nextBundleId: string | null;
}
