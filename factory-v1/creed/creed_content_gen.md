<?output "../../content/creed/practopian-creed.md" ?>
Title: Practopian Creed

Version: 0.91

Status: Current

Changes:

Added abridged version of Creed. Tweaked Principle # 2 to "arrive at a more complete understanding of ourselves and the world around us" rather than "arrive at a more perfect understanding of the truth." Also tweaked Value # 6 to discourage discrimination based on "wealth or social status" in addition to other factors. 

Body:

This document defines a set of aims and beliefs intended to help guide the actions of Practical Utopians everywhere. 

<?nextrec?>
<?definegroup 1 =$type$= ?>
<?ifendgroup 1 ?>
<?endif?>
<?ifnewgroup 1 ?>
<?if =$type$= eq "Mission" ?>
Mission
-------

<?endif?>
<?if =$type$= eq "Principle" ?>
Principles
----------

<?endif?>
<?if =$type$= eq "Value" ?>
Values
------

<?endif?>
<?endif?>
<?if =$type$= eq "Mission" ?>
=$body$=
<?endif?>
<?if =$type$= eq "Principle" ?>
<?if "=$title$=" eq "Principles" ?>
=$body$=
<?else?>
=$seq&r2$=. =$body$=
<?endif?>
<?endif?>
<?if =$type$= eq "Value" ?>
<?if "=$title$=" eq "Values" ?>
=$body$=
<?else?>
=$seq&r2$=. =$title$=: =$body$=
<?endif?>
<?endif?>
<?loop?>
Rights
------

Copyright (c) 2009-2018 by [Herb Bowie][hb] under the terms of the [Creative Commons Attribution-ShareAlike 4.0 International License][cc40].


Reference
---------

This is version 0.91 of the Practopian Creed. Any material changes to the content of this document will result in a change in the version number. 

If you have questions or comments on anything in this document, then please send us your [Feedback][].  

Feel free to reference the following links for additional information. 

* [Practopian.org][1] -- Website for The Practical Utopian, containing the Creed along with additional content 
* [practopian-creed.md][2] -- Latest version of the Creed, as a plain text file 
* [practopian-creed.html][3] -- Latest version of the Creed, as a stand-alone html file 
* [github.com/hbowie/practopians][4] -- GitHub project for the Practopians, containing source and change history for all of the content at Practopian.org 

[1]: https://www.Practopian.org/
[2]: https://www.Practopian.org/creed/practopian-creed.md
[3]: https://www.Practopian.org/creed/practopian-creed.html
[4]: https://github.com/hbowie/practopian2/
[hb]: https://www.herbbowie.com
[cc40]: https://creativecommons.org/licenses/by-sa/4.0/
[feedback]: mailto:feedback@Practopian.org
