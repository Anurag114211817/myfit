import { FC, useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import BrandName from "../../assets/myfit-logo.png";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

const NavbarCustom: FC = () => {
	const [scrollDirection, setScrollDirection] = useState("");
	const [open, setOpen] = useState(false);

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
				className='z-3 px-3 py-1 position-fixed w-100 z-3 d-none d-lg-block'
				variant='dark'
				style={{
					backgroundColor: "#000a",
					transition: "250ms",
					transform:
						scrollDirection === "down" ? "translateY(-90px)" : "translateY(0)",
				}}>
				<Container
					fluid
					className='p-3 d-flex justify-content-between'
					style={{ maxWidth: 1400 }}>
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
						<Button variant='outline-light' className='px-4'>
							Login
						</Button>
						<Button variant='outline-light' className='px-4 ms-3'>
							Get Start
						</Button>
					</div>
				</Container>
			</Navbar>
			<Container
				fluid
				className='d-lg-none position-fixed w-100 d-flex justify-content-center align-items-center'
				style={{
					zIndex: 9999,
					height: "100svh",
					transition: "500ms",
					transform: open ? "translateY(0)" : "translateY(-100svh)",
					backgroundColor: open ? '#000' : '#000a'
				}}>
				<div className='d-flex justify-content-center flex-column text-center gap-5'>
					<img
						src={BrandName}
						height='50'
						className=''
						alt='React Bootstrap logo'
					/>
					<div className='gap-2 d-flex flex-column'>
						<Nav.Link
							className='fw-bold'
							onClick={() => setOpen((prev) => !prev)}>
							HOME
						</Nav.Link>
						<Nav.Link
							className='fw-bold'
							onClick={() => setOpen((prev) => !prev)}>
							ABOUT US
						</Nav.Link>
						<Nav.Link
							className='fw-bold'
							onClick={() => setOpen((prev) => !prev)}>
							FEATURE
						</Nav.Link>
						<Nav.Link
							className='fw-bold'
							onClick={() => setOpen((prev) => !prev)}>
							FIND A TRAINER
						</Nav.Link>
						<Nav.Link
							className='fw-bold'
							onClick={() => setOpen((prev) => !prev)}>
							BLOGS
						</Nav.Link>
						<Nav.Link
							className='fw-bold'
							onClick={() => setOpen((prev) => !prev)}>
							CONTACT US
						</Nav.Link>
						<Nav.Link
							className='fw-bold'
							onClick={() => setOpen((prev) => !prev)}>
							CAREER
						</Nav.Link>
					</div>
					<div>
						<Button variant='outline-light' className='px-4	'>
							Login
						</Button>
						<Button variant='outline-light' className='px-4 ms-3'>
							Get Start
						</Button>
					</div>
				</div>
			</Container>
			<Button
				className='d-lg-none  position-fixed'
				onClick={() => setOpen((prev) => !prev)}
				style={{ backgroundColor: "#45A188", top: 10, left: 10, zIndex: 9999 }}>
				{open ? <VscChromeClose /> : <AiOutlineUnorderedList />}
			</Button>
		</>
	);
};

export default NavbarCustom;
