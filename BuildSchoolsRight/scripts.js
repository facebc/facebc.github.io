//addEventListener polyfill 1.0 / Eirik Backer / MIT Licence
(function(win, doc) {
  if (win.addEventListener) return; //No need to polyfill

  function docHijack(p) {
    var old = doc[p];
    doc[p] = function(v) {
      return addListen(old(v));
    };
  }
  function addEvent(on, fn, self) {
    return (self = this).attachEvent("on" + on, function(e) {
      var e = e || win.event;
      e.preventDefault =
        e.preventDefault ||
        function() {
          e.returnValue = false;
        };
      e.stopPropagation =
        e.stopPropagation ||
        function() {
          e.cancelBubble = true;
        };
      fn.call(self, e);
    });
  }
  function addListen(obj, i) {
    if ((i = obj.length)) while (i--) obj[i].addEventListener = addEvent;
    else obj.addEventListener = addEvent;
    return obj;
  }

  addListen([doc, win]);
  if ("Element" in win) win.Element.prototype.addEventListener = addEvent;
  //IE8
  else {
    //IE < 8
    doc.attachEvent("onreadystatechange", function() {
      addListen(doc.all);
    }); //Make sure we also init at domReady
    docHijack("getElementsByTagName");
    docHijack("getElementById");
    docHijack("createElement");
    addListen(doc.all);
  }
})(window, document);

var toolDisabled = true;

if (toolDisabled) {
  document.getElementById("outlook").setAttribute("disabled", "true");
  document.getElementById("body").setAttribute("disabled", "true");
}

