import { useState } from "react"
import { RedditPost, turnActive, dismissPost } from "../features/redditPosts/redditPostsSlice"
import { toggleMenu } from "../features/mobileMenu/mobileMenuSlice"
import { useAppDispatch } from "../app/hooks"

const PostListItem = ({ id, title, author, date, comments, thumbnail, unread_status }: RedditPost) => {
	const dispatch = useAppDispatch();
	const [dismissed, setDismissed] = useState<boolean>(false)

	const handleTurnActive = (id: string) => {
		dispatch(turnActive(id))
		dispatch(toggleMenu());
	}

	const handleDismissPost = (id: string) => {
		setDismissed(true);
		setTimeout(() => {
			dispatch(dismissPost(id))
		}, 200)
	}

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
		<div className={!dismissed ? "w-full px-2 py-2 hover:bg-gray-700 transition duration-200" : "w-full px-2 py-2 hover:bg-gray-700 transition duration-200 -translate-x-40 opacity-0"}>
			<div className="flex space-x-2 items-center mb-2 cursor-pointer" onClick={() => { handleTurnActive(id) }}>
				<div className={unread_status ? "w-2 h-2 bg-blue-600 rounded-full" : "w-2 h-2 bg-transparent"}></div>
				<div className="text-gray-200">{author} <span className="text-gray-400 pl-1 text-sm">{formatDate(date)}</span></div>
			</div>
			<div className="flex space-x-3 items-center mb-3 cursor-pointer" onClick={() => { handleTurnActive(id) }}>
				{thumbnail !== "default" && <img className="w-[70px] h-[70px] object-cover" src={thumbnail} alt={author} />}

				<p className="w-full h-full text-gray-200 text-sm">{title}</p>

				<div className="w-7">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</div>
			</div>
			<div className="flex space-x-3 items-center cursor-auto">
				<button className="flex space-x-2 items-center cursor-pointer" onClick={() => { handleDismissPost(id) }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<p className="text-gray-200 text-sm">Dismiss post</p>
				</button>
				<p className="text-yellow-600 text-sm">{comments} comments</p>
			</div>
		</div>
	)
}

export default PostListItem