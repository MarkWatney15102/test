import ChangeLogElement from './ChangeLogElement';

export default function ChangeLog ({ changelogs }) {
    let changelogData = [];
    for (let k in changelogs) {
        changelogData.push(changelogs[k]);
    }
    return <>
        <div class="col-sm-12 col-md-6 offset-md-3">
        {
            Object.keys(changelogData).map(
                (key, index) => {
                    return <ChangeLogElement data={ changelogData[key] } />
                }
            )
        }
        </div>
    </>;
}