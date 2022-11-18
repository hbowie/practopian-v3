<?nextrec?>
<?definegroup 1 “=$worktitle$="?>
<?ifendgroup 1 ?>
<?output "../../author-works/=$holdworktitle$=.md"?>
Work Title: =$holdworktitle$= 

Tags: 

Author: =$holdauthor$=

Work Type: =$holdworktype$= 

Work Minor Title:  =$holdminor$=

Work Date: =$holddate$=

Work Link: =$holdlink$= 

Work ID:  =$holdid$=

Work Rights:  =$holdrights$=

Work Rights Holder:  =$holdholder$=

Publisher:  =$holdpublisher$=

Publisher City:  =$holdcity$=

Work Notes: 

<?endif?>
<?ifnewgroup 1 ?>
<?set holdworktitle = "=$worktitle$=" ?>
<?set holdauthor  = "" ?>
<?set holdworktype   = "" ?>
<?set holdminor   = "" ?>
<?set holddate   = "" ?>
<?set holdlink   = "" ?>
<?set holdid   = "" ?>
<?set holdrights   = "" ?>
<?set holdholder   = "" ?>
<?set holdpublisher   = "" ?>
<?set holdcity   = "" ?>
<?endif?>
<?if "=$author$=" ?>
<?set holdauthor = "=$author$=" ?>
<?endif?>
<?if "=$worktype$=" ?>
<?set holdworktype = "=$worktype$=" ?>
<?endif?>
<?if "=$workminortitle$=" ?>
<?set holdminor = "=$workminortitle$=" ?>
<?endif?>
<?if "=$date$=" ?>
<?set holddate = "=$date$=" ?>
<?endif?>
<?if "=$worklink$=" ?>
<?set holdlink = "=$worklink$=" ?>
<?endif?>
<?if "=$workid$=" ?>
<?set holdid = "=$workid$=" ?>
<?endif?>
<?if "=$workrights$=" ?>
<?set holdrights = "=$workrights$=" ?>
<?endif?>
<?if "=$workrightsholder$=" ?>
<?set holdholder = "=$workrightsholder$=" ?>
<?endif?>
<?if "=$publisher$=" ?>
<?set holdpublisher = "=$publisher$=" ?>
<?endif?>
<?if "=$publishercity$=" ?>
<?set holdcity = "=$publishercity$=" ?>
<?endif?>
<?loop?>
