import { useAppDispatch, useAppSelector } from "../app/hooks"
import { toggleMenu } from "../features/mobileMenu/mobileMenuSlice"

const MobileMenu = () => {
	const mobileMenuState = useAppSelector((state) => state.mobileMenu)
	const dispatch = useAppDispatch();

	const handleToggleMenu = () => {
		dispatch(toggleMenu());
	}

	return (
		<div className="fixed top-3 right-3 md:hidden cursor-pointer" onClick={() => { handleToggleMenu() }}>
			{!mobileMenuState.open ?
				<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
				: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			}
		</div>
	)
}

export default MobileMenu