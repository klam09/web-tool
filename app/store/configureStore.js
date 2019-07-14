import * as configureStoreDev from './configureStore.dev';
import * as configureStoreProd from './configureStore.prod';

const { configureStore, history } = process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

export { configureStore, history };
