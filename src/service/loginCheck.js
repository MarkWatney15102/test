import Cookies from 'universal-cookie';

export default function LoginCheck() {
    const cookies = new Cookies();
    const cookie = cookies.get('UID');
    
    if (cookie) {
        return true;
    }

    return false;
}