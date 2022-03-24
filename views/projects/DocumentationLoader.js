import { useEffect, useState } from 'react';
import axios from 'axios';

function DocumentationLoader (projectId) {
    const [projectDocuData, setProjectDocuData] = useState({});
    const [isDoculoaded, setDocuLoaded] = useState(false);

    useEffect(
        () => {
            axios.get('http://127.0.0.1:43921/project/docu/' + projectId).then((response) => {
                let projectDocuDate = [];
                for (let k in response.data.data) {
                    projectDocuDate.push(response.data.data[k]);
                }
                setProjectDocuData(projectDocuDate);
                setDocuLoaded(true);
            });
        },
        []
    );

    return [projectDocuData, isDoculoaded];
}

export default DocumentationLoader;