﻿# image_slide

 # Image Follower with Mouse Interaction

This project creates an interactive web page where images dynamically follow the user's mouse movements within specific elements. When the mouse hovers over a section, the image associated with that section becomes visible and follows the cursor, creating an engaging effect.

## Features
- Smooth mouse-follow interaction for images.
- Images fade in and out on hover.
- Fully responsive and styled for a modern look.

## Technologies Used
- HTML: For structuring the web page.
- CSS: For styling and layout.
- JavaScript: For adding dynamic mouse-following interaction.

## How It Works
  # HTML:
   - Each section (div) contains a heading (h1) and an image (img).
   - Images are initially hidden using CSS opacity.
     
  # CSS:
   - position: relative is used for containers.
   - position: absolute allows images to move freely within their container.
     
  # JavaScript:
   - Event listeners (mouseenter, mouseleave, mousemove) are added to each .elem element.
   - The mousemove event updates the image's position based on the cursor's coordinates.
   - The mouseenter and mouseleave events control the image visibility (opacity).
