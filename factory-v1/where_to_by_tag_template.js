<?output "../web/js/where_to_by_tag.js"?>

ix = 0;
<?nextrec?>
link = "=$link$=";
tag = "=$tag$=";
if (link != "" && tag != "") {
  pages_by_tag[ix] = new Page("=$section$=", "=$item-type$=", "=$date$=", "=$title$=", "=$author$=", "=$link$=", "=$tags$=", "=$tag$=");
}
ix++;
<?loop?>
