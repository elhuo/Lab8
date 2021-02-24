const main = require('../assets/scripts/main');

describe('formatVolumeIconPath test group', () => {
    test('Level 3 Icon', () => {
        expect(main.formatVolumeIconPath(67))
            .toMatch('./assets/media/icons/volume-level-3.svg');
        expect(main.formatVolumeIconPath(100))
            .toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('Level 2 Icon', () => {
        expect(main.formatVolumeIconPath(34))
            .toMatch('./assets/media/icons/volume-level-2.svg');
        expect(main.formatVolumeIconPath(66))
            .toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('Icon Level 1 Icon', () => {
        expect(main.formatVolumeIconPath(1))
            .toMatch('./assets/media/icons/volume-level-1.svg');
        expect(main.formatVolumeIconPath(33))
            .toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('Level 0 Icon', () => {
        expect(main.formatVolumeIconPath(0))
            .toMatch('./assets/media/icons/volume-level-0.svg');
    });
});