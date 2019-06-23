
import {AbstractService} from './AbstractService';
import {AppSettings} from '../app.settings';

export class UsuariosService extends AbstractService {

    getAll() {
        let options = {
            method: 'GET',
            headers: this.headers
        }

        return fetch(AppSettings.BASE_URL + "/usuarios", options);
    }

    getPorPerfilEInstituicao(id_perfil, id_instituicao) {
        let options = {
            method: 'GET',
            headers: this.headers
        }

        return fetch(AppSettings.BASE_URL + "/usuarios?id_perfil="+id_perfil+"&id_instituicao="+id_instituicao, options);
    }

    getPorPerfil(id_perfil) {
        let options = {
            method: 'GET',
            headers: this.headers
        }

        return fetch(AppSettings.BASE_URL + "/usuarios?id_perfil="+id_perfil, options);
    }

}
