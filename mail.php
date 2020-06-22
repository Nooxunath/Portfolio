<?php
if(isset( $_POST['nom'])){
$name = $_POST['nom'];}
if(isset( $_POST['email'])){
$email = $_POST['email'];}
if(isset( $_POST['message'])){
$message = $_POST['message'];}
if(isset( $_POST['sujet'])){
$subject = $_POST['sujet'];}

$content="From:".$name." \n Email:". $email." \n Message:". $message;
$recipient = "matohoundev@gmail.com";
$mailheader = "From:".$email." \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email envoyé !";
?>