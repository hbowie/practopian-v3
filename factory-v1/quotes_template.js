<?output "../web/js/quotes.js"?>
var qfilename = new Array();
var ix = 0;
<?nextrec?>
qfilename[ix] = "=$title&f$=.html";
ix++;
<?loop?>
var max = ix;

var now = new Date();
var seed = now.getTime() % 0xffffffff;

function rand(n) {
  seed = (0x015a4e35 * seed) % 0x7fffffff;
  return (seed >> 16) % n;
}

function setContent(n) {
  var thisURL  = document.URL;
  var blogIx   = thisURL.indexOf("/blog/");
  var tagsIx   = thisURL.indexOf("/tags/");
  var quotesIx = thisURL.indexOf("/quotes/");
  var coreIx   = thisURL.indexOf("/core/");
  var introIx  = thisURL.indexOf("/intro/");
  var linksIx  = thisURL.indexOf("/links/");
  var newsIx   = thisURL.indexOf("/news/");
  var page = qfilename[n];
  if (blogIx > 0) {
    page = "../../quotes/" + page;
  }
  else
  if (tagsIx < 0 && quotesIx < 0 && coreIx < 0 && introIx < 0 && linksIx < 0 && newsIx < 0) {
    page = "quotes/" + page;
  } else {
    page = "../quotes/" + page;
  }
  window.location.replace(page);
}

function randomQuote() {
  rq = rand(max);
  if (rq < 0) {
    rq = 0;
  }
  if (rq >= max) {
    rq = max - 1;
  }
  setContent (rq);
}

function firstQuote() {
  var ix = 0;
  setContent(ix);
}

function lastQuote() {
  var ix = max - 1;
  setContent(ix);
}

function nextQuote() {
  bumpQuote(1);
}

function priorQuote() {
  bumpQuote(-1);
}

function bumpQuote(inc) {
  var thisURL = document.URL;
  var lastSlash = thisURL.lastIndexOf("/");
  var thisPage = thisURL.substr(lastSlash + 1);
  var ix = 0;
  var found = false;
  while (ix < max && (! found)) {
    var page = qfilename[ix];
    if (thisPage == page) {
      found = true;
    } else {
      ix++;
    }
  }
  if (found) {
    ix = ix + inc;
    if (ix >= max) {
      ix = 0;
    }
    if (ix < 0) {
      ix = max - 1;
    }
    setContent(ix);
  } else {
    setContent(0);
  }
}
