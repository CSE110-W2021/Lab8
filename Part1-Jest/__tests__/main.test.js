
const formatVolumeIconPath = require('../assets/scripts/main');

describe('first if branch returns icon 3', () => {
	test('for volume 100', () => {
		expect(formatVolumeIconPath(100)).toBe('./assets/media/icons/volume-level-3.svg');
	});

	test('for volume 67', () => {
        	expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg');
	});
});

describe('second if branch returns icon 2', () => {
	test('for volume 66', () => {
        	expect(formatVolumeIconPath(66)).toBe('./assets/media/icons/volume-level-2.svg');
	});

	test('for volume 34', () => {
                expect(formatVolumeIconPath(34)).toBe('./assets/media/icons/volume-level-2.svg');
	});
});

describe('third if branch returns icon 1', () => {
        test('for volume 33', () => {
                expect(formatVolumeIconPath(33)).toBe('./assets/media/icons/volume-level-1.svg');
        });

        test('for volume 1', () => {
                expect(formatVolumeIconPath(1)).toBe('./assets/media/icons/volume-level-1.svg');
        });
});

test('else branch returns icon 0 for volume 0', () => {
	expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
});



