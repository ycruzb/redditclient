const PostListItemPlaceholder = () => {
	return (
		<div className="w-full px-2 py-2 hover:bg-gray-700 animate-pulse">
			<div className="flex space-x-2 items-center mb-2 cursor-pointer">
				<div className="bg-gray-500 w-2/3 h-4"></div>
				<div className="bg-gray-700 w-full h-4"></div>
			</div>
			<div className="flex space-x-3 items-center mb-3 cursor-pointer">
				<div className="bg-gray-500 w-[100px] h-[60px]"></div>

				<div className="w-full">
					<div className="bg-gray-500 w-[100px] h-4 inline-block"></div>
					<div className="bg-transparent w-[10px] h-4 inline-block"></div>
					<div className="bg-gray-500 w-[65px] h-4 inline-block"></div>
				</div>

				<div className="w-7">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</div>
			</div>
			<div className="flex space-x-3 items-center cursor-auto">
				<div className="bg-yellow-700 w-8 h-4"></div>
				<div className="bg-gray-500 w-full h-4"></div>
				<div className="bg-yellow-700 w-full h-4"></div>
			</div>
		</div>
	)
}

export default PostListItemPlaceholder