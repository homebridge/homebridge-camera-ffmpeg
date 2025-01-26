import { describe, it, expect, vi } from 'vitest';
import type { API } from 'homebridge';
import registerPlatform from './index.js';
import { PLATFORM_NAME, PLUGIN_NAME } from './settings.js';
import { FfmpegPlatform } from './platform.js';

describe('registerPlatform', () => {
    it('should register the platform with homebridge', () => {
        const api = {
            registerPlatform: vi.fn(),
        } as unknown as API;

        registerPlatform(api);

        expect(api.registerPlatform).toHaveBeenCalledWith(PLUGIN_NAME, PLATFORM_NAME, FfmpegPlatform);
    });
});