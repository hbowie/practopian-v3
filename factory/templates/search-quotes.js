<?output "../../web/js/search-quotes.js"?>
let searchQuotes = [
<?nextrec?>
	{
		title: "=$title$=",
		date: "=$date$=",
    url: "quotes/=$title&f$=.html",
		content: "=$body&p$= =$author$= =$authorinfo$= =$worktitle$= "
	},
<?loop?>
];
