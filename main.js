(function(){

    // All items we'd like to add
    var navItems = [
        {href: 'http://google.com', text: 'Play online'},
        {href: 'http://bing.com', text: 'Play on-site'},
        {href: 'http://stackoverflow.com', text: 'The story'},
         {href: 'http://stackoverflow.com', text: 'Contact us'}
    ];
    var navbutton = document.createElement("button");
    navbutton.setAttribute("width", "36px");
    navbutton.setAttribute("height", "40px");
    navbutton.style.cssFloat = "right";
    
    // A few variables for use later
    var navElem = document.createElement("nav"),
        navList = document.createElement("ul"),
                 navItem, navLink;
      
    navElem.appendChild(navList);
    
      var x = document.createElement("IMG");
  x.setAttribute("src", "close.png");
  x.setAttribute("width", "36px");
  x.setAttribute("height", "40px");
   x.setAttribute("class", "animation1");
  x.style.cssFloat = "right";
  x.style.marginTop = "-240px";
   x.addEventListener("click", 
    function goToURL() {
window.location = "https://ghudsanyosief.github.io/uppgift2-responsiv-design/";
}
  )
  document.body.appendChild(x);
   
  
    for (var i = 0; i < navItems.length; i++) {
        // Create a fresh list item, and anchor
        navItem = document.createElement("li");
        navLink = document.createElement("a");
        
        // Set properties on anchor
        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;
        
        // Add anchor to list item, and list item to list
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
       /* navItem.style.display='none';*/
       navItem.style.listStyle = "none";
       navLink.style.color = "white";
       navItem.style.textAlign = "center";
       navItem.style.fontStyle = "bold";
       navItem.style.fontFamily = "Roboto";
       navList.style.marginTop = "260px";
       navItem.style.marginBottom = "50px";
       navItem.setAttribute("class", "animation2");
       navLink.style.textDecorationLine = "none";
    }
    
    // Set first list item as current
   
        document.body.style.backgroundColor = " #011827";
       /* document.body.appendChild(navbutton);*/
    // Add list to body (or anywhere else)
    window.onload = function () {
        document.body.appendChild(navElem);
    }
    
}());