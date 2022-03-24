import { useEffect, useState } from 'react';

import PermissionCheck from '../../src/service/permissionCheck';
import Loading from '../../views/other/LoadingGif';
import Error403 from '../../views/other/403';

import AdminMainPage from '../../views/user/admin/main';

export default function Admin () {
    const [hasPermission, setHasPermission] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		PermissionCheck('admin').then(hasPermission => {
			setHasPermission(hasPermission);
			setLoaded(true);
		})
	}, []);

    if (loaded) {
        if (hasPermission === false) {
            return <>
                <Error403 />
            </>;
        }
        return <>
            <AdminMainPage />
        </>;
    }

    return <>
        <Loading />
    </>;
}