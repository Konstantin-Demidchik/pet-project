import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";

import "../../src/app/styles/index.scss";
import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouteDecorator,
        StoreDecorator
    ],
};



export default preview;
