let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #873b7c;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #873b7c;">Diseñadora de la comunicación gráfica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
