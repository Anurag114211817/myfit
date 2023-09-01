import { FC, useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import BrandName from "../../assets/myfit-logo.png";

const NavbarCustom: FC = () => {
	const [scrollDirection, setScrollDirection] = useState("");

	useEffect(() => {
		let lastScrollY = window.pageYOffset;

		const updateScrollDirection = () => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? "down" : "up";
			if (
				direction !== scrollDirection &&
				(scrollY - lastScrollY > 20 || scrollY - lastScrollY < -20)
			) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		};
		window.addEventListener("scroll", updateScrollDirection); // add event listener
		return () => {
			window.removeEventListener("scroll", updateScrollDirection); // clean up
		};
	}, [scrollDirection]);

	return (
		<>
			<Navbar
				className='px-3 py-1 position-fixed w-100 z-3'
				variant='dark'
				style={{
					backgroundColor: "#000a",
					transition: '250ms',
					transform: scrollDirection === "down" ? "translateY(-90px)" : "translateY(0)",
				}}>
				<Container fluid className='p-3 d-flex justify-content-between'>
					<img
						src={BrandName}
						height='50'
						className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>
					<Nav className=''>
						<Nav.Link className='fw-bold' href='#'>
							HOME
						</Nav.Link>
						<Nav.Link className='fw-bold' href='#'>
							ABOUT US
						</Nav.Link>
						<Nav.Link className='fw-bold' href='#'>
							FEATURE
						</Nav.Link>
						<Nav.Link className='fw-bold' href='#'>
							FIND A TRAINER
						</Nav.Link>
						<Nav.Link className='fw-bold' href='#'>
							BLOGS
						</Nav.Link>
						<Nav.Link className='fw-bold' href='#'>
							CONTACT US
						</Nav.Link>
						<Nav.Link className='fw-bold' href='#'>
							CAREER
						</Nav.Link>
					</Nav>
					<div>
						<Button variant='outline-light' className='px-4 py-2 rounded-4	'>
							Login
						</Button>
						<Button
							variant='outline-light'
							className='px-4 py-2 rounded-4 ms-3'>
							Get Start
						</Button>
					</div>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarCustom;
