import { useAppSelector } from "../app/hooks"
import { RedditPost } from "../features/redditPosts/redditPostsSlice"

const PostDetail = () => {
	const state = useAppSelector((state) => state.redditPosts)
	const post = state.active_post === false ? false : state.active_post as RedditPost

	return (
		<div className="w-full h-auto py-4">
			{post &&
				<>
					<h2 className="text-gray-800 text-xl">{post.author}</h2>
					{post.thumbnail !== "default" && <div className="py-6">
						<img className="mx-auto block" src={post.thumbnail} alt={post.title} />
					</div>}
					<p className={post.thumbnail === "default" ? "pt-4" : "pt-0"}>{post.title}</p>
				</>
			}
		</div>
	)
}

export default PostDetail