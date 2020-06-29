var sides;
var length2;

penWidth(1);
sides = 10;
length2 = 400;
for (var count3 = 0; count3 < sides; count3++) {
  penColour(colour_random());
  for (var count2 = 0; count2 < sides; count2++) {
      for (var count = 0; count < sides; count++) {
          moveForward(length2 / sides);
      turnLeft(360 / sides);
    }
    turnRight(360 / sides);
  }
  jumpForward(length2 / sides);
  turnRight(360 / sides);
}