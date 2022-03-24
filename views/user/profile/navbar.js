import LoginCheck from '../../../src/service/loginCheck';
import ProfileItem from './profileItem';
import Login from './login';

export default function NavbarUserProfile() {
    if (LoginCheck()) {
        return <>
            <ProfileItem />
        </>;
    }

    return <>
        <Login />
    </>;
}