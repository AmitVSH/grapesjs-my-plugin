export default {
  getImages: function() {
    let self=this;
    return new Promise((resolve, reject) => {
      setTimeout(function(){ resolve(self.images); }, 3000);
    });
  },
  style: '',
  images: [
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
  ]
};
