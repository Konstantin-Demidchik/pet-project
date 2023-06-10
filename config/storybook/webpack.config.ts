import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';


export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config?.resolve?.modules?.push(paths.src);
    config?.resolve?.extensions?.push('.ts', '.tsx');

    const rules = config?.module?.rules;
    const fileLoaderRule = rules?.find(rule => rule["test"].test('.svg'));
    fileLoaderRule && (fileLoaderRule["exclude"] = /\.svg$/);
    rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    

    rules?.push(buildCssLoader(true));

    return config;
};
