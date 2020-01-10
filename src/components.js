import styles from './inc/styles'
import data from './inc/data'

function initImageSlider(domc, editor, opts) {
  data.getImages().then(images => {
    let imageHTML = "";
    images.forEach(img => {
      imageHTML += `<div onclick="changeImage('${img.src}')" class="image_picker-image-circle"><img src="${img.src}" data-gjs-droppable="false" ></div>`
    });
    let bigImageHTML = `<div class="image_picker-image-big"><img src="${data.images[0].src}" data-gjs-droppable="false" ></div>`


    editor.BlockManager.add('image_slider', {
      label: `<div style="color: #eee; ">
          <img style="height: 40px;width: auto;" src="https://www.freeiconspng.com/uploads/picker-icon-5.png"/>
          <div style="padding:3px" class="my-label-block">Color Picker</div>
        </div>`,
      content: `<div class="image_picker-images-circle-container">
               ${imageHTML}
              </div>
              <div class="image_picker-image-big-container">
               ${bigImageHTML}
              </div>
            ${styles.style}`
    });

    domc.addType('image_slider', {

      isComponent: el => el.tagName === 'ImageSlider',

      model: {
        defaults: {

          script: function () {
            console.log("Asasas");
            var changeImage = function(src) {
              alert(src);
            };
            var toggle = function(e) {
              e.preventDefault();

              alert('clicked yes');
            };

            this.addEventListener('click', toggle);
          },
          // Default props
        },
      },
      view: {

      },
    });

  })
}
export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  // A block for the custom component
  initImageSlider(domc, editor, opts);
};