var mlas = [
  ["Daryl Plecas", "darryl.plecas.MLA@leg.bc.ca", "Abbotsford South"],
  ["Michael de Jong", "mike.dejong.mla@leg.bc.ca", "Abbotsford West"],
  ["Simon Gibson", "simon.gibson.MLA@leg.bc.ca", "Abbotsford-Mission"],
  ["Linda Larson", "linda.larson.MLA@leg.bc.ca", "Boundary-Similkameen"],
  ["Janet Routledge", "janet.routledge.MLA@leg.bc.ca", "Burnaby North"],
  ["Anne Kang", "anne.kang.MLA@leg.bc.ca", "Burnaby-Deer Lake"],
  ["Raj Chouhan", "raj.chouhan.MLA@leg.bc.ca", "Burnaby-Edmonds"],
  ["Katrina Chen", "katrina.chen.MLA@leg.bc.ca", "Burnaby-Lougheed"],
  ["Coralee Oakes", "coralee.oakes.MLA@leg.bc.ca", "Cariboo North"],
  ["Donna Barnett", "donna.barnett.MLA@leg.bc.ca", "Cariboo-Chilcotin"],
  ["John Martin", "john.martin.MLA@leg.bc.ca", "Chilliwack"],
  ["Laurie Throness", "laurie.throness.MLA@leg.bc.ca", "Chilliwack-Kent"],
  [
    "Doug Clovechok",
    "doug.clovechok.MLA@leg.bc.ca",
    "Columbia River-Revelstoke"
  ],
  ["Joan Isaacs", "joan.isaacs.MLA@leg.bc.ca", "Coquitlam-Burke Mountain"],
  [
    "Selina Robinson",
    "selina.robinson.MLA@leg.bc.ca",
    "Coquitlam-Maillardville"
  ],
  ["Ronna-Rae Leonard", "ronna-rae.leonard.MLA@leg.bc.ca", "Courtenay-Comox"],
  ["Sonia Furstenau", "sonia.furstenau.MLA@leg.bc.ca", "Cowichan Valley"],
  ["Ravi Kahlon", "ravi.kahlon.MLA@leg.bc.ca", "Delta North "],
  ["Ian Paton", "ian.paton.MLA@leg.bc.ca", "Delta South"],
  ["Mitzi Dean", "mitzi.dean.MLA@leg.bc.ca", "Esquimalt-Metchosin"],
  ["Jackie Tegart", "jackie.tegart.MLA@leg.bc.ca", "Fraser-Nicola"],
  ["Peter Milobar", "peter.milobar.MLA@leg.bc.ca", "Kamloops-North Thompson"],
  ["Todd Stone", "todd.stone.MLA@leg.bc.ca", "Kamloops-South Thompson"],
  ["Ben Stewart", "Ben.Stewart.MLA@leg.bc.ca", "Kelowna West"],
  ["Norm Letnick", "norm.letnick.MLA@leg.bc.ca", "Kelowna-Lake Country"],
  ["Steve Thomson", "steve.thomson.MLA@leg.bc.ca", "Kelowna-Mission "],
  ["Tom Shypitka", "tom.shypitka.MLA@leg.bc.ca", "Kootenay East"],
  ["Katrine Conroy", "katrine.conroy.MLA@leg.bc.ca", "Kootenay West"],
  ["John Horgan", "john.horgan.MLA@leg.bc.ca", "Langford-Juan de Fuca"],
  ["Mary Polak", "mary.polak.MLA@leg.bc.ca", "Langley"],
  ["Rich Coleman", "rich.coleman.MLA@leg.bc.ca", "Langley East"],
  ["Bob D'Eith", "bob.deith.MLA@leg.bc.ca", "Maple Ridge-Mission"],
  ["Lisa Beare", "lisa.beare.MLA@leg.bc.ca", "Maple Ridge-Pitt Meadows"],
  ["Scott Fraser", "scott.fraser.MLA@leg.bc.ca", "Mid Island-Pacific Rim"],
  ["Leonard Eugene Krog", "leonard.krog.MLA@leg.bc.ca", "Nanaimo"],
  ["Doug Routley", "douglas.routley.MLA@leg.bc.ca", "Nanaimo-North Cowichan"],
  ["John Rustad", "john.rustad.MLA@leg.bc.ca", "Nechako Lakes "],
  ["Michelle Mungall", "michelle.mungall.MLA@leg.bc.ca", "Nelson-Creston "],
  ["Judy Darcy", "judy.darcy.MLA@leg.bc.ca", "New Westminster"],
  ["Jennifer Rice", "jennifer.rice.MLA@leg.bc.ca", "North Coast"],
  ["Claire Trevena", "claire.trevena.MLA@leg.bc.ca", "North Island "],
  ["Bowinn Ma", "bowinn.ma.MLA@leg.bc.ca", "North Vancouver-Lonsdale "],
  [
    "Jane Thornthwaite",
    "jane.thornthwaite.MLA@leg.bc.ca",
    "North Vancouver-Seymour"
  ],
  ["Andrew Weaver", "andrew.weaver.mla@leg.bc.ca", "Oak Bay-Gordon Head"],
  [
    "Michelle Stilwell",
    "michelle.stilwell.MLA@leg.bc.ca",
    "Parksville-Qualicum"
  ],
  ["Dan Davies", "dan.davies.MLA@leg.bc.ca", "Peace River North"],
  ["Mike Bernier", "mike.bernier.MLA@leg.bc.ca", "Peace River South"],
  ["Dan Ashton", "dan.ashton.MLA@leg.bc.ca", "Penticton"],
  ["Mike Farnworth", "mike.farnworth.MLA@leg.bc.ca", "Port Coquitlam"],
  ["Rick Glumac", "rick.glumac.MLA@leg.bc.ca", "Port Moody-Coquitlam"],
  [
    "Nicholas Simons",
    "nicholas.simons.MLA@leg.bc.ca",
    "Powell River-Sunshine Coast"
  ],
  ["Mike Morris", "mike.morris.MLA@leg.bc.ca", "Prince George-Mackenzie"],
  ["Shirley Bond", "shirley.bond.MLA@leg.bc.ca", "Prince George-Valemount"],
  ["Teresa Wat", "teresa.wat.MLA@leg.bc.ca", "Richmond North Centre"],
  ["Linda Reid", "linda.reid.MLA@leg.bc.ca", "Richmond South Centre"],
  ["Jas Johal", "jas.johal.MLA@leg.bc.ca", "Richmond-Queensborough"],
  ["John Yap", "john.yap.MLA@leg.bc.ca", "Richmond-Steveston"],
  ["Adam Olsen", "adam.olsen.MLA@leg.bc.ca", "Saanich North and the Islands"],
  ["Lana Popham", "lana.popham.MLA@leg.bc.ca", "Saanich South"],
  ["Greg Kyllo", "greg.kyllo.MLA@leg.bc.ca", "Shuswap"],
  ["Ellis Ross", "ellis.ross.mla@leg.bc.ca", "Skeena"],
  ["Doug Donaldson", "doug.donaldson.MLA@leg.bc.ca", "Stikine"],
  ["Stephanie  Cardieux", "stephanie.cadieux.MLA@leg.bc.ca", "Surrey South"],
  ["Marvin Hunt", "marvin.hunt.MLA@leg.bc.ca", "Surrey-Cloverdale"],
  ["Jagrup Brar", "jagrup.brar.MLA@leg.bc.ca", "Surrey-Fleetwood"],
  ["Rachna Singh", "rachna.singh.MLA@leg.bc.ca", "Surrey-Green Timbers"],
  ["Garry Begg", "garry.begg.MLA@leg.bc.ca", "Surrey-Guildford"],
  ["Harry Bains", "harry.bains.MLA@leg.bc.ca", "Surrey-Newton"],
  ["Jinny Sims", "jinny.sims.MLA@leg.bc.ca", "Surrey-Panorama"],
  ["Bruce Ralston", "bruce.ralston.MLA@leg.bc.ca", "Surrey-Whalley"],
  ["Tracy Redies", "tracy.redies.MLA@leg.bc.ca", "Surrey-White Rock"],
  ["Geoge Heyman", "george.heyman.MLA@leg.bc.ca", "Vancouver-Fairview"],
  ["Sam Sullivan", "sam.sullivan.MLA@leg.bc.ca", "Vancouver-False Creek"],
  ["George Chow", "george.chow.MLA@leg.bc.ca", "Vancouver-Fraserview"],
  ["Shane Simpson", "shane.simpson.MLA@leg.bc.ca", "Vancouver-Hastings"],
  ["Mable Elmore", "mable.elmore.MLA@leg.bc.ca", "Vancouver-Kensington"],
  ["Adrian Dix", "adrian.dix.MLA@leg.bc.ca", "Vancouver-Kingsway"],
  ["Michael Lee", "michael.lee.MLA@leg.bc.ca", "Vancouver-Langara"],
  ["Melanie Mark", "melanie.mark.mla@leg.bc.ca", "Vancouver-Mount Pleasant"],
  ["David Eby", "david.eby.MLA@leg.bc.ca", "Vancouver-Point Grey"],
  ["Andrew Wilkinson", "andrew.wilkinson.MLA@leg.bc.ca", "Vancouver-Quilchena"],
  [
    "Spencer Chandra Herbert",
    "spencer.herbert.MLA@leg.bc.ca",
    "Vancouver-West End"
  ],
  ["Eric Foster", "eric.foster.MLA@leg.bc.ca", "Vernon-Monashee"],
  ["Carole James", "carole.james.MLA@leg.bc.ca", "Victoria-Beacon Hill"],
  ["Rob Fleming", "rob.fleming.MLA@leg.bc.ca", "Victoria-Swan Lake"],
  ["Ralph Sultan", "ralph.sultan.MLA@leg.bc.ca", "West Vancouver-Capilano"],
  ["Jordan Sturdy", "jordan.sturdy.MLA@leg.bc.ca", "West Vancouver-Sea to Sky"]
];

