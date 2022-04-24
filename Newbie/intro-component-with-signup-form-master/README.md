# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

<div align="center">
<img src="images/ss-desktop.gif" />
<br>
<small>Screen recording of desktop resolution.</small>
<br>
<br>
<img src="images/ss-mobile.gif" height="600" />
<br>
<small>Screen recording of mobile resolution.</small>
</div>

### Links

- Solution URL: [Repository](https://github.com/neonita/Frontend-Mentor/tree/main/Newbie/intro-component-with-signup-form-master)
- Live Site URL: [Live](https://neonita.github.io/Frontend-Mentor/Newbie/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Although I'm sure there are many ways to do this but I learned how to validate an email address through Vanilla JavaScript, using regular expression (RegEx):

```html
<input type="text" name="email" class="email" placeholder="Email Address" />
```

```js
const validateEmail = (inputEmail) => {
  let reGex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reGex.test(inputEmail);
};

const checkInputs = () => {
  if (
    //[... call function!]
  } else if (!validateEmail(email.value)) {
    email.placeholder = "email@example/com";
    displayError(email, "Looks like this is not an email", errorEmail);
  }
  else {
  // [...]
  }
};
```

### Continued development

I plan to recreate this component using React.

### Useful resources

- [Forms cheat sheet](https://learn-the-web.algonquindesign.ca/topics/forms-cheat-sheet/) - A useful cheat sheet for all things `<form>`!

## Author

- GitHub - [Neonita](https://github.com/neonita)
