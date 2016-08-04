<?php
                    /**
                *isset() - проверяет на наличие переменной/значения (равно NULL или нет)
                *empty() - проверяет переменную на пустоту. Обращаю внимание, 0 - для нее тоже пустота!
                    **/
if( isset($_POST['full-name'],$_POST['phone-number'],$_POST['e-mail'],$_POST['company-name']) ) {
 $name = trim($_POST['name']);
 $email = trim($_POST['e-mail']);
 $phone = trim($_POST['phone-number']);
 $company = trim($_POST['company-name']);
  if(empty($name) || empty($email) || empty($phone) || empty($company)) { //если что то не ввели
   echo 'Вы заполнили не все поля!';
  }
  else { //все поля заполнены, отправляем
   $mailto = "skflaum@gmail.com";
   $subject = 'Сообщение с сайта';
//формируем текст сообщения
   $message  = 'Сообщение от пользователя <b>'.$name.'</b><br />';
   $message .= 'E-mail пользователя: <a href="mailto:' . $email . '">' . $email . '</a><br />';
   $message .= 'Номер телефона:<br />' . $phone;
	 $message .= 'Название компании:<br />' . $company;
//формируем заголовки (кодировку только, остальное сами добавите по желанию)
   $headers = 'Content-type: text/html; charset=windows-1251';
//отправляем письмо
   $mail = mail($mailto, $subject, $message, $headers);
//проверяем отправку
    if(TRUE === $mail) echo '<h2>Ваше сообщение успешно отправлено!</h2>';
    else echo '<h2>Произошла ошибка при отправке сообщения.</h2>';
//проверку можно записать короче при помощи тернарного оператора, вот так:
//  echo (TRUE === $mail) ? 'Ваше сообщение успешно отправлено!' : 'Произошла ошибка при отправке сообщения.' ;
//тогда нужно будет раскомментировать строчку выше и закомментировать строчки выше с проверкой
  }
}
?>
