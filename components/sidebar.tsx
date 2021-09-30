import { RedditPost } from "../features/redditPosts/redditPostsSlice"
import PostListItem from "./postListItem"

interface Props {
	posts: RedditPost[]
}

const Sidebar = ({ posts }: Props) => {
	return (
		<div className="w-[420px] h-screen bg-gray-900 overflow-auto relative">
			<h2 className="w-full text-center text-gray-200 px-4 py-4 text-base">Reddit Posts</h2>
			<div className="flex flex-col mx-4 divide-y-[1px] divide-gray-600">
				{posts.map((post: RedditPost) => <PostListItem key={post.id} id={post.id} title={post.title} author={post.author} date={post.date} comments={post.comments} thumbnail={post.thumbnail} unread_status={post.unread_status} />)}
			</div>
			<div className="w-full bg-gray-900 backdrop-blur bg-opacity-50 sticky bottom-0">
				<button className="text-yellow-700 py-4 text-center block mx-auto w-full">Dismiss All</button>
			</div>
		</div>
	)
}

export default Sidebar