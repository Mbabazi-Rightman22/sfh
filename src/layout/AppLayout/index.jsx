import React from 'react'
import Sidebar from '../Sidebar'


const AppLayout = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar/>
			<div className="p-7">
				{children}
			</div>
		</div>
	)
}

export default AppLayout
