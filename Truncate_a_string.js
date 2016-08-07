function truncate(str, num) {
  var result;
  if (str.length <= num) {
    return str;
  }
  if (num > 3) {
    result = str.slice(0, num-3) + "...";
  }
  else {
    result = str.slice(0, num) + "...";
  }
  return result;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncate("A-", 1);
