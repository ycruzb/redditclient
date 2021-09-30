import { useAppSelector, useAppDispatch } from "../app/hooks"
import { RedditPost } from "../features/redditPosts/redditPostsSlice"
import { addImage } from "../features/gallery/gallerySlice";
import Link from "next/link"

const PostDetail = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.redditPosts)
	const post: RedditPost | boolean = state.active_post === false ? false : state.active_post as RedditPost
	const stateGallery = useAppSelector((state) => state.gallery)
	const imageInGallery = post ? stateGallery.images.filter((image: string) => image === post.thumbnail).length > 0 : false

	const handleAddImage = (image: string) => {
		dispatch(addImage(image))
	}

	return (
		<div className="w-full h-auto py-4 px-4">
			{post &&
				<>
					<h2 className="text-gray-800 text-xl">{post.author}</h2>
					{post.thumbnail !== "default" && <><div className="pt-6 pb-2">
						<img className="mx-auto block" src={post.thumbnail} alt={post.title} />
					</div>
						<div className="text-center">
							<button title="Add to gallery!" onClick={() => { handleAddImage(post.thumbnail) }}><svg xmlns="http://www.w3.org/2000/svg" className={!imageInGallery ? "opacity-100 transform scale-100 transition duration-200 h-6 w-6" : "opacity-0 scale-125 transform transition duration-200 h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
							</svg></button>
						</div>
					</>}
					<p className={post.thumbnail === "default" ? "pt-8" : "pt-0"}>{post.title}</p>
				</>
			}
			<div className="pt-10">
				<Link href="/gallery">
					<a className="bg-gray-900 text-gray-200 px-4 py-3 rounded-lg">Go to Gallery</a>
				</Link>
			</div>
		</div>
	)
}

export default PostDetail