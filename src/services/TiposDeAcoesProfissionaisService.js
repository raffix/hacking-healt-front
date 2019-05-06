
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class TiposDeAcoesService extends AbstractService {

    getAll() {
        let options = {
            method: 'GET',
            headers: this.headers
        }
        
        return fetch(AppSettings.BASE_URL + "/tipos-acoes-profissionais", options);
    }

}