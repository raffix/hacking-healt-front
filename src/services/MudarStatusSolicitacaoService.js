
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class MudarStatusSolicitacaoService extends AbstractService {

    save(data) {
        let options = {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        }

        return fetch(AppSettings.BASE_URL + "/mudar-status-solicitacao", options);
    }

    update(id, data) {
        let options = {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(data)
        }

        return fetch(AppSettings.BASE_URL + "/mudar-status-solicitacao/"+id, options);
    }

}
