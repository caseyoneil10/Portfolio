# Casey O'Neil Portfolio Project


## Approach Taken
For this project, I started by getting all of my pages made and then set them up so they were "linked" together. This way I had the general flow of the website. I waited for any type of formatting until I was happy with the actual functionality of the page.  



I did find that some formatting, for instance Flexbox implementation was better to do while I was working on the functionality. For example my main button bar in the header, I started by just getting the jquery methods working (the animate method and the drop drop down menu), although I found when I wanted to go back and make them Flexbox elements I had to redo some things that may have been easier, or more efficient to tackle while I was initially setting it up.  



## Technologies Used
I utilized CSS for all styling, as well as FlexBox.  

CSS media queries were also used to increase the responsiveness for tablet, and phone display.  

I also used jQuery functions for interaction with the site. Methods used were the .animate(), .stop() .css(), .slideToggle(), .click(), .mouseenter(), and .mouseleave().  

These methods allowed me to...   
1) Animate the menu bar where the buttons will animate when moused over. ".animate()"  

2) Allowed me to create a drop down for my links button. ".slideToggle()"

3) Hide Show text on the bio/resume pages. ".slideToggle()"  

4) Create modals for each project, where when a specific project is clicked the corresponding pop-up modal displays with project information. ".css()"


## Problems Encountered  
I struggled for quite a bit with some Flexbox responsiveness/formatting in my menu bar in the header, especially with the drop down menu. I eventually was able to figure out my issue (mainly due to the flex-direction property), and this allowed me to better understand the Flexbox properties and how they work.  

I also was unable to figure out a problem with linking to other webpages. I wanted to add a drop down menu to the projects link in the header where each project was listed. When clicked it would redirect to the projects webpage and open that specific modal. I worked on this issue for many hours and still could not find a way to have a specific modal open when redirecting from a different webpage.  

I think there is a way to make my jQuery functions much DRYer. Especially when reusing the same function (i.e. the bio/resume pages use the same functionality of hiding and showing text). It seems that I was having to write out very specific code for each place, and I wonder if there is way to make it more generic and implement it more efficiently. Either way the code of course does work, but I did want it DRYer and struggled how to accomplish that.

## Link To Live Site  

https://comfy-clafoutis-b93631.netlify.app/
