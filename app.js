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
  $('.button1').stop().animate({
    fontSize: "2em"
  })
}

const unanimateBio = () => {
  $('.button1').stop().animate({
    fontSize: "1em"
  })
}
const animateResume = () => {
  $('.button2').stop().animate({
    fontSize: "2em"
  })
}

const unanimateResume = () => {
  $('.button2').stop().animate({
    fontSize: "1em"
  })
}
const animateProjects = () => {
  $('.button3').stop().animate({
    fontSize: "2em"
  })
}

const unanimateProjects = () => {
  $('.button3').stop().animate({
    fontSize: "1em"
  })
}
const animateLinks = () => {
  $('.button4').stop().animate({
    fontSize: "2em"
  })
}

const unanimateLinks = () => {
  $('.button4').stop().animate({
    fontSize: "1em"
  })
}
//this toggles the display setting for class of links. each click toggles it from block to none. This is used for the drop down menu in the header.
const expandLinks = () => {
  $('.ulFlex').slideToggle()
}
const expandLinks2 = () => {
  $('.projButton').slideToggle()
}

//These links toggle between showing the
const expandCareer = () => {
  $('.careerDiv').slideToggle('fast')
}
const expandPersonal = () => {
  $('.personalDiv').slideToggle('fast')
}
const expandAdditional = () => {
  $('.additionalDiv').slideToggle('fast')
}
const expandSkills = () => {
  $('.skillsDiv').slideToggle('fast')
}
const expandWork = () => {
  $('.workExpDiv').slideToggle('fast')
}
const expandEducation = () => {
  $('.educationDiv').slideToggle('fast')
}
const showModal1 = () => {
  $('.modal1').css('display', 'flex')
  $('.modal1Text').css('display', 'block')
}
const hideModal1 = () => {
  $('.modal1').css('display', 'none')
  $('.modal1Text').css('display', 'none')
}
const showModal2 = () => {
  $('.modal1').css('display', 'flex')
  $('.modal2Text').css('display', 'block')
}
const hideModal2 = () => {
  $('.modal1').css('display', 'none')
  $('.modal2Text').css('display', 'none')
}
const showModal3 = () => {
  $('.modal1').css('display', 'flex')
  $('.modal3Text').css('display', 'block')
}
const hideModal3 = () => {
  $('.modal1').css('display', 'none')
  $('.modal3Text').css('display', 'none')
}
const showModal4 = () => {
  $('.modal1').css('display', 'flex')
  $('.modal4Text').css('display', 'block')
}
const hideModal4 = () => {
  $('.modal1').css('display', 'none')
  $('.modal4Text').css('display', 'none')
}

//so jquery waits for page to load
$(() => {

  //on click execute listed function (which takes you to different HTML files)
  $('.button1').click(navigateBio);
  $('.button2').click(navigateResume);
  $('.button3').click(navigateProjects);
  $('#header').click(navigateHeader)

  $('.button4').click(expandLinks)
  $('.button3').click(expandLinks2)

  //upon mouse enter into the object execute the function.
  $('.button1').mouseenter(animateBio)
  //upon mouse leave from the object execute the function.
  $('.button1').mouseleave(unanimateBio)

  $('.button2').mouseenter(animateResume)
  $('.button2').mouseleave(unanimateResume)

  $('.button3').mouseenter(animateProjects)
  $('.button3').mouseleave(unanimateProjects)

  $('.button4').mouseenter(animateLinks)
  $('.button4').mouseleave(unanimateLinks)

  $('#careerID').click(expandCareer)
  $('#personalID').click(expandPersonal)
  $('#additionalID').click(expandAdditional)
  $('#skillsID').click(expandSkills)
  $('#workID').click(expandWork)
  $('#educationID').click(expandEducation)
  $('.proj1').click(showModal1)
  $('.closeButton').click(hideModal1)
  $('.proj2').click(showModal2)
  $('.closeButton').click(hideModal2)
  $('.proj3').click(showModal3)
  $('.closeButton').click(hideModal3)
  $('.proj4').click(showModal4)
  $('.closeButton').click(hideModal4)


})
