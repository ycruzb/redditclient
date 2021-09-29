import Header from "../components/header"
import Footer from "../components/footer"

interface IProps {
	children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout