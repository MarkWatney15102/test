import NavbarUserProfile from '../user/profile/navbar';

function Navbar () {
    return <>
        <div class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">Eike Wientjes</a>
        
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/projects">Meine Projekte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/aboutme">Über mich</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/setup">Setup</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/impressum">Impressum</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/development">Entwicklung</a>
                    </li>
                </ul>
            </div>
            <NavbarUserProfile />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fas fa-bars"></span>
            </button>
        </div>
    </>
}

export default Navbar;