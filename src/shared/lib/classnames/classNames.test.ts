import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someStyles')).toBe('someStyles');
    });

    test('with additional param', () => {
        const expected = 'someStyles addParam';
        expect(classNames(
            'someStyles',
            {},
            ['addParam'],
        ))
            .toBe(expected);
    });

    test('with mode', () => {
        const expected = 'someStyles modeOne addParam';
        expect(classNames(
            'someStyles',
            { modeOne: true, modeSecond: false },
            ['addParam'],
        ))
            .toBe(expected);
    });

    test('with mode undefined', () => {
        const expected = 'someStyles modeOne addParam';
        expect(classNames(
            'someStyles',
            { modeOne: true, modeSecond: undefined },
            ['addParam'],
        ))
            .toBe(expected);
    });
});
