# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Repository](https://github.com/neonita/Frontend-Mentor/tree/main/Newbie/profile-card-component-main)
- Live Site URL: [Live](https://neonita.github.io/Frontend-Mentor/Newbie/profile-card-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- [SASS](https://sass-lang.com/)
- Flexbox
- CSS Grid

### What I learned

In this challenge, I learned how to add mutiple background images as well as the syntax in styling each background image in different CSS properties. I learned that I could style each background image with commas as long as its key-value matches the order of background images listed.

```html
<div class="container">[...]</div>
```

```css
.container {
  background-image: $bg-desktop-top, $bg-desktop-bottom;
  background-position: left -318px top -530px, right -237px bottom -575px;
}
```

### Continued development

In future projects, I aim to practice using the Sass CSS framework. Particularly styling efficiently and using responsive techniques.

### Useful resources

- [CSS Basics: Using Multiple Backgrounds](https://css-tricks.com/css-basics-using-multiple-backgrounds/) - This helped me understand how to set mutiple background images and demonstrated how to style both images with varrying properties.

## Author

- GitHub - [Neonita](https://github.com/neonita)
