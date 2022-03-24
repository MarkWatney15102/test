const pjson = require('../../package.json');

function BannerText () {
    return <>
        <div class="col-md-9">
            <h1 class="display-4">Moin, ich bin Eike Wientjes.</h1>
            <br />
            <h6 class="lead desc">
                <i>
                /**
                <br />
                &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;@author <a href="https://github.com/MarkWatney15102" target="_blank">MarkWatney15102</a>
                <br />
                &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;@version {pjson.version}
                <br />
                &nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;@description Software Entwickler
                <br />
                &nbsp;&nbsp;*/
                </i>
            </h6>
        </div>
    </>;
}

export default BannerText;