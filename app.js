const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let time = 0;

function drawHeart(x, y, size, glow) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  ctx.beginPath();
  for (let t = 0; t <= Math.PI * 2; t += 0.01) {
    const px = 16 * Math.pow(Math.sin(t), 3);
    const py = - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    ctx.lineTo(px, py);
  }
  ctx.shadowColor = 'pink';
  ctx.shadowBlur = glow;
  ctx.fillStyle = 'hotpink';
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const glow = 25 + 15 * Math.sin(time);
  drawHeart(canvas.width / 2, canvas.height / 2 + 20, 10, glow);
  time += 0.05;
  requestAnimationFrame(animate);
}

animate();
