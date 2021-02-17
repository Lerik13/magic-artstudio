<?php
session_start();
//echo $_REQUEST['code'] ." - ".  $_SESSION['random_number'];

//if( isset($_REQUEST['code'], $_SESSION['random_number']) && strtolower($_REQUEST['code']) == strtolower($_SESSION['random_number']) ){

	$email = $_REQUEST['email'];
	$name = $_REQUEST['username'];
	$phone = $_REQUEST['phone'];
	$address = $_REQUEST['address'];
	$date = $_REQUEST['date'];
	//$service = $_REQUEST['service'];
	$add_info = $_REQUEST['add_info'];
	$form_page = $_REQUEST['form_page'];

	
	$to = "lerik13@gmail.com, info@magic-artstudio.com";
	$subject = "message from WEB-site {$name} {$date} {$phone}";
	
	$add_service = "";
	if (isset($_REQUEST['check-bt-form']) && ($_REQUEST['check-bt-form'][0] == true)){
		$add_service = "Balloon Twisting";
	}
	if (isset($_REQUEST['check-bm-form']) && ($_REQUEST['check-bm-form'][0] == true)){
		$add_service = "Bubble Machine";
	}
	if (isset($_REQUEST['check-sb-form']) && ($_REQUEST['check-sb-form'][0] == true)){
		$add_service .= empty($add_service) ? "Surprise-balloon": ", Surprise-balloon";
		//$add_service .= "Surprise-balloon, ";
	}
	if (isset($_REQUEST['check-fp-form']) && ($_REQUEST['check-fp-form'] == true)){
		$add_service .= empty($add_service) ? "Face Painting": ", Face Painting";
	}

	$arr_message = array(
		'Name: ' 	=> $name,
		'Email: ' => $email,
		'Phone: ' => $phone,
		'Address:' => $address,
		'Date of event:'	=> $date,
		//'Service:' => $service,
		'Information:' => $add_info,
		'Add Service:' => $add_service,
		'form page:' => $form_page
	);

	foreach ($arr_message as $key => $value) {
		$txt_message .= "<b>".$key."</b> ".$value."<br>";
	};

	$token = "746839506:AAGBunRBjF5iAZiNssttUXpTcHl1RNRSxY";
	$chat_id = "-370240141";
	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt_message}","r");


	$header = "Content-type: text/html; charset=utf-8\r\n";
	$header .= "MIME-Version: 1.0\r\n";

	$send = mail($to, $subject, $txt_message, $header);

	if ($send == 'true'){		
		echo 1;
	}
	else{		
		echo 0;
	}
/*}
else{	
	echo 0; // invalid code
}*/

?>
