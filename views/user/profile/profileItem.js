import styles from '../../../styles/Profile.module.css';
import { Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import PermissionCheck from '../../../src/service/permissionCheck';

import Logout from '../../../src/handler/logout/logout';

export default function profileItem() {
	const [hasPermission, setHasPermission] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		PermissionCheck('admin').then(hasPermission => {
			setHasPermission(hasPermission);
			setLoaded(true);
		})
	}, []);

	if (loaded) {
		const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
			<a
				href=""
				ref={ref}
				className={ styles.profilePicture }
				onClick={(e) => {
					e.preventDefault();
					onClick(e);
				}}
			>
				{children}
			</a>
		));

		return <>
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
					<i class="fas fa-user"></i>
				</Dropdown.Toggle>
	
				<Dropdown.Menu>
					{
						(hasPermission) ? <Dropdown.Item className={ styles.profileItem } href="/admin">Admin Panel</Dropdown.Item> : ''
					}
					<Dropdown.Item className={ styles.profileItem } onClick={ Logout }>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>;
	}

	return <></>;
}