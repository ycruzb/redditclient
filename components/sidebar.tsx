import { RedditPost } from "../features/redditPosts/redditPostsSlice"
import PostListItem from "./postListItem"

interface Props {
	posts: RedditPost[]
}

const Sidebar = ({ posts }: Props) => {
	console.log(posts);

	return (
		<div className="w-[420px] h-screen bg-gray-900 overflow-auto">
			<h2 className="w-full text-center text-gray-200 px-4 py-4 text-base">Reddit Posts</h2>
			<div className="flex flex-col mx-4 divide-y-[1px] divide-gray-600">
				{posts.map((post: RedditPost, index: number) => <PostListItem key={index} title={post.title} author={post.author} date={post.date} comments={post.comments} thumbnail={post.thumbnail} unread_status={post.unread_status} />)}
			</div>
		</div>
	)
}

export default Sidebar