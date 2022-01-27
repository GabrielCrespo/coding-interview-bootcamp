function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const chars = {};

  const a = str.replace("/[^w]/g", "").toLowerCase();

  for (let i = 0; i < a.length; i++) {
    if (!chars[a[i]]) {
      chars[a[i]] = 1;
    } else {
      chars[a[i]]++;
    }
  }

  return chars;
}

module.exports = anagrams;
