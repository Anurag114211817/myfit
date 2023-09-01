import { FC, useState } from "react";
import BestTrainingSoftware from "./Components/BestTrainingSoftware/BestTrainingSoftware";
import Hero from "./Components/Hero/Hero";
import NavbarCustom from "./Components/Navbar/NavbarCustom";
import OnlineTraining from "./Components/OnlineTraining/OnlineTraining";
import BusinessGrowth from "./Components/BusinessGrowth/BusinessGrowth";
import Img1 from "./assets/workout.png";
import Img2 from "./assets/clients.png";
import Img3 from "./assets/program.png";
import Img4 from "./assets/package.png";
import Img5 from "./assets/result-tracker.png";
import Img6 from "./assets/trainer-schedule.png";
import Img7 from "./assets/001.png";
import Img8 from "./assets/002.png";
import Img9 from "./assets/003.png";

const App: FC = () => {
	const heading1 = "My Fit Mantra: The Best Training Software for Trainers";
	const heading2 = "The only fitness app you'll ever need";
	const tagLine1 = "MFM has everything to help you achieve your fitness goals";
	const tagLine2 = "MFM has everything to help you achieve your fitness goal";
	const imageSet1 = [Img1, Img2, Img3, Img4, Img5, Img6];
	const imageSet2 = [Img7, Img8, Img9, Img7, Img8, Img9];
	const dataSet1 = [
		{
			head: "Unlimited Workouts/ Nutrition's",
			para: "With a vast collection of workout plans and nutritious meal suggestions, we also provide you with an option to create your own workout and nutrition libraries for your clients.",
		},
		{
			head: "Unlimited Clients",
			para: "Manage and track the progress of an unlimited number of clients, making it easier and more efficient for you to grow your business.",
		},
		{
			head: "Create Programs",
			para: "The Create Programs feature is a cutting-edge tool that allows users to easily create and customize their own programs for specific purposes, it's the perfect tool for businesses, organizations, and individuals who want to increase efficiency and productivity.",
		},
		{
			head: "Sell Packages",
			para: "An innovative tool that enables businesses and organizations to sell pre-packaged products or services directly to their customers.",
		},
		{
			head: "Result Tracking",
			para: "Provides real-time insights into key performance metrics, allowing you to see exactly how your client is progressing and make data-driven decisions to improve their results.",
		},
		{
			head: "Instant Chat",
			para: "Instant Chat provides a seamless and convenient communication experience for both Trainer and client.",
		},
	];
	const dataSet2 = [
		{
			head: "Customized diet & workout plans",
			para: "The Customized Diet & Workout Plans feature is a comprehensive solution for individuals looking to improve their health and fitness, users can create personalized diet and workout plans based on their specific goals, preferences, and lifestyles.",
		},
		{
			head: "FREE tools to track your progress",
			para: "Tools like BMR, macro nutrients calculators would be a great source to track progress for anyone looking to monitor and measure their progress towards their goals.",
		},
		{
			head: "Friendly & strong community",
			para: "An innovative platform that connects individuals with like-minded people and fosters a sense of community, where there are engaging activities, discussions, and events, the Friendly & Strong Community feature encourages members to share their thoughts, ideas, and experiences, and to help build a strong, supportive community.",
		},
		{
			head: "500+ exercise videos made by experts",
			para: "With videos covering a wide range of workouts and fitness styles, from strength training and cardio to yoga and Pilates, there's something for everyone.",
		},
		{
			head: "500+ delicious quantified recipes",
			para: "Whether you're looking to lose weight, build muscle, or simply eat healthier, the 500+ Delicious Quantified Recipes feature provides a variety of options to suit your tastes and preferences.",
		},
		{
			head: "Nutrition facts for 1 million+ food items",
			para: "Users have access to nutrition information for over 1 million food items, covering a wide range of products, dishes, and ingredients.",
		},
	];
	const [active1, setActive1] = useState([
		true,
		false,
		false,
		false,
		false,
		false,
	]);
	const [active2, setActive2] = useState([
		true,
		false,
		false,
		false,
		false,
		false,
	]);
	return (
		<>
			<NavbarCustom />
			<Hero />
			<OnlineTraining />
			<BestTrainingSoftware
				{...{
					heading: heading1,
					tagLine: tagLine1,
					data: dataSet1,
					active: active1,
					setActive: setActive1,
					images: imageSet1,
					h: 120
				}}
			/>
			<BusinessGrowth />
			<BestTrainingSoftware
				{...{
					heading: heading2,
					tagLine: tagLine2,
					data: dataSet2,
					active: active2,
					setActive: setActive2,
					images: imageSet2,
					h: 55
				}}
			/>
		</>
	);
};

export default App;
