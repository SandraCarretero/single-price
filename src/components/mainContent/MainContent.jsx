import Container from '../container/Container';
import Title from '../title/Title';
import Subtitle from '../subtitle/Subtitle';
import Text from '../text/Text';
import Button from '../button/Button';
import List from '../list/List';
import style from './mainContent.module.css';

const MainContent = () => {
	return (
		<main className={style.main}>
			<Container order='first'>
				<Title>Join our community</Title>
				<Subtitle color='green'>
					30-day, hassle-free money back guarantee
				</Subtitle>
				<Text>
					Gain access to our full library of tutorials along with expert code
					reviews. Perfect for any developers who are serious about honing their
					skills.
				</Text>
			</Container>

			<Container order='second'>
				<Subtitle>Monthly Subscription</Subtitle>
				<Text type='price'>
					$29<span className={`${style.span}`}>per month</span>
				</Text>
				<Text color='white'>Full access for less than $1 a day</Text>
				<Button>Sign Up</Button>
			</Container>

			<Container order='third'>
				<Subtitle>Why Us</Subtitle>
				<List>
					<li>Tutorials by industry experts</li>
					<li>Peer & expert code review</li>
					<li>Coding exercises</li>
					<li>Access to our GitHub repos</li>
					<li>Community forum</li>
					<li>Flashcard decks</li>
					<li>New videos every week</li>
				</List>
			</Container>
		</main>
	);
};

export default MainContent;
