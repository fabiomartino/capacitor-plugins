import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BackgroundTaskPlugin)
public class BackgroundTaskPlugin: CAPPlugin {
    private let implementation = BackgroundTask()

    @objc public func beforeExit(_ call: CAPPluginCall) {
        implementation.beforeExit(call.callbackId)
        call.resolve()
    }

    @objc public func finish(_ call: CAPPluginCall) {
        guard let callbackId = call.getString("taskId") else {
            call.reject("No taskId was provided.")
            return
        }
        implementation.finish(callbackId)
    }
}
