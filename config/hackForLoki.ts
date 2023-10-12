// You can either run this node function before storybook build as part of your npm script,
// or you can call it within webpackFinal async handler before returning config.
// I chose the latter. You can tweak the config further by only running the function and setting
// the custom template if you are doing a production build of Storybook.
// That way, your dev version can remain as normal.

// https://github.com/oblador/loki/issues/471,
// also need to watch for https://github.com/oblador/loki/pull/472

const path = require('path');
const webpack = require('webpack');

async function createStorybookRuntimeForBrowser(): Promise<boolean> {
    return new Promise((resolve, reject) => {
        webpack(
            {
                entry: path.resolve('node_modules/@storybook/preview/dist/runtime.js'),
                output: {
                    filename: 'runtime_browser.js',
                    path: path.resolve('storybook-static/sb-preview'),
                },
            },
            (err, stats) => {
                if (err || stats?.hasErrors()) {
                    reject();
                }
                resolve(true);
            },
        );
    });
}

createStorybookRuntimeForBrowser();
