'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const PusherBeams = core.registerPlugin('PusherBeams', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.PusherBeamsWeb()),
});

class PusherBeamsWeb extends core.WebPlugin {
    constructor() {
        super({
            name: 'PusherBeams',
            platforms: ['web'],
        });
        this.nativeOnly = "Method not implemented for web browser.";
    }
    async start(options) {
        console.log(this.nativeOnly, options);
        return { success: true };
    }
    async getDeviceId(options) {
        console.log(this.nativeOnly, options);
        return { deviceId: 'deviceId' };
    }
    async addDeviceInterest(options) {
        console.log(options);
        throw new Error(this.nativeOnly);
    }
    async removeDeviceInterest(options) {
        console.log(this.nativeOnly, options);
        return { success: true };
    }
    async setUserID(options) {
        console.log(options);
        return { message: 'success' };
    }
    async getDeviceInterests() {
        console.log(this.nativeOnly);
        return { interests: [] };
    }
    async setDeviceInterests(options) {
        console.log(this.nativeOnly);
        return { interests: options.interests };
    }
    async clearDeviceInterests() {
        console.log(this.nativeOnly);
        return { success: true };
    }
    async clearAllState() {
        console.log(this.nativeOnly);
        return { success: true };
    }
    async stop() {
        console.log(this.nativeOnly);
        return { success: true };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    PusherBeamsWeb: PusherBeamsWeb
});

exports.PusherBeams = PusherBeams;
//# sourceMappingURL=plugin.cjs.js.map
