window.onload = Matrix = () => {
    // canvas area size is set to screen size
    const screen = window.screen;
    const width = (q.width = screen.width);
    const height = (q.height = screen.height);
  
    // initialize coordinates for 256 characters with 1
    let letters = Array(256).join(1).split("");
  
    const draw = () => {
      // get canvas context
      const ctx = q.getContext("2d");
  
      // fill canvas area with black (alpha 0.12)
      ctx.fillStyle = "rgba(255, 255, 255, .05)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(82, 82, 82, 0.30)";
  
      // set font size and style
      ctx.font = '1.8rem "Roboto", sans-serif';
      ctx.textBaseline = "top";
  
      // draw each character
      letters.map(
        (textRender = (y, index) => {
          // get a character code in the range of 0x0410 - 0x044F (Russian uppercase characters)
          let code = 0x0410 + Math.floor(Math.random() * 32); // Use the range of Russian uppercase alphabet characters
          // get the character for the specified code and convert it to uppercase
          text = String.fromCharCode(code).toUpperCase();
          x = index * 20;
          ctx.fillText(text, x, y);
          letters[index] = y > 700 + Math.random() * 10000 ? 0 : y + 15;
        })
      );
    };
    setInterval(draw, 30);
  };
  
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 20; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});
  