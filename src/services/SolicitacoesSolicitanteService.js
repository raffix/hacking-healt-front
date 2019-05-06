
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class SolicitacoesSolicitanteService extends AbstractService {

    getAll() {
        let options = {
            method: 'GET',
            headers: this.headers           
        }
        
        return fetch(AppSettings.BASE_URL + "/solicitacoes-solicitante", options);
    }

}