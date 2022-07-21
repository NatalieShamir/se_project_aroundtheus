# Project 4: Around The U.S.

### Overview

- Project Description
- Technologies and Techniques Used
- GitHub Link

  **Project Description**

This project is a responsive website, designed to be displayed on most popular screen sizes. It features a photo gallery and an interactive pop-up form.

**Technologies and Techniques Used**

**CSS**

Both Flexbox and CSS Grid have been implemented in order to arrange elements in different blocks. Both Flexbox and Grid have been used in the Profile section and Grid has been implemented in the Cards section to display the photo gallery. For responsiveness, the minmax() Function has been used in the Grid layout in the Profile section. In addition, relative values, such as percentage, have been used to specify measurements in accordance with reponsive design principles. Finally, media queries have been implemented to specifiy stlyes for all popular screen sizes under 1280px.
CSS files have been organized according to BEM methodology (flat BEM).

**JavaScript**

Project's functionality has been created via JavaScript.

**OOP**

- ES6 classes are used.
- Each class is described in a separate JS file and is imported into index.js
- Each class performs only one specific task.
- Loose coupling is used.
- An instance of the Section class is created for each container, in which elements
  are rendered.
- An instance of the Card class is created for each card.
- An instance of the FormValidator class is created for each form that should be
  validated.
- An instance of the UserInfo is created once.
- The Popup class is a parent class, which has two subclasses created for each
  popup box.

**GitHub**

- [https://natalieshamir.github.io/web_project_4/](https://natalieshamir.github.io/web_project_4/)
