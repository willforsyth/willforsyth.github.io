---
layout: post
title: Accessibility tips for developers
comments: false
published: true
category: tips
description: |
  Accessibility goes hand in hand with user experience. As developers its something that needs to be considered as you build your product.
---

Accessibility goes hand in hand with user experience. As developers its something that needs to be considered as you build your product.

> #### Why Web Accessibility is Important
"The Web is an increasingly important resource in many aspects of life: education, employment, government, commerce, health care, recreation, and more. It is essential that the Web be accessible in order to provide equal access and equal opportunity to people with disabilities. An accessible Web can also help people with disabilities more actively participate in society." [Quoted from here](https://www.w3.org/WAI/intro/accessibility.php)

### Things to include

* [Skip nav ](http://accessibility.psu.edu/skipnav/) Give your screen readers the option to skip the navigation.
* [ARIA and Land Marks](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page),
* role="button"
* role="link"
* role="radio"
* role="checkbox"
* Use the focus pseudo to aid screen readers and users

### Color accessibility
Color accessibility is normally something that the designer should look at, but with the shift to designing in the browser ( something i am not a fan off ) and that its something thats over looked or maybe as the gurus of all things web he designers will ask for some guidance here are some best practice tips.

> As per the AA guidelines the contrast ratio between your text and background needs to be at least 4.5:1. Use light background and dark text or use dark background and light text.

Some resources:

[Check your contrast](http://webaim.org/resources/contrastchecker/)

[Colour Contrast Check](https://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=903333)

[Contrast Checker](http://contrastchecker.com/)

[Simulate colour blindness](http://colororacle.org/)

### Adding accessibility to keyboard users
A typical keyboard user will use tab to navigate the site. So to help there experience we need to make use of several techniques to help them navigate.

Some resources:

[keyboard techniques](http://webaim.org/techniques/keyboard/)

### Resources

[w3.org](https://www.w3.org/standards/webdesign/accessibility)

[w3.org intro](https://www.w3.org/WAI/intro/accessibility.php)
