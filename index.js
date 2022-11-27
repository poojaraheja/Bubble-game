var canvas = document.getElementById('pooja');
var context = canvas.getContext('2d');
context.beginPath();
context.arc(x = 120, y = 300, r = 100, starting_angle = 0, ending_angle = 2 * Math.PI);
context.fillStyle = 'green';
context.fill();
context.stroke();
var ct = document.getElementById("pooja").getContext("2d");
ct.beginPath();
canvas_arrow(ct, 1065, 300, 1000, 300);
ct.stroke();


function canvas_arrow(context, from_x, from_y, to_x, to_y) {
  var head = 10;
  var dx = to_x - from_x;
  var dy = to_y - from_y;
  var angle = Math.atan2(dy, dx);
  context.moveTo(from_x, from_y);
  context.lineTo(to_x, to_y);
  context.lineTo(to_x - head * Math.cos(angle - Math.PI / 6), to_y - head * Math.sin(angle - Math.PI / 6));
  context.moveTo(to_x, to_y);
  context.lineTo(to_x - head * Math.cos(angle + Math.PI / 6), to_y - head * Math.sin(angle + Math.PI / 6));
}

function moving() {
  var arrow_tail = 1065;
  var arrow_head = 1000;
  const i = setInterval(function() {
    var ct = document.getElementById("pooja").getContext("2d");
    ct.beginPath();
    canvas_arrow(ct, arrow_tail, 300, arrow_head, 300);
    ct.stroke();
    ct.clearRect(arrow_tail, 295, arrow_head, 305);
    arrow_tail = arrow_tail - 65;
    arrow_head = arrow_head - 65;
    if (arrow_head === 155) {
      var canvas = document.getElementById('pooja');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.arc(x = 120, y = 300, r = 100, starting_angle = 0, ending_angle = 2 * Math.PI);
      context.fillStyle = 'yellow';
      context.fill();
      context.stroke();
      clearInterval(i);
    }
  }, 500);
};
