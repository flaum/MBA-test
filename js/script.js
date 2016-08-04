var links;
var regForm = $(".registration__form");
var subscriptForm;
var inputs;
var formData;

// $(document).ready(function() {
// 	regForm.validate({
// 		rules: {
// 			full-name: {
// 				required: true,
// 				minlength: 9
// 			},
//
// 			phone-number: {
// 				required: true,
// 				number: true
// 			},
//
// 			e-mail: {
// 				required: true
// 			},
//
// 			company-name: {
// 				required: true
// 			}
// 		},
//
// 		messages: {
// 			full-name: {
// 				required: "Это поле обязательно для заполнения",
// 				minlength: "ФИО должно быть не менее 9 символов"
// 			},
//
// 			phone-number: {
// 				required: "Это поле обязательно для заполнения",
// 				number: "Введитеномер в числовом формате"
// 			},
//
// 			e-mail: {
// 				required: "Это поле обязательно для заполнения"
// 			},
//
// 			company-name: {
// 				required: "Это поле обязательно для заполнения"
// 			}
// 		}
// 	};)
// });

$(function () {

	links = $("a");
	regForm
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
		};
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "php/script.php",
			data: formData,
			success: function(msg) {
				console.log("Vse udalos");
			}
		});
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
