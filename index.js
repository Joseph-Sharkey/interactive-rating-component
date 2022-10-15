const displayThankYouCard = () => {
	let cardvalue = document.getElementsByClassName("rating-card")[0]
	cardvalue.style.display = "none";

	let radioButtons = document.getElementsByName('radio');
	for (i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			document.getElementsByClassName('info-text')[0].innerHTML = "You selected " + radioButtons[i].value + " out of 5";
		}
	}

	let thankvalue = document.getElementsByClassName("thank-you-card")[0];
	thankvalue.style.display = "block";

};
document.getElementsByClassName("feedbackForm")[0].addEventListener('submit', (event) => {
	event.preventDefault();
	displayThankYouCard();
});
