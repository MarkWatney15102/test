export default function FailedLogin () {
    return <>
        <div class="alert alert-danger hidden notification" role="alert" id="login-failed-info">
            Benutzername oder Passwort war falsch
        </div>
    </>;
}