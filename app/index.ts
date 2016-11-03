import * as services from './Services';
export { MainComponent } from './Composents';
export {routes} from './routes';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapValuesToArray(services)
];