var faceSubject = "Build Schools Right";
// var faceEmail = "facebc.vancouver@gmail.com";
var panEmail = "parentadvocacynetwork@gmail.com";

var premierEmail = "premier@gov.bc.ca";
var moeEmail = "educ.minister@gov.bc.ca";
var mofEmail = null; //"fin.minister@gov.bc.ca";
var moeName = ", Premier Horgan, and Minister Fleming";
var oppCritics = [
  // "mary.polak.MLA@leg.bc.ca",
  // "dan.davies.MLA@leg.bc.ca",
  "andrew.wilkinson.MLA@leg.bc.ca",
  "andrew.weaver.mla@leg.bc.ca"
  // "Sonia.Furstenau.MLA@leg.bc.ca"
];

if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}

// var tweet = [
//   "It's 2018. Time to prioritize public education. Take action: http://facebc.ca/newyear/",
//   "#BCEd2018 #bced #bcpoli",
//   "@rob_fleming, @jjhorgan, @ajwvictoriaBC, @PAN_Vancouver, @FACE_BC"
// ].join("\n");

// document
//   .getElementById("twitter")
//   .setAttribute(
//     "href",
//     "https://twitter.com/home?status=" + encodeURIComponent(tweet)
//   );

// var faceBody =
//   document.getElementById("body1").innerHTML.trim() +
//   "\n\n" +
//   document.getElementById("body2").innerHTML.trim();

var faceBody = "Body text";

