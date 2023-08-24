//  Task 1
function accum(s) {
  var index, letter, result;
  index = 1;
  result = [];

  for (var letter, _pj_c = 0, _pj_a = s, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    letter = _pj_a[_pj_c];
    letter = letter * index;
    letter = letter.capitalize();
    index += 1;
    result.append(letter);
  }

  return "-".join(result);
}

// Task 2
function check_concatenated_sum(num, n) {
  return n && num % Number.parseInt("1" * n) === 0;
}
