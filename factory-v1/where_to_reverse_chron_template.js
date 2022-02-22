<?output "../web/js/where_to_reverse_chron.js"?>

ix = 0;
<?nextrec?>
link = "=$link$=";
if (link != "") {
  pages_by_descending_date[ix] = new Page("=$section$=", "=$item-type$=", "=$date$=", "=$title$=", "=$author$=", "=$link$=", "=$tags$=", "");
}
ix++;
<?loop?>
