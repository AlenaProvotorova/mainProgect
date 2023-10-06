import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

describe('button', () => {
    test('simple render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
