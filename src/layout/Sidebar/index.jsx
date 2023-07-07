import React, { useRef, useState } from 'react'

const menus = [
	{
		id: 'Indicator',
		title: 'Indicator',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
		</svg>,
		items: [
			{ id: 'Item1', title: 'Item1' },
			{ id: 'Item2', title: 'Item2' },
			{ id: 'Item3', title: 'Item3' },

		]
	},
	{
		id: 'Sub_indicator',
		title: 'Sub indicator',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
		</svg>,
		items: [
			{ id: 'Item1', title: 'Item1' },
			{ id: 'Item2', title: 'Item2' },
			{ id: 'Item3', title: 'Item3' },

		]
	},
	{
		id: 'Sector',
		title: 'Sector',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
		</svg>,
		items: [
			{ id: 'Item1', title: 'Item1' },
			{ id: 'Item2', title: 'Item2' },
			{ id: 'Item3', title: 'Item3' },

		]
	},
	{
		id: 'Function',
		title: 'Function',
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
		</svg>,
		items: [
			{ id: 'Item1', title: 'Item1' },
			{ id: 'Item2', title: 'Item2' },
			{ id: 'Item3', title: 'Item3' },

		]
	}
]


export const SidebarItem = ({ menu, open, setOpen }) => {
	const [showItem, setshowItem] = useState(false);
	return (
		<>
			<li
				className={`text-gray-300 text-sm flex space-x-2 items-center  cursor-pointer p-2 hover:bg-light-white rounded-md`}

			>
				
				{open && <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />}
				{open && <div className='flex gap-x-2 items-center' onClick={() => {
					setshowItem(prevState => !prevState)
					setOpen(true)
				}}>
					
					{open && menu.title}
					{open && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-3 h-3 ${showItem && 'rotate-180'} duration-100`}>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>}

				</div>}

			</li>
			
			<ul className={`${showItem && 'pl-10 flex flex-col py-2 space-y-2 text-gray-200 text-xs'}`}>
				{showItem && open && menu.items.map(item => <li className='flex space-x-2 items-center' key={item.id}>

					<input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
					<label for="default-checkbox" class="ml-2 text-sm font-xs  text-gray-200">{item.title}</label>

				</li>)}
			</ul>

		</>
	)
}

const Sidebar = () => {

	const [open, setOpen] = useState(true);
	const searchInputRef = useRef(null)
	const [showItem, setshowItem] = useState(false);

	return (
		<div className={`bg-dark-purple h-screen ${open ? 'w-72' : 'w-24'} p-5 pt-8 relative duration-300 flex flex-col space-y-2`}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none" viewBox="0 0 24 24"
				strokeWidth="1.5" stroke="currentColor"
				className={`bg-white rounded-full w-6 h-6 absolute border-dark-purple text-dark-purple -right-3 top-9 cursor-pointer ${!open && 'rotate-180'} duration-1000`}
				onClick={() => setOpen(prevState => !prevState)}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<div className={`flex space-x-1 items-center rounded-md ${open && 'bg-light-white'} p-2`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none" viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className={` text-white float-left cursor-pointer ${open ? 'w-4 h-4' : 'w-6 h-6'}`}
					onClick={() => {
						setOpen(true)
						searchInputRef.current.focus()
					}}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
				{open && <input ref={searchInputRef} type="search" placeholder='Search' className='text-xm bg-transparent w-full text-white focus:outline-none' />}
			</div>
			{!open && <hr />}

			<div className="text-gray-300 text-sm flex space-x-2 items-center  cursor-pointer p-2 hover:bg-light-white rounded-md" onClick={()=> {
				setOpen(true)
				setshowItem(prevState => !prevState)
				}}>
				<span className='cursor-pointer'>Index</span>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-3 h-3 ${showItem && 'rotate-180'} duration-100 cursor-pointer`}>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
			</div>
			{showItem && <ul className='pl-6'>
				{
					menus.map(menu =>
						<SidebarItem key={menu.id} menu={menu} open={open} setOpen={setOpen} />
					)
				}
			</ul>}

		</div>
	)
}

export default Sidebar
