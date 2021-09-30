import { RedditPost, dismissAll } from "../features/redditPosts/redditPostsSlice"
import { useState } from "react"
import PostListItem from "./postListItem"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import PostListItemPlaceholder from "./postListItemPlaceholder"
interface Props {
	posts: RedditPost[]
}

const Sidebar = ({ posts }: Props) => {
	const [dismissedAll, setDismissedAll] = useState<boolean>(false)
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.redditPosts)

	const handleDismissAll = () => {
		setDismissedAll(true);
		setTimeout(() => {
			dispatch(dismissAll())
		}, 200)
	}

	return (
		<div className="w-[420px] h-screen bg-gray-900 overflow-auto flex flex-col justify-between">
			<h2 className="w-full text-center text-gray-200 px-4 py-4 text-base">Reddit Posts</h2>
			<div className="w-full h-auto">
				<div className={!dismissedAll ? "flex flex-col mx-4 divide-y-[1px] divide-gray-600 transition duration-200" : "flex flex-col mx-4 divide-y-[1px] divide-gray-600 transition duration-200 -translate-x-40 opacity-0"}>
					{state.fetching ? Array.from(Array(10).keys()).map((item: any, index: number) => <PostListItemPlaceholder key={index} />) : posts.map((post: RedditPost) => <PostListItem key={post.id} id={post.id} title={post.title} author={post.author} date={post.date} comments={post.comments} thumbnail={post.thumbnail} unread_status={post.unread_status} />)}
				</div>
			</div>
			<div className="w-full bg-gray-900 backdrop-blur bg-opacity-50 sticky bottom-0">
				<button className="text-yellow-700 py-4 text-center block mx-auto w-full" onClick={() => { handleDismissAll() }}>Dismiss All</button>
			</div>
		</div>
	)
}

export default Sidebar