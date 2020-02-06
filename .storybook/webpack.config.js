const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [SRC_PATH, STORIES_PATH],
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('awesome-typescript-loader'),
                        options: {
                            configFileName: './.storybook/tsconfig.json'
                        }
                    },
                    {
                        loader: require.resolve(
                            'react-docgen-typescript-loader'
                        )
                    }
                ]
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    }
};
