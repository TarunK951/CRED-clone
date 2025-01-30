// line by line effect
const storyLines = document.querySelectorAll('.story p');

      // Function to handle the scroll effect
      const handleScroll = () => {
        const windowHeight = window.innerHeight;

        storyLines.forEach((line) => {
          const rect = line.getBoundingClientRect();
          const linePosition = rect.top;

          // Check if the line is in the viewport and adjust opacity based on position
          if (linePosition < windowHeight * 0.6 && linePosition > 0) {
            // Make text more visible as it scrolls
            line.classList.add('visible');
          } else {
            // Keep the text less visible outside of this range
            line.classList.remove('visible');
          }
        });
      };

      // Listen to scroll event
      window.addEventListener('scroll', handleScroll);
      // Initial call to apply the effect on page load
handleScroll();
      
// expand
document.getElementById("expandBtn").addEventListener("click", function () {
  document.getElementById("expandableContent").classList.toggle("expanded");
});
 


 

