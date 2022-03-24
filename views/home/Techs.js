import { useState, useEffect } from 'react';
import axios from 'axios';

function Techs () {
    const [techs, setTechs] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    useEffect(
        () => {
            axios.get('http://127.0.0.1:43921/api/techs').then((response) => {
                setTechs(response.data.data);
                setLoaded(true);
            });
        },
        []
    );

    if (isLoaded) {
        let techArray = [];
        for (let i in techs) {
            techArray.push(techs[i]);
        }

        function getTechs() {
            return Object.keys(techs).map(
                (key, index) => {
                    let subTechs = (techArray[key].sub_techs) ? techArray[key].sub_techs.split(",") : [];
                    return <>
                        <li>{ techArray[key].techs }</li>
                        {
                            getSubTechs(subTechs)
                        }
                    </>
                }
            );
        }

        function getSubTechs(subTechs) {
            if (subTechs) {
                return <ul>
                    {
                        Object.keys(subTechs).map(
                        (k, i) => {
                            return <li>{subTechs[k]}</li>
                        })
                    }
                </ul>
            }
        }

        return <>
            <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-body">
                        <h2>Technologien</h2>
                        <ul>
                        {
                            getTechs()
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </>;
    }
    return <>
    </>;
}

export default Techs;