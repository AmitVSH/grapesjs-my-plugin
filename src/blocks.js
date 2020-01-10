export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  // bm.add('image_slider', {
  //   label: 'Image Slider',
  //   content: { type: 'image_slider' },
  //   // media: '<svg>...</svg>',
  // });


  const imagePickerPfx = 'imagePicker';
  const
  himagePickerRef = 'h-imagePicker',
  imagePickerRef = 'imagePicker',
  imagePickerItemsRef = 'imagePicker-items',
  menuRef = 'imagePicker-menu';
  const c = {
    blocks: [himagePickerRef],
    defaultStyle: 1,
    imagePickerClsPfx: 'imagePicker',
    labelimagePicker: 'imagePicker',
    labelimagePickerContainer: 'imagePicker Container',
    labelMenu: 'imagePicker Menu',
    labelMenuLink: 'Menu link',
    labelBurger: 'Burger',
    labelBurgerLine: 'Burger Line',
    labelimagePickerBlock: 'imagePicker',
    labelimagePickerCategory: 'Extra',
    labelHome: 'Home',
    labelAbout: 'About',
    labelContact: 'Contact',
  };

  const style = c.defaultStyle ? `
  <style>
    .image_picker-items-c {
      display: inline-block;
      float: right;
    }
    .image_picker {
      background-color: #222;
      color: #ddd;
      min-height: 50px;
      width: 100%;
    }
    .image_picker-container {
      max-width: 950px;
      margin: 0 auto;
      width: 95%;
    }
    .image_picker-container::after {
      content: "";
      clear: both;
      display: block;
    }
    .image_picker-brand {
      vertical-align: top;
      display: inline-block;
      padding: 5px;
      min-height: 50px;
      min-width: 50px;
      color: inherit;
      text-decoration: none;
    }
    .image_picker-menu {
      padding: 10px 0;
      display: block;
      float: right;
      margin: 0;
    }
    .image_picker-menu-link {
      margin: 0;
      color: inherit;
      text-decoration: none;
      display: inline-block;
      padding: 10px 15px;
    }
    .image_picker-burger {
      margin: 10px 0;
      width: 45px;
      padding: 5px 10px;
      display: none;
      float: right;
      cursor: pointer;
    }
    .image_picker-burger-line {
      padding: 1px;
      background-color: white;
      margin: 5px 0;
    }
    @media (max-width: 768px) {
      .image_picker-burger {
        display: block;
      }
      .image_picker-items-c {
        display: none;
        width: 100%;
      }
      .image_picker-menu {
        width: 100%;
      }
      .image_picker-menu-link {
        display: block;
      }




    }

    .image_picker-images-circle-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-gap: 5px;
    }
    .image_picker-image-big-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      grid-gap: 5px;
    }
    .image_picker-image-circle {
      width:60px;
    }
    .image_picker-image-circle img {
      height: 50px; width: 50px; margin: 10px; border-radius: 100px; border: 7px solid #222;
    }
    .image_picker-image-big-container img {
      height: 200px; width: 200px; margin: 10px;
    }
  </style>
  ` : '';



  let images = [
    {
      id: 1,
      name: "Hello1",
      src: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
    },
    {
      id: 2,
      name: "Hello2",
      src: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
    },
    {
      id: 3,
      name: "Hello3",
      src: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
    },
    {
      id: 4,
      name: "Hello4",
      src: "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
    }
  ];
  let imageHTML = "";

  images.forEach(img => {
    imageHTML += `<div class="${imagePickerPfx}-image-circle"><img src="${img.src}" data-gjs-droppable="false" ></div>`
  });
  let bigImageHTML = `<div class="${imagePickerPfx}-image-big"><img src="${images[0].src}" data-gjs-droppable="false" ></div>`

  bm.add(himagePickerRef, {
     label: `
       <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
         <rect class="gjs-block-svg-path" x="15" y="10" width="5" height="1"></rect>
         <rect class="gjs-block-svg-path" x="15" y="13" width="5" height="1"></rect>
         <rect class="gjs-block-svg-path" x="15" y="11.5" width="5" height="1"></rect>
       </svg>
       <div class="gjs-block-label">${c.labelimagePickerBlock}</div>`,
     category: c.labelimagePickerCategory,
     content: `
       <div class="${imagePickerPfx}" data-gjs-droppable="false" data-gjs-custom-name="${c.labelimagePicker}" data-gjs="${imagePickerRef}">
         <div class="${imagePickerPfx}-container" data-gjs-droppable="false" data-gjs-draggable="false"
           data-gjs-removable="false" data-gjs-copyable="false" data-gjs-highlightable="false"
           data-gjs-custom-name="${c.labelimagePickerContainer}">
           <a href="/" class="${imagePickerPfx}-brand" data-gjs-droppable="true"></a>
           <div class="${imagePickerPfx}-burger" data-gjs-type="burger-menu">
             <div class="${imagePickerPfx}-burger-line" data-gjs-custom-name="${c.labelBurgerLine}" data-gjs-droppable="false" data-gjs-draggable="false"></div>
             <div class="${imagePickerPfx}-burger-line" data-gjs-custom-name="${c.labelBurgerLine}" data-gjs-droppable="false" data-gjs-draggable="false"></div>
             <div class="${imagePickerPfx}-burger-line" data-gjs-custom-name="${c.labelBurgerLine}" data-gjs-droppable="false" data-gjs-draggable="false"></div>
           </div>
           <div class="${imagePickerPfx}-items-c" data-gjs="${imagePickerItemsRef}">
             <nav class="${imagePickerPfx}-menu" data-gjs="${menuRef}" data-gjs-custom-name="${c.labelMenu}">
               <a href="#" class="${imagePickerPfx}-menu-link" data-gjs-custom-name="${c.labelMenuLink}" data-gjs-draggable="[data-gjs=${menuRef}]">${c.labelHome}</a>
               <a href="#" class="${imagePickerPfx}-menu-link" data-gjs-custom-name="${c.labelMenuLink}" data-gjs-draggable="[data-gjs=${menuRef}]">${c.labelAbout}</a>
               <a href="#" class="${imagePickerPfx}-menu-link" data-gjs-custom-name="${c.labelMenuLink}" data-gjs-draggable="[data-gjs=${menuRef}]">${c.labelContact}</a>
             </nav>
           </div>
         </div>
       </div>

       <div class="${imagePickerPfx}-images-circle-container">
        ${imageHTML}
       </div>
       <div class="${imagePickerPfx}-image-big-container">
        ${bigImageHTML}
       </div>
       ${style}
     `,
   });
}
