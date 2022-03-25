import axios from 'axios';
import Cookies from 'universal-cookie';

export default async function checkPermission (permission) {
    const cookies = new Cookies();
    const userId = cookies.get('UID');
    const token = cookies.get('TOKEN');
    
    let access = false;

    let ajaxData = {
        userId: userId,
        permission: permission,
        userToken: token
    };

    await axios.post("http://82.165.108.105:43921/user/permission", ajaxData).then((response) => {
        access = response.data.access;
    });

    return access;
}