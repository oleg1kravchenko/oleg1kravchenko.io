<?php
  //Если форма отправлена
  if(isset($_POST['submit'])) {
 //Проверка Поля ИМЯ
  if(trim($_POST['name']) == '') {
  $hasError = true;
  } else {
  $name = trim($_POST['name']);
  }
 //Проверка поля ТЕМА
  if(trim($_POST['phone']) == '') {
  $hasError = true;
  } else {
  $phone = trim($_POST['phone']);
  }
 //Проверка правильности ввода EMAIL
  if(trim($_POST['email']) == '')  {
  $hasError = true;
  } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
  $hasError = true;
  } else {
  $email = trim($_POST['email']);
  }

 //Если ошибок нет, отправить email
  if(!isset($hasError)) {
  $emailTo = 'kravchenko1395@gmail.com'; //Сюда введите Ваш email
  $body = "Name: $name \n\nEmail: $email \n\nSubject: $phone \n\nComments:\n $comments";
  $headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
 mail($emailTo, $phone, $body, $headers);
  $emailSent = true;
  }
  }
  ?>