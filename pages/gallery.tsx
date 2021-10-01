import { useAppSelector } from "../app/hooks"
import Link from "next/link"
import Head from 'next/head'

const Gallery = () => {
	const stateGallery = useAppSelector((state) => state.gallery)

	return (
		<div className="container mx-auto px-6 py-6">
			<Head>
				<title>Gallery | Reddit client demo</title>
				<meta name="description" content="Gallery Reddit client demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h2 className="text-3xl font-semibold">Gallery</h2>
			<div className="py-6">
				<Link href="/">
					<a className="underline py-3 rounded-lg">Back to Home</a>
				</Link>
			</div>
			{stateGallery.images.length > 0 ?
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 space-x-5 space-y-5 content-center">
					{stateGallery.images.map((image: string, index: number) => <div key={index}><img className="w-full object-cover" src={image} alt="thumbnail" /></div>)}
				</div>
				: <p>There are no images yet!</p>}
		</div>
	)
}

export default Gallery