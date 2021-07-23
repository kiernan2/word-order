$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let input = ($("input#input").val());
    let words = input.split(" ");
    let list = [];
    let number = [];
    words.forEach(function(element) {
      if (list.includes(element)) {
      let target = list.indexOf(element)
        number[target] += 1;
      } else {
        list.push(element);
        number.push(1);
      }
    });
    list.forEach(function(element) {
      let target = list.indexOf(element)
      $("#output").append(element + " " + number[target] + " ");
    });
  });
});