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

math.formatNumber = (n, dec = 0) => {
  return n.toFixed(dec);
}
