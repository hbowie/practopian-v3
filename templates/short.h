<?nextrec?>
<?if "=$shortid$=" ?>
<?output "../s/=$shortid$="?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<title>=$title$=</title>
<?if =$type$= eq "appreciation" ?>
<?set pr-path = "appreciation" ?>
<?endif?>
<?if =$type$= eq "blog" ?>
<?set pr-path = "blog%2Fhbowie" ?>
<?endif?>
  <meta http-equiv="refresh" content="0; URL='https://practopian.org/=$pr-path$=/=$title&f$=.html'" />
</head>
<body>
<p>Redirecting to <a href="https://practopian.org/=$pr-path$=/=$title&f$=.html">Practopian.org/=$pr-path$=/=$title&f$=.html</a>...</p>
</body>
</html>
<?endif?>
<?loop?>
