const math = {}

math.lerp = (a, b, t) => {
  return a + (b - a) * t;
}

math.inverseLerp = (a, b, v) => {
  return (v - a) / (b - a);
}

math.remap = (oldA, oldB, newA, newB, v) => {
  return math.lerp(newA, newB, math.inverseLerp(oldA, oldB, v));
}

math.remapPoint = (oldBounds, newBounds, point) => {
  const pixelLoc = [
    math.remap( // x coordinate remap
      oldBounds.left,
      oldBounds.right,
      newBounds.left,
      newBounds.right,
      point[0]
    ),
    math.remap( // y coordinate remap
      oldBounds.top,
      oldBounds.bottom,
      newBounds.top,
      newBounds.bottom,
      point[1]
    ),
  ];
  return pixelLoc;
}

math.add = (p1, p2) => {
  return [
    p1[0] + p2[0],
    p1[1] + p2[1]
  ];
}

math.subtract = (p1, p2) => {
  return [
    p1[0] - p2[0],
    p1[1] - p2[1]
  ];
}

math.formatNumber = (n, dec = 0) => {
  return n.toFixed(dec);
}
