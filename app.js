console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
printOdds(100);
function printOdds(count) {
  for (i = 1; i < count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  const aboveSixteen = `Congrats ${userName} you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}
checkAge("Paul", 28);
checkAge("Paul", 14);

// Exercise 3 Section
function coordinates(x, y) {
  if (x > 0 && y > 0) {
    console.log("You are in Quadrant 1");
  } else if (x < 0 && y > 0) {
    console.log("You are in Quadrant 2");
  } else if (x > 0 && y < 0) {
    console.log("You are on Quadrant 3");
  } else if (x > 0 && y < 0) {
    console.log("You are in Quadrant 4");
  } else if (x == 0 && y != 0) {
    console.log("You are on the y - axis");
  } else if (x != 0 && y == 0) {
    console.log("You are on x - axis");
  } else {
    console.log("At Origin");
  }
}
coordinates(4, -8);

//Exercise 4 Section
function triangle(num1, num2, num3) {
  if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1) {
  } else if (num1 == num2 && num2 == num3) {
    console.log("Equilateral Triangle");
  } else if (num1 == num2 && num2 != num3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Invalid Triangle");
  }
}
triangle(1, 1, 1);
triangle(1, 1, 4);
triangle(1, 4, 6);
triangle(6, 5, 4);

// Exercise 5 Section
function dataUsage(planLimit, day, usage) {
  const usageUsed = usage / day;
  const dayPeriod = 30;
  const projectedUsage = usageUsed * dayPeriod;
  const remainingDifference = projectedUsage - planLimit;
  const remainingData = planLimit - usage;
  const daysRemaining = dayPeriod - day;
  const gbPerDay = usageUsed - remainingData / daysRemaining;
  const expectedAvgUse = planLimit / dayPeriod;
  if (remainingData == 0) {
    console.log("no more data");
  }

  console.log(`${day} days used, ${daysRemaining} days remaining`);
  console.log(`Expected average daily use: ${expectedAvgUse} GB/day`);
  if (projectedUsage > planLimit) {
    console.log(`You are EXCEEDING your daily average use ${usageUsed} GB/day.
    Continuing this high usage, you'll exceed your data plan by ${remainingDifference} GB/day. To stay below your data plan, use no more than ${gbPerDay}`);
  } else if (projectedUsage < planLimit) {
    console.log(
      `Your are below your daily average use ${projectedUsage} GB/day. To get the most out of your data plan, start using ${gbPerDay} per day.`
    );
  }
}
dataUsage(100, 15, 56);
