<?nextrec?>
<?definegroup 1 “=$author$="?>
<?ifendgroup 1 ?>
<?output "../../author-notes/=$holdauthor$=.md"?>
Author: =$holdauthor$=

Tags:

Author Info:  =$holdinfo$=

Author Years: =$holdyears$=

Author Link:  =$holdlink$=

Author Notes:


<?endif?>
<?ifnewgroup 1 ?>
<?set holdauthor = "=$author$=" ?>
<?set holdyears  = "" ?>
<?set holdinfo   = "" ?>
<?set holdlink   = "" ?>
<?endif?>
<?if "=$authoryears$=" ?>
<?set holdyears = "=$authoryears$=" ?>
<?endif?>
<?if "=$authorinfo$=" ?>
<?set holdinfo = "=$authorinfo$=" ?>
<?endif?>
<?if "=$authorlink$=" ?>
<?set holdlink = "=$authorlink$=" ?>
<?endif?>
<?loop?>
