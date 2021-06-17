/*
  'this' refers to the object that is executing the current function
   this inside a 
      method   -> object
      function -> global object (window) 
*/

const videoObj = {
  title: 'ABC',
  play() {
    console.log(this); // this -> videoObj
  }
};

videoObj.play();

videoObj.stop = function() {
  console.log(this); // this -> videoObj
};

function playVideo() {
  console.log(this); // this -> window object
}
playVideo();


// Constructor Function or Classes
function Video(title) {
  this.title = title;
  this.fn = () => {};
  console.log(this); // this -> Video Constructor Function
}
const v = new Video('a');

class VideoClass {
  constructor(title) {
    this.title = title;
    console.log(this); // this -> VideoClass
  }
  fn = () => {};
}
const v1 = new VideoClass('b');

// function inside method
const videoDetails = {
  title: 'abc',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(tag, this); // this -> window object
    });
  },
  displayTags() {
    this.tags.forEach(tag => {
      console.log(tag, this); // this -> videoDetails
    });
  }
};
videoDetails.showTags();
videoDetails.displayTags();
