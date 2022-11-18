<?output "../../web/js/search-original.js"?>
let searchOriginal = [
<?nextrec?>
	{
		title: "=$title&p$=",
		date: "=$date&dd MMM yyyy$=",
<?if =$type$= eq "appreciation" ?>
    url: "appreciation/=$title&f$=.html",
<?endif?>
<?if =$type$= eq "blog" ?>
    url: "blog/hbowie/=$title&f$=.html",
<?endif?>
		content: "=$body&p$="
	},
<?loop?>
];
