import { useEffect, useState } from 'react';
import Dokumentation from './Documentation';


function Project (props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <tr>
            <td>{ props.data.name }</td>
            <td>{ props.data.language }</td>
            <td>
                <button type="button" class="btn btn-block btn-outline-primary" onClick={ handleShow }>
                    Zum Projekt
                </button>
            </td>
        </tr>
        <Dokumentation data={ props.data } title={ props.data.name } show={ show } handleClose={ handleClose } />
    </>;
}

export default Project;