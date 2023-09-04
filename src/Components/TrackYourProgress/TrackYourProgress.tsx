import { FC } from "react";
import CarouselCustom from "../Carousel/CarouselCustom";
import Img1 from '../../assets/track1.png';
import Img2 from '../../assets/track2.png';
import Img3 from '../../assets/track3.png';
import Img4 from '../../assets/track4.png';
import { Row } from "react-bootstrap";

const TrackYourProgress: FC = () => {
	const data = [
		{
			heading: "Macro Calculator",
			para: "Micronutrient are the nutrients that your body needs in large quantities—including fats, proteins, carbs, water and fibre.",
			link: true,
			img: Img1,
		},
		{
			heading: "BMR Calculator",
			para: "Your basal metabolic rate (BMR) is the number of calories your body needs to sustain itself if you do absolutely nothing all day.",
			link: true,
			img: Img2,
		},
		{
			heading: "1 Rep Max Calculator",
			para: "1 Rep Max (1RM) is the maximum weight that can be lifted in a specific exercise in 1 repetition. This determines your strength level for that exercise.",
			link: true,
			img: Img3,
		},
		{
			heading: "Body Fat % Calculator",
			para: "Body fat percentage is a key indicator of good health. A high body fat % might put you at a greater risk of lifestyle diseases.",
			link: true,
			img: Img4,
		},
	];
	return (
		<Row className='px-lg-5 px-3 py-5 my-5'>
			<h2>Track Your Progress</h2>
			<p>
				Use our free fitness tools and trackers to take your journey to the next
				level
			</p>
			<CarouselCustom data={data} />
		</Row>
	);
};

export default TrackYourProgress;
