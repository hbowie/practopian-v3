<?output "../../content/way/practopian-way.md" ?>
Title: The Practopian Way

Version: 0.92

Status: Current

Changes: Changed "Practopian Creed" to "The Practopian Way."

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

This is version 0.92 of The Practopian Way. Any material changes to the content of this document will result in a change in the version number. 

If you have questions or comments on anything in this document, then please send us your [Feedback][].  

Feel free to reference the following links for additional information. 

* [Practopian.org][1] -- Website for The Practical Utopian, containing the Practopian Way along with additional content 
* [practopian-way.md][2] -- Latest version of The Practopian Way, as a plain text file 
* [practopian-way.html][3] -- Latest version of The Practopian Way, as a stand-alone html file 
* [github.com/hbowie/practopians][4] -- GitHub project for the Practopians, containing source and change history for all of the content at Practopian.org 

[1]: https://www.Practopian.org/
[2]: https://www.Practopian.org/way/practopian-way.md
[3]: https://www.Practopian.org/way/practopian-way.html
[4]: https://github.com/hbowie/practopian2/
[hb]: https://www.herbbowie.com
[cc40]: https://creativecommons.org/licenses/by-sa/4.0/
[feedback]: mailto:feedback@Practopian.org
