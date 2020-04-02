function buildDpArray(s1, s2) {
  const dp = [...Array(s1.length + 1)].map(() => Array(s2.length + 1).fill(Infinity));

  function dpFunction(x, y) {
    if (x === 0) {
      return y;
    }
    if (y === 0) {
      return x;
    }

    return Math.min(
      dp[x][y - 1] + 1,
      dp[x - 1][y] + 1,
      s1.charAt(x - 1) === s2.charAt(y - 1) ? dp[x - 1][y - 1] : dp[x - 1][y - 1] + 1
    );
  }

  dp[0][0] = 0;
  for (let i = 0; i < dp.length; ++i) {
    for (let j = 0; j < dp[0].length; ++j) {
      dp[i][j] = dpFunction(i, j);
    }
  }

  return dp;
}
function compareTwoStrings(s1, s2) {
  const array = buildDpArray(s1, s2);
  const dif = array[s1.length][s2.length];
  const s1Result = [];
  const s2Result = [];
  const crtPosition = { x: s1.length, y: s2.length };
  while (crtPosition.x > 0 || crtPosition.y > 0) {
    if (
      crtPosition.x === 0 ||
      array[crtPosition.x][crtPosition.y] === array[crtPosition.x][crtPosition.y - 1] + 1
    ) {
      crtPosition.y--;
      s1Result.unshift('-');
      s2Result.unshift(s2.charAt(crtPosition.y));
      continue;
    }
    if (
      crtPosition.y === 0 ||
      array[crtPosition.x][crtPosition.y] === array[crtPosition.x - 1][crtPosition.y] + 1
    ) {
      crtPosition.x--;
      s1Result.unshift(s1.charAt(crtPosition.x));
      s2Result.unshift('-');
      continue;
    }
    crtPosition.x--;
    crtPosition.y--;
    s1Result.unshift(s1.charAt(crtPosition.x));
    s2Result.unshift(s2.charAt(crtPosition.y));
  }

  return {
    dif,
    s1Result,
    s2Result
  };
}
