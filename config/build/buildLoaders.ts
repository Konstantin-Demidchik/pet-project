import { type ModuleOptions, type RuleSetRule } from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';


export function buildLoaders (options: BuildOptions): ModuleOptions {
    const bableLoader: RuleSetRule = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract', {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }]
                ]
            }
        }
    };

    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const typescriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return {
        rules: [
            fileLoader,
            svgLoader,
            buildCssLoader(options.isDev),
            bableLoader,
            typescriptLoader

        ]
    }
}
