import LoginForm from './loginForm';
import SuccesslyLogin from '../notification/login/sucess';
import FailedLogin from '../notification/login/failed';

export default function LoginFormContainer() {
    return <>
        <div class="col-sm-12 offset-sm-0 col-md-4 offset-md-4">
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
        <SuccesslyLogin />
        <FailedLogin />
    </>;
}