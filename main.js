let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiando y aprendiendo para inspirar a los demás.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
