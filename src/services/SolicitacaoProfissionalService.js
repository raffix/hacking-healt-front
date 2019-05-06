
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class SolicitacaoProfissionalService extends AbstractService {

    save(data) {
        let options = {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        }
        
        return fetch(AppSettings.BASE_URL + "/solicitacao-profissional", options);
    }

}