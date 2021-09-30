import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppSelector } from "../app/hooks"
import Sidebar from "../components/sidebar"
import PostDetail from "../components/postDetail"
import MobileMenu from "../components/mobileMenu"

const Home: NextPage = () => {
	const state = useAppSelector((state) => state.redditPosts)

	return (
		<>
			<MobileMenu />
			<div className="w-full h-full md:flex md:space-x-4">
				<Head>
					<title>Reddit client demo</title>
					<meta name="description" content="Reddit client demo" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Sidebar posts={state.posts} />
				<PostDetail />
			</div>
		</>
	)
}

export default Home
