
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class UsuarioPerfilService extends AbstractService {

    getPerfilUsuario() {
        let options = {
            method: 'GET',
            headers: this.headers
        }
        
        return fetch(AppSettings.BASE_URL + "/usuarios-perfis", options);
    }

}