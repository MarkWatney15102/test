export default function DocumentationItem (props) {

    return <>
        <div class="alert alert-dark">
            { props.message ?? '' }
            <br />
            { props.docuCreatedAt ?? '' }
        </div>
    </>;
}