import { WebPlugin } from '@capacitor/core';

import type { PusherBeamsPlugin, TokenProviderHeader } from './definitions';

export class PusherBeamsWeb extends WebPlugin implements PusherBeamsPlugin {
  private nativeOnly = "Method not implemented for web browser.";
  constructor() {
    super({
      name: 'PusherBeams',
      platforms: ['web'],
    });
  }

  async start(options: { instanceId: string; }): Promise<{success: boolean}> {
    console.log(this.nativeOnly, options);
    return { success: true };
  }

  async getDeviceId(options: { instanceId: string; }): Promise<{deviceId: string}> {
    console.log(this.nativeOnly, options);
    return {deviceId: 'deviceId'};
  }

  async addDeviceInterest(options: { interest: string; }): Promise<{ message: string; }> {
    console.log(options);
    throw new Error(this.nativeOnly);
  }

  async removeDeviceInterest(options: { interest: string }): Promise<{ success: boolean }> {
    console.log(this.nativeOnly, options);
    return { success : true };
  }

  async setUserID(options: { beamsAuthURL: string; userID: string; headers: TokenProviderHeader; }): Promise<string | { message: string; }> {
    console.log(options);
    return { message: 'success'};
  }

  async getDeviceInterests(): Promise<{ interests: string[] }> {
    console.log(this.nativeOnly);
    return { interests: [] };
  }
  
  async setDeviceInterests(options: { interests: string[] }): Promise<{ interests: string[] }> {
    console.log(this.nativeOnly);
    return { interests: options.interests };
  }

  async clearDeviceInterests(): Promise<{success: boolean}> {
    console.log(this.nativeOnly);
    return { success: true };
  }

  async clearAllState(): Promise<{success: boolean}> {
    console.log(this.nativeOnly);
    return { success: true };
  }

  async stop(): Promise<{success: boolean}> {
    console.log(this.nativeOnly);
    return {success: true};
  }
}
