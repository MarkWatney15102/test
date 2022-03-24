import styles from '../../styles/Development.module.css';

const dateFormat = require('dateformat');

function ChangeLogElement (props) {
    let time = dateFormat(props.data.timestamp, "dd.mm.yyyy H:M:ss");
    return <>
        <div class="alert alert-secondary">
            <h2 className={ styles.middle }># { props.data.headline } #</h2>
            <p className={ styles.description }>
                { props.data.description }
            </p>
            <p><i> { props.data.old_version } <i class="fas fa-arrow-right" className={ styles.black }></i> { props.data.new_version } </i></p>
            <p>{ time }</p>
        </div>
    </>;
}

export default ChangeLogElement;