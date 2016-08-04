var links;
var regForm;
var subscriptForm;
var inputs;
var formData;

$(function () {

links = $("a");
regForm = $(".registration__form");
subscriptForm = $(".page-footer__form");

function preventLinks() {
	for(var i = 0; i < links.length; i++) {
		if($(links[i]).attr("href") == "#") {
			$(links[i]).on("click", function(e) {
				e = e || event
				e.preventDefault();
			});
		}
	}
};

	regForm.submit(function (e) {
		e = e || event;
		inputs = $(this).find("input");
		formData = $(this).serialize();

		for(var i = 0; i < inputs.length; i++) {
			var x = 0;
			if($(inputs[i]).val() == "") {
				$(inputs[i]).css("border-color", "red");
				x = 1;
				if(i <= inputs.length - 1 && x == 1) {
					alert("Заполните все поля");
					return false;
				}
			} else {
				$(inputs[i]).css("border", "");
				console.log("prevent");
			}
		}
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "php/script.php",
			data: formData,
			success: function(msg) {
				console.log("Vse udalos");
			}
		})
	});

	subscriptForm.submit(function() {
		inputs = $(this).find("input");

		for(var i = 0; i < inputs.length; i++)
			if($(inputs[i]).val() == "") {
				alert("Заполните все поля!");
				return false;
			}
	});

	preventLinks();
});
