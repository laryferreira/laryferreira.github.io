/* FAQ */
var faq = document.getElementsByClassName("faq_page");document.getElementsByClassName("headline");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
let inputBox = document.querySelector(".input-box"),
searchIcon = document.querySelector(".icon"),
closeIcon = document.querySelector(".close-icon");

searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

function Tablefilter (phrase, _id) {
  var words = phrase.value.toLowerCase().split(" ");
  var table = document.getElementById(_id);
  var ele;
  for (var r = 0; r < table.rows.length; r++ ) {
    ele = table.rows[r].innerHTML.replace(/<[^>]+>/g,"");
    var displayStyle = 'none';
    for (var i = 0; i < words.length; i++) {
      if (ele.toLowerCase().indexOf(words[i])>=0) {   displayStyle = '';}
      else { displayStyle = 'none';  break; }
    }
    table.rows[r].style.display = displayStyle;
  }
}

function countDisplayedRows(_id)
{
      var hiddenRowCount = 0;
      var table = document.getElementById(_id);
      var rows = table.getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) {
        if(rows[i].style.display == 'none') hiddenRowCount++;
      }
      shown = rows.length - hiddenRowCount;
      document.getElementById('DisplayCount').innerHTML = shown;
}