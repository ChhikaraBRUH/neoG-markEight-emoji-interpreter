import React, {
	useState
} from "react";
import "./styles.css";

const emojiDict = {
	"π": "That passive-aggressive smile you pass on. Yeah, you look like this then.",
	"π": "Even Scientists failed to understand what this means?!",
	"π": "This suggestive facial expression is often used to convey flirtation or sexual innuendo.",
	"π₯΅": "Hot temperatures. GenZ use it to represent Physical attractiveness.",
	"π": "The expression you make when you think about what you're doing with your life. Depicts unsurity or confusion.",
	"π": "Usually represents mischief, excitement & playful behaviour.",
	"π€―": "Something shocking. Basically Mind = Blown!",
	"π₯Ί": "Used by people to convey puppy face over the internet. Mostly used in sequence π₯Ίππ",
	"πΆ": "When you're at the loss of words, use this. Most commonly conveys Speechlessness.",
	"π": "This signals a joke, flirtation & playfulness.",
	"π": "When you're in so much love that your eyes turn into heart shaped blobs.",
	"π€©": "This is you when your Tinder date turns out exactly like their photos!",
	"π€£": "This one is simple. ROFL. It means R.O.F.L."
};

var emojiList = Object.keys(emojiDict);

export default function App() {
	const [meaning, setMeaning] = useState(
		"Please type in the emoji or select from below π."
	);

	function onChangeHandler(event) {
		var userInput = event.target.value;
		var meaning = emojiDict[userInput];

		if (userInput in emojiDict) {
			setMeaning(meaning);
		} else if (userInput === "") {
			setMeaning("Please type in the emoji or select from below π");
		} else {
			setMeaning(
				"Failure to recognize this. DM me if you want this to be added to the database."
			);
		}
	}

	function emojiClickHandler(emoji) {
		setMeaning(emojiDict[emoji]);
	}

	return ( < div className = "App" >
		<
		input className = "emojiInput"
		placeholder = "Type in here..."
		onChange = {
			onChangeHandler
		}
		/> <
		div className = "output" > {
			meaning
		} < /div> <
		div className = "emojiDisplay" > {
			emojiList.map((emoji) => {
				return ( < span onClick = {
						() => emojiClickHandler(emoji)
					}
					key = {
						emoji
					}
					style = {
						{
							fontSize: "2rem",
							padding: "0.2rem",
							margin: "0.5rem",
							cursor: "pointer"
						}
					} > {
						emoji
					} <
					/span>
				);
			})
		} < /div> </div > );
}