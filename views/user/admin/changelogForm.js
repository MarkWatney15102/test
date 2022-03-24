import CreateChangelogHandler from '../../../src/handler/changelog/createChangelog';

export default function ChangelogForm () {
    return <>
        <div class="row">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                    <h2>Changelog erstellen</h2>
                        <div class="row">
                            <div class="col-12">
                                <label>Überschrift</label>
                                <input type="text" name="headline" id="headline" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label>Alte Version</label>
                                <input type="text" name="oldVersion" id="oldVersion" class="form-control" />
                            </div>
                            <div class="col-6">
                                <label>Neue Version</label>
                                <input type="text" name="newVersion" id="newVersion" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label>Beschreibung</label>
                                <input type="text" name="description" id="description" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label><input type="checkbox" name="save" id="save" />&nbsp;Speichern</label>
                            </div> 
                            <div class="col-9">
                                <button class="btn btn-block btn-success" onClick={ CreateChangelogHandler }>Speichern</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    </>;
}