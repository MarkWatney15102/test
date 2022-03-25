import axios from 'axios';
import Cookies from 'universal-cookie';

import $ from 'jquery';

export default function LoginFromSubmitHandler() {
    let data = {
        username: $('#username').val(),
        password: $('#password').val()
    };
    axios.post("http://82.165.108.105:43921/auth/login", data).then((response) => {
        if (response.data.auth) {
            const cookies = new Cookies();
            cookies.set('UID', response.data.uid, { path: '/' });
            cookies.set('TOKEN', response.data.token, { path: '/' });
            if ($('#login-success-info').hasClass('hidden')) {
                $('#login-success-info').removeClass('hidden');
            }
        } else {
            if ($('#login-failed-info').hasClass('hidden')) {
                $('#login-failed-info').removeClass('hidden');
            }
        }
    });
}