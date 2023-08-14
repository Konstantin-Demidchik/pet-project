import { type ModuleOptions, type RuleSetRule } from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';


export function buildLoaders (options: BuildOptions): ModuleOptions {
    const bableLoader: RuleSetRule = buildBabelLoader(options);

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
