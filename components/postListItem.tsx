import { RedditPost } from "../features/redditPosts/redditPostsSlice"

const PostListItem = ({ title, author, date, comments, thumbnail, unread_status }: RedditPost) => {
	const formatDate = (timestamp: number) => {
		const now = Math.floor(Date.now() / 1000)
		const diff = now - timestamp
		if (diff < 60) {
			return `${diff} seconds ago`
		} else
			if (diff < 3600) {
				return `${Math.floor(diff / 60)} minutes ago`
			} else {
				return `${Math.floor(diff / 3600)} hours ago`
			}
	}

	return (
		<div className="w-full py-2">
			<div className="flex space-x-2 items-center mb-2">
				<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
				<div className="text-gray-200">{author} <span className="text-gray-400 pl-1 text-sm">{formatDate(date)}</span></div>
			</div>
			<div className="flex space-x-3 items-center mb-3 cursor-pointer">
				{thumbnail !== "default" && <img className="w-[70px] h-[70px] object-cover" src={thumbnail} alt={author} />}

				<p className="w-full h-full text-gray-200 text-sm">{title}</p>

				<div className="w-7">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</div>
			</div>
			<div className="flex space-x-3 items-center cursor-auto">
				<div className="flex space-x-2 items-center cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<p className="text-gray-200 text-sm">Dismiss post</p>
				</div>
				<p className="text-yellow-600 text-sm">{comments} comments</p>
			</div>
		</div>
	)
}

export default PostListItem