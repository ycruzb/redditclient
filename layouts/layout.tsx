import { useEffect } from "react"
import { fetchTopPosts } from "../features/redditPosts/redditPostsSlice"
import { useAppDispatch } from "../app/hooks"
interface IProps {
	children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
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
		<>
			{children}
		</>
	)
}

export default Layout