import { describe, it, expect, vi } from 'vitest';
import { getVersion } from './settings.js';
import { readFileSync } from 'fs';

vi.mock('fs');

describe('getVersion', () => {
    it('should return the version from package.json', () => {
        const mockVersion = '1.0.0';
        const mockPackageJson = JSON.stringify({ version: mockVersion });

        vi.mocked(readFileSync).mockReturnValue(mockPackageJson);

        const version = getVersion();
        expect(version).toBe(mockVersion);
    });

    it('should throw an error if package.json is invalid', () => {
        vi.mocked(readFileSync).mockReturnValue('invalid json');

        expect(() => getVersion()).toThrow(SyntaxError);
    });
});