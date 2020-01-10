export default {
  getOrgnizationSettingsByRole: function() {

  },

  style: `
  <style>
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
  `,
};
