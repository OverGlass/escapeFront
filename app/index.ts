import * as services from './Services/index.service';
export { AppComponent } from './Composents/app.component';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    ...mapValuesToArray(services)
];



