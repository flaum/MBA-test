<?php
	$otvet = mail("slflaum@gmail.com", "Форма регистрации", "Получино письмо - Имя: $_POST[full-name]\ne-mail: $_POST[e-mail]\nтелефон: $_POST[phone-number], название компании: $_POST[company-name]");

	if ($otvet) {
		echo "<p>Письмо отправлено</p>";
	} else {
		echo "<p>Письмо НЕ отправлено</p>"
	}
?>
