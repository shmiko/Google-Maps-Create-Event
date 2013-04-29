(function () {
  "use strict";

  function r(f){(/p/.test(document.readyState)?f:setTimeout)(r,9,f);}

  r(function () {
    var iWTemplate = document.querySelector("#box_infowindow\\.html\\#BoxInfowindow div.iw td.basicinfo div.addr > span"),
      inject = document.createElement('span');

    iWTemplate.insertBefore(inject, iWTemplate.firstChild);

    inject.innerHTML = "<span jsvars=\"$event_title:i.title.replace(/(<([^>]+)>)/ig,'').replace(/[()]/g,'')\"></span>" +
    "<span jsvars=\"$event_addr:i.addressLines.join(', ') + ' (' + $event_title + ')'\"></span>" +
    "<span jsvars=\"$event_url:'https://www.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent($event_title)+'&location='+encodeURIComponent($event_addr)\"></span>" +
    "<a jsdisplay=\"i.addressLines && i.title\" href=\"#\" jsattrs=\"href:$event_url\" target=\"_blank\">Create Event From Location</a>";
  });
})();