var mlaByEmail = {};
mlas.sort(function(info1, info2) {
  var name1 = info1[0];
  var name2 = info2[0];
  return name1.toLowerCase().localeCompare(name2.toLowerCase());
});

var communities = mlas.slice(0);
communities.sort(function(info1, info2) {
  var name1 = info1[2];
  var name2 = info2[2];
  return name1.toLowerCase().localeCompare(name2.toLowerCase());
});

var button = document.getElementById("button");

var community = document.getElementById("community");
var mla = document.getElementById("mla");
for (var i = 0; i < mlas.length; ++i) {
  mlaByEmail[mlas[i][1]] = {
    name: mlas[i][0],
    community: mlas[i][2]
  };

  var option1 = document.createElement("option");
  option1.innerHTML = mlas[i][0];
  option1.setAttribute("value", mlas[i][1]);
  mla.appendChild(option1);

  var option2 = document.createElement("option");
  option2.innerHTML = communities[i][2];
  option2.setAttribute("value", communities[i][1]);
  community.appendChild(option2);
}

var nameInput = document.getElementById("name");
var enableButton = function() {
  var disabled =
    nameInput.value.trim().length === 0 || mla.value.trim().length === 0;
  if (disabled || toolDisabled) {
    button.setAttribute("disabled", disabled);
    button.removeAttribute("href");
  } else {
    button.removeAttribute("disabled");
    button.setAttribute("href", "#");
  }
};

mla.addEventListener("change", function(e) {
  community.value = mla.value;
  enableButton();
});

community.addEventListener("change", function(e) {
  mla.value = community.value;
  enableButton();
});

nameInput.addEventListener("input", function(e) {
  enableButton();
});

mla.value = community.value = "";

// document.getElementById("back").addEventListener("click", function(e) {
//   document.getElementById("main").style.display = "block";
//   document.getElementById("email").style.display = "none";
// });

button.addEventListener("click", function(e) {
  document.getElementById("mla");
  debugger;
  if (toolDisabled) {
    return;
  }
  try {
    if (button.getAttribute("disabled") === "true") {
      e.preventDefault();
      return;
    }

    var mlaEmail = mla.value;
    var mlaName = mlaByEmail[mlaEmail].name;
    var community = mlaByEmail[mlaEmail].community;
    var name = nameInput.value;

    var emailParagraphNodes = document.querySelectorAll("#email-content p");
    var emailParagraphs = [];

    for (var i = 0; i < emailParagraphNodes.length; ++i) {
      emailParagraphs.push(emailParagraphNodes[i].innerText);
    }

    var faceBody = emailParagraphs.join("\n\n");

    var userBody = document.getElementById("body");
    userBody = userBody.value;

    var subject = encodeURIComponent(faceSubject);
    var body = "Dear " + mlaName + moeName + ",\n\n";

    body += faceBody;

    if (userBody) {
      body += "\n\n" + userBody;
    }

    body += "\n\nSincerely,";
    body += "\n\n" + name;

    body += "\n\n" + community;

    // disable email addresses
    // moeEmail = '';
    // faceEmail = '';
    // mlaEmail = '';

    var to = [premierEmail, moeEmail];
    if (mofEmail) {
      to.push(mofEmail);
    }

    var cc = oppCritics.concat([panEmail]);

    if (mlaEmail != "Vacant") {
      to.unshift(mlaEmail);
    }

    var outlook = document.getElementById("outlook");
    var emailSep = outlook && outlook.checked ? ";" : ",";

    var escapedBody = encodeURIComponent(body);
    var url =
      "mailto:" +
      encodeURIComponent(to.join(emailSep)) +
      "?subject=" +
      subject +
      "&body=" +
      escapedBody +
      "&cc=" +
      encodeURIComponent(cc.join(emailSep));

    var t;
    button.addEventListener("blur", function(e) {
      clearTimeout(t);
    });
    t = setTimeout(function() {
      document.getElementById("main").style.display = "none";
      document.getElementById("email").style.display = "block";
    }, 500);

    button.setAttribute("href", url);

    document.getElementById("to").value = to.join(", ");
    document.getElementById("cc").value = cc.join(", ");
    document.getElementById("subject").value = faceSubject;
    document.getElementById("content").innerHTML = body;
  } catch (e) {
    var p = document.createElement("p");
    p.innerHTML = e.message;
    var main = document.getElementById("main");
    main.appendChild(p);
  }
});
