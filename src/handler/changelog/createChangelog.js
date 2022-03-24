import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

export default function createChangelog () {
    const cookies = new Cookies();
    const userId = cookies.get('UID');
    const token = cookies.get('TOKEN');

    let data = {
        headline: $('#headline').val(),
        description: $('#description').val(),
        oldVersion: $('#oldVersion').val(),
        newVersion: $('#newVersion').val(),
        save: ($('#save').val()) ? true : false,
        userId: userId,
        userToken: token
    };
    axios.post("http://127.0.0.1:43921/changelog/create", data).then((response) => {
        location.reload();
    });
}