<?php
//***************** Страница с завершением заказа ******************
// формируем массив с товарами в заказе (если товар один - оставляйте только первый элемент массива)
$products_list = array(
    1 => array( 
            'product_id' => '4',    //код товара (из каталога CRM)
            'price'      => '499', //цена товара 1
            'count'      => '1'    //количество товара 1
    )
);
$products = urlencode(serialize($products_list));
// параметры запроса

$data = array(
    'key'             => '8b74c096c257be26f57295a79c4735b5', //Ваш секретный токен
    'order_id'        => number_format(round(microtime(true)*10),0,'.',''), //идентификатор (код) заказа (*автоматически*)
    'country'         => 'UA',                      // Географическое направление заказа
    'office'          => 'отдел',                   // Офис (id в CRM)
    'products'        => $products,                 // массив с товарами в заказе
    'bayer_name'      => $_GET['name'],             // покупатель (Ф.И.О)
    'phone'           => $_GET['phone'],           // телефон
    'email'           => $_GET['email'],           // электронка
    'comment'         => 'Spy Camera',            // комментарий
    'site'            => $_SERVER['SERVER_NAME'],  // сайт отправляющий запрос
    'ip'              => $_SERVER['REMOTE_ADDR'],  // IP адрес покупателя
    'delivery'        => $_GET['delivery'],        // способ доставки (id в CRM)
    'delivery_adress' => $_GET['delivery_adress'], // адрес доставки
    'payment'         => 'способ оплаты',          // вариант оплаты (id в CRM)
    'utm_source'      => $_SESSION['utms']['utm_source'],  // utm_source 
    'utm_medium'      => $_SESSION['utms']['utm_medium'],  // utm_medium 
    'utm_term'        => $_SESSION['utms']['utm_term'],    // utm_term   
    'utm_content'     => $_SESSION['utms']['utm_content'], // utm_content    
    'utm_campaign'    => $_SESSION['utms']['utm_campaign'] // utm_campaign
);
 
// запрос
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'http://tar4egmillioner.lp-crm.top/api/addNewOrder.html');
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
$out = curl_exec($curl);
curl_close($curl);
//$out – ответ сервера в формате JSON
?>
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
        <title>Поздравляем! Ваш заказ принят!</title>
        <style type="text/css">
            body {
                line-height: 1;
                height: 100%;
                font-family: Arial;
                font-size: 15px;
                color: #313e47;
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;
                background: url('./img/bg-ok.png');
                background-repeat: no-repeat;
                background-position: center;
                background-position-y: 16rem;
            }
            h2 {
                margin: 0;
                padding: 0;
                font-size: 36px;
                line-height: 44px;
                color: #313e47;
                text-align: center;
                font-weight: bold;
            }
            a {
                color: #69B9FF;
            }
            .list_info li span {
                width: 150px;
                display: inline-block;
                font-weight: bold;
                font-style: normal;
            }
            .list_info {
               text-align: left;
               display: inline-block;
               list-style: none;
               margin-top: -10px;
               margin-bottom: -11px;
            }
            .list_info li {
                margin: 11px 0px;
            }
            .fail {
                margin: 10px 0 20px 0px;
                text-align: center;
            }
            .email {
                position: relative;
                text-align: center;
                margin-top: 40px;
            }
            .email input {
                height: 30px;
                width: 200px;
                font-size: 14px;
                padding-right: 10px;
                padding-left: 10px;
                outline: none;
                -webkit-border-radius: 5px;
                -moz-border-radius: 5px;
                border-radius: 5px;
                border: 1px solid #B6B6B6;
                margin-bottom: 10px;
            }
            .block_success {
                max-width: 960px;
                padding: 70px 30px 70px 30px;
                margin: -50px auto;
            }
            .success {
                text-align: center;
            }
        </style>        
    </head>
    <body>
	<script type='text/javascript'> var el = new Image(); el.src = 'http://media-ks.net?offerUID=16519&hashID=24b9b05a83714e2184a655963133dcaf8738eba8&conversion'; </script>
        <div class="block_success">					
            <h2 style="text-transform: uppercase;">Поздравляем! Ваш заказ принят!</h2>
            <p class="success">
                В ближайшее время с вами свяжется оператор для подтверждения заказа. Пожалуйста, включите ваш контактный телефон.
            </p>
            <h3 class="success">
                Пожалуйста, проверьте правильность введенной Вами информации.
            </h3>
            <div class="success">
                <ul class="list_info">
                    <li><span>Ф.И.O.:  </span><span id="client"><?=$_GET['name']?></span></li>
                    <li><span>Телефон: </span><span id="tel"><?=$_GET['phone']?></span></li>
                </ul>
                <br/><span id="submit"></span>
            </div>
            <p class="fail success">Если вы ошиблись при заполнени формы, то, пожалуйста, <a href="javascript: history.back(-1);">заполните заявку еще раз</a></p>
            
			
			
		<div>
		
		<a href=""></div></a>
		<a href=""></div></a>
		<a href=""></div></a>
		
		</div>
		<div>
		
		<a href=""></div></a>
		<a href=""></div></a>
		<a href=""></div></a>
		
		</div>
			
        </div>
		

<script type="text/javascript">
    var __gra = __gra || [];
    __gra.mid = 10429;
    (function() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "http:" + "//js.grt" + "01.com/" + "gra_min_new.js";
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    })();
</script>

</body>
</html>