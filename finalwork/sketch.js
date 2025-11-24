// 最終課題を制作しよう
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js"></script>
</head>
<body>
<script>

function setup() {
  createCanvas(400, 400);
  background(255);

  for (let i = 0; i < 20; i++) {
    fill(random(255), random(255), random(255));

    let x = random(width);
    let y = random(height);

    if (random(1) < 0.5) {
      circle(x, y, 40);
    } else {
      rect(x, y, 40, 40);
    }
  }
}

function draw() {
  // 何もしない（描いたものを残す）
}

</script>
</body>
</html>

