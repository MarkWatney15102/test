import LoginFromSubmitHandler from '../../src/handler/login/submitHandler';

export default function LoginForm() {
    return <>
        <label>Benutzername</label>
        <input type="text" class="form-control" name="username" id="username" />
        <label>Passwort</label>
        <input type="password" class="form-control" name="password" id="password" />

        <button class="btn btn-block btn-outline-success" onClick={ LoginFromSubmitHandler }>Login</button>
    </>;
}