import styled from "styled-components";
import { FaMusic } from "react-icons/fa";
import { FC } from "react";

export interface NavProps {
	libraryStatus: boolean
	setLibraryStatus: (setLibraryStatus: boolean) => void
}

const Nav: FC<NavProps> = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<NavContainer>
			<H1 libraryStatus={libraryStatus}>Ms Player</H1>
			<Button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library
				<FaMusic />
			</Button>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const H1 = styled.h1<{ libraryStatus: boolean }>`
	transition: all 0.5s ease;

	@media screen and (max-width: 768px) {
		visibility: ${(props) => (props.libraryStatus ? "hidden" : "visible")};
		opacity: ${(props) => (props.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	padding: 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background: rgb(65, 65, 65);
		color: white;
	}
`;

export default Nav;
