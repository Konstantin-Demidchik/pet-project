import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('cls1')).toBe('cls1');
    });

    test('test with additional class', () => {
        expect(classNames('cls1', {}, ['cls2', 'cls3'])).toBe('cls1 cls2 cls3');
    });

    test('test with empty additional class', () => {
        expect(classNames('cls1', {}, [])).toBe('cls1');
    });

    test('test with mods', () => {
        expect(classNames('cls1', { hovered: true, selectable: false, red: true }, ['cls2', 'cls3'])).toBe('cls1 cls2 cls3 hovered red');
    });

    test('test with uknown mods', () => {
        const expected = 'cls1 cls2 cls3 hovered red';
        expect(classNames('cls1', { hovered: true, selectable: undefined, red: true }, ['cls2', 'cls3'])).toBe(expected);
    });
});
