import { useEffect } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { fetchTopPosts } from "../features/redditPosts/redditPostsSlice"
import Sidebar from "../components/sidebar"
import PostDetail from "../components/postDetail"

const Home: NextPage = () => {
	const state = useAppSelector((state) => state.redditPosts)
	const dispatch = useAppDispatch();

	const handleGetPosts = async () => {
		const resultAction = await dispatch(fetchTopPosts())
		if (fetchTopPosts.fulfilled.match(resultAction)) {
			/* const posts = resultAction.payload
			console.log("POSTS: ", posts); */
		} else {
			console.log("Error fetching data!!!");
		}
	}

	useEffect(() => {
		handleGetPosts();
	}, [])

	return (
		<div className="w-full h-full flex space-x-4">
			<Head>
				<title>Reddit client demo</title>
				<meta name="description" content="Reddit client demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Sidebar posts={state.posts} />
			<PostDetail />

		</div>
	)
}

export default Home
