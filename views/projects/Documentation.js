import { Modal, Button } from 'react-bootstrap';
import Loading from '../other/LoadingGif';
import DocumentationLoader from './DocumentationLoader';
import DocumentationItem from './DocumentationItem';

let dateFormat = require('dateformat');

function Documentation (props) {
    const [projectDocuData, loaded] = DocumentationLoader(props.data.id);

    if (loaded) {
        return <>
            <Modal show={ props.show } onHide={ props.handleClose } size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{ props.data.full_name }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 class="middle">Projekt Informationen</h4>
                    <hr />
                    Name: { props.data.name }
                    <br />
                    Sprache: { props.data.language }
                    <br />
                    <br />
                    <a href={ props.data.url } class="btn btn-outline-success" target="_blank">
                        Zum Github Projekt
                    </a>
                    <br />
                    <br />
                    <h4 class="middle">Projekt Dokumentation</h4>
                    <hr />
                    {
                        Object.keys(projectDocuData).map(
                            (key, index) => {
                                let docuCreatedAt = dateFormat(projectDocuData[key].timestamp, "dd.mm.yyyy H:M:ss");
                                return <DocumentationItem message={ projectDocuData[key].message } docuCreatedAt={ docuCreatedAt } />;
                            }
                        )
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={props.handleClose}>
                        Schließen
                    </Button>
                </Modal.Footer>
            </Modal>
        </>;
    }

    return <>
        <Loading />
    </>;
}

export default Documentation;