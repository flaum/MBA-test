<?
		$to = "skflaum@gmail.com";
		$subject = "Заявка на консультацию";
		$message = "<html><head><title>'.$subject.'</title></head>";
		$message .= "<body><p>ФИО: ".$_POST['full-name']."</p><p>Email: ".$_POST['e-mail']."</p><p>Телефон: ".$_POST['phone-number']."</p><p>Компания: ".$_POST['company-name']."</p></body></html>";
		$headers = "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "Form: Отправитель <".$to.">\r\n";

		mail($to, $subject, $message, $headers);
?>
