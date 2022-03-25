import { useState, useEffect } from 'react';
import Project from './Project';
import LoadingGif from '../other/LoadingGif';
import axios from 'axios';

function Projects () {

    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(
        () => {
            axios.get('http://82.165.108.105:43921/github/repos').then((response) => {
                setData(response.data.repos);
                setLoaded(true);
            });
        },
        []
    );

    if (loaded) {
        let jsonData = [];
        for (let k in data) {
            jsonData.push(data[k]);
        }
    
        return (
            <div class="col-sm-12 col-md-8 offset-md-2">
                <div class="card">
                    <div class="card-body">
                    <h2>Projekte</h2>
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <td>Name</td>
                                <td>Sprache</td>
                                <td>&nbsp;</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(data).map(
                                    (key, index) => {
                                        return <Project key={jsonData[key].id} data={jsonData[key]} />
                                    }
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    
    return <>
        <LoadingGif />
    </>;
}

export default Projects;