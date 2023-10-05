import type { Preview } from '@storybook/react';
import { Theme } from '../../src/app/providers/ThemeProvider';
import StyleDecorator from '../../src/shared/config/storybook/styleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/themeDecorator';
import RouterDecorator from '../../src/shared/config/storybook/routerDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
    ],
};

export default preview;
