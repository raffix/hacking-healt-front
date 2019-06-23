
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class ComiteComunitarioRegionalService extends AbstractService {

    getAll() {
        let options = {
            method: 'GET',
            headers: this.headers
        }

        return fetch(AppSettings.BASE_URL + "/comite-comunitario-regional", options);
    }
}
