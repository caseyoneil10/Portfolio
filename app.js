//functions that execute when each respective button is clicked and redirect to a different html file
const navigateBio = () => {
  window.location.href = ('../html/bio.html')
}
const navigateResume = () => {
  window.location.href = ('../html/resume.html')
}
const navigateProjects = () => {
  window.location.href = ('../html/projects.html')
}
const navigateHeader = () => {
  window.location.href = ('../index.html')
}


//These animate our buttons in the header
//The stop function prevents the aninmation from triggering multiple times.
const animateBio = () => {
  $('#divButton1').stop().animate({
    fontSize: "2em"
  })
}

const unanimateBio = () => {
  $('#divButton1').stop().animate({
    fontSize: "1em"
  })
}
const animateResume = () => {
  $('#divButton2').stop().animate({
    fontSize: "2em"
  })
}

const unanimateResume = () => {
  $('#divButton2').stop().animate({
    fontSize: "1em"
  })
}
const animateProjects = () => {
  $('#divButton3').stop().animate({
    fontSize: "2em"
  })
}

const unanimateProjects = () => {
  $('#divButton3').stop().animate({
    fontSize: "1em"
  })
}
const animateLinks = () => {
  $('#linksButton').stop().animate({
    fontSize: "2em"
  })
}

const unanimateLinks = () => {
  $('#linksButton').stop().animate({
    fontSize: "1em"
  })
}
//this toggles the display setting for class of links. each click toggles it from block to none.
const expandLinks = () => {
  $('.links').slideToggle()
}
const expandCareer = () => {
  $('.careerDiv').slideToggle('fast')
}
const expandPersonal = () => {
  $('.personalDiv').slideToggle('fast')
}
const expandAdditional = () => {
  $('.additionalDiv').slideToggle('fast')
}


//so jquery waits for page to load
$(() => {

  //on click execute listed function (which takes you to different HTML files)
  $('#divButton1').click(navigateBio);
  $('#divButton2').click(navigateResume);
  $('#divButton3').click(navigateProjects);
  $('#header').click(navigateHeader)

  $('#linksButton').click(expandLinks)
  //upon mouse enter into the object execute the function.
  $('#divButton1').mouseenter(animateBio)
  //upon mouse leave from the object execute the function.
  $('#divButton1').mouseleave(unanimateBio)

  $('#divButton2').mouseenter(animateResume)
  $('#divButton2').mouseleave(unanimateResume)

  $('#divButton3').mouseenter(animateProjects)
  $('#divButton3').mouseleave(unanimateProjects)

  $('#linksButton').mouseenter(animateLinks)
  $('#linksButton').mouseleave(unanimateLinks)

  $('#careerID').click(expandCareer)
  $('#personalID').click(expandPersonal)
  $('#additionalID').click(expandAdditional)

})
