

document.addEventListener("DOMContentLoaded", () =>
{
  const myDiv = document.getElementById("landing");
let lastScrollTop = 0;

window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    myDiv.style.opacity = "0";
  } else {
    myDiv.style.opacity = "1";
  }
  lastScrollTop = scrollTop;
});


  const button = document.getElementById("empowerment-button");


  button.addEventListener("click", () => {
    document.body.classList.toggle("empowered");
    button.classList.toggle("empowered");
    empower();
  });


});
let empowered=0;
function empower(){
  let elements = document.getElementsByClassName('ch-list');
  let headings = document.getElementsByClassName('fancyheading');
  let fnotes = document.getElementsByClassName('fnote');
  let image = document.getElementsByTagName('img'); 

  if(empowered==0){
    document.getElementById("BackToTop").style.display = "block";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById('empowerment-button').classList.add("empowermentActive");
    document.getElementById('mainheading').classList.add("empoweredmain");
    document.getElementById('header').style.display="none";
      for(var i=0; i<elements.length; i++) {
        elements[i].style.display='none';
      }
      for(var j=0; j<headings.length; j++) {
        headings[j].classList.add("empoweredheading");
      }
      for(var k=0; k<fnotes.length; k++) {
        fnotes[k].classList.add("Fem");
      }
      for(var a=0; a<image.length; a++) {
        image[a].classList.add("glow");
      }
    empowered=1;
  }else{
    document.getElementById("BackToTop").style.display = "none";
    document.getElementById("myBtn").style.display = "block";
    document.getElementById('empowerment-button').classList.remove("empowermentActive");
    document.getElementById('mainheading').classList.remove("empoweredmain");
    document.getElementById('header').style.display="block";
    for(var i=0; i<elements.length; i++) {
      elements[i].style.display='block';
    }
    for(var j=0; j<headings.length; j++) {
      headings[j].classList.remove("empoweredheading");
    }
    for(var k=0; k<fnotes.length; k++) {
      fnotes[k].classList.remove("Fem");
    }
    for(var a=0; a<image.length; a++) {
      image[a].classList.remove("glow");
    }
    empowered=0;
  }
}



const interjectionParagraphs = () => {
    // Tutorial on IntersectonObserver:
    // https://uploadcare.com/blog/intersection-observer-guide/

    // Save interjections paragraphs into a variable
    const interjections = document.querySelectorAll(".interjection > *");

    // Declare Intersection Observer options
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0% -25% 0%",
      threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
      // Function to handle intersecting interjections paragraphs
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If an interjections paragraph is intersecting then add the class 'intersecting'
          entry.target.classList.add("intersecting");
        } else if (!entry.isIntersecting) {
          // If an interjections paragraph is NOT intersecting then remove the class 'intersecting'
          entry.target.classList.remove("intersecting");
        }
      });
    };

    // Declare observer
    // Assign it
    // - our handleIntersection function to handle intersecting interjections paragraphs
    // - our options as defined above by observerOptions
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Loop over all interjections paragraphs and observe them, i.e. keep watch of intersecting paragraphs
    [...interjections].forEach((i) => {
      if (i) {
        observer.observe(i);
      }
    });
  };

  // Start observing interjections paragraphs as soon as page is loaded
  window.addEventListener("load", interjectionParagraphs);


  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if(empowered==0){
        document.getElementById("myBtn").style.display = "block";
      }else{
        document.getElementById("BackToTop").style.display = "block";
      }


      document.getElementById("empowerment-button").style.display = "block";
      document.getElementById("landing").style.marginTop = "-80vh";
    } else {
      if(empowered==1){
        document.getElementById("BackToTop").style.display = "none";
      }else{
        document.getElementById("myBtn").style.display = "none";
      }
      document.getElementById("empowerment-button").style.display = "none";
      document.getElementById("landing").style.marginTop = "0px";
    }
  }


 function topFunction() {
  const element = document.getElementById("top");
  element.scrollIntoView();
  document.getElementById("landing").style.opacity = "0";
 }


 let x= 0;
  function hideme(j){
    if(x==0){
      document.getElementById(j).style.display="block";
      x=1;
    }else{
      document.getElementById(j).style.display="none";
      x=0;
    }
  }