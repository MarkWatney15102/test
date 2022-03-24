function Intruduction () {
    function calculateAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    return (
        <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h2>Ich Stelle mich vor</h2>
                    <p class="lead">Moin, ich bin Eike Wientjes, {calculateAge('01-15-2002')} Jahre alt und komme aus einer kleinen Stadt in Niedersachsen</p>
                    <p class="lead">
                        Ich mache eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der HR4YOU AG. 
                        In meiner Freizeit beschäftige ich mich mit dem Fotografieren und der Programmierung.
                        Desweiteren bin ich seit 2012 bei der Freiwilligen Feuerwehr tätig.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Intruduction;