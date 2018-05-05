<?php
session_start();
$period_cookie = 25920000; // 30 дней (2592000 секунд)

if ($_GET) {
    setcookie("utm_source", $_GET['utm_source'], time() + $period_cookie);
    setcookie("utm_medium", $_GET['utm_medium'], time() + $period_cookie);
    setcookie("utm_term", $_GET['utm_term'], time() + $period_cookie);
    setcookie("utm_content", $_GET['utm_content'], time() + $period_cookie);
    setcookie("utm_campaign", $_GET['utm_campaign'], time() + $period_cookie);
}

if (!isset($_SESSION['utms'])) {
    $_SESSION['utms'] = array();
    $_SESSION['utms']['utm_source'] = '';
    $_SESSION['utms']['utm_medium'] = '';
    $_SESSION['utms']['utm_term'] = '';
    $_SESSION['utms']['utm_content'] = '';
    $_SESSION['utms']['utm_campaign'] = '';
}
$_SESSION['utms']['utm_source'] = $_GET['utm_source'] ? $_GET['utm_source'] : $_COOKIE['utm_source'];
$_SESSION['utms']['utm_medium'] = $_GET['utm_medium'] ? $_GET['utm_medium'] : $_COOKIE['utm_medium'];
$_SESSION['utms']['utm_term'] = $_GET['utm_term'] ? $_GET['utm_term'] : $_COOKIE['utm_term'];
$_SESSION['utms']['utm_content'] = $_GET['utm_content'] ? $_GET['utm_content'] : $_COOKIE['utm_content'];
$_SESSION['utms']['utm_campaign'] = $_GET['utm_campaign'] ? $_GET['utm_campaign'] : $_COOKIE['utm_campaign'];
?>
<!DOCTYPE html>
<html lang="en">
<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="UTF-8">
	<title> Камера Mini DX</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/css/css.css" type="text/css">
	<link rel="stylesheet" href="/css/prompt.css" type="text/css">
	<script src="/js/jquery.js"></script>
	<script src="/js/slick.js"></script>
	<script src="/js/slick.min.js"></script>
	<script src="/js/js.js"></script>

</head>
<body>

<section class="sect1">
	<header>
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-sm-8 col-xs-12 disp_n_768">
					<ul class="menu_top">
						<li><a href="#about">О камере Mini DX</a></li>
						<li><a href="#haract">Характеристики</a></li>
						<li><a href="#otzuvu">Отзывы</a></li>
						<li><a href="#komplect">Комплектация</a></li>
					</ul>
				</div>
				<div class="col-md-4 col-sm-4 col-xs-12 ">
					<a class="btn btn-danger btn_top" href="#form1">заказать по скидке</a>
				</div>

			</div>
		</div>
		<div class="clearfix"></div>
	</header>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="text1" style="color: #5fbb28"> Узнайте, о чем говорят и что делают другие за Вашей спиной!
					&nbsp;&nbsp; </p>
				<p class="text1" style="color: #b1c515"> Крошечная камера MINI DX раскроет все секреты. </p>
			</div>
		</div>
	</div>
	<div class="container cont3_sect1 text-center">
		<div class="row">
			<div class="col-md-5 col-sm-6">
				<img class="img_1" src="/img/animati.gif">
			</div>

			<div class="col-md-3 col-sm-6 text-center" id="form1">
				<h2 style="color: #fff">До конца скидки осталось:</h2>
				<hr>
				<div class="countbox  clearfix">
					<div class="countbox-num">
						<div class="countbox-hours1"><span></span>1</div>
						<div class="countbox-hours2"><span></span>2</div>
						<div class="countbox-hours-text">часов</div>
					</div>
					<div class="countbox-space">:</div>
					<div class="countbox-num">
						<div class="countbox-mins1"><span></span>5</div>
						<div class="countbox-mins2"><span></span>5</div>
						<div class="countbox-mins-text">минут</div>
					</div>
					<div class="countbox-space">:</div>
					<div class="countbox-num">
						<div class="countbox-secs1"><span></span>4</div>
						<div class="countbox-secs2"><span></span>4</div>
						<div class="countbox-secs-text">секунд</div>
					</div>
				</div>
				<div class="bg_price text-left">
					<div class="old_price">1062 грн</div>
					<div class="new_price">499 грн</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 disp_n_992">
				<p class="t1_cont3_sect1">Купите сегодня </p>
				<p class="t1_cont3_sect1">и получите скидку</p>
				<form method="post" action="zakaz.php" class="form1">
					<div class="row">
						<div class="col-md-12">
							<input name="name" placeholder="Введите ваше имя" required="" type="text">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<input name="phone" placeholder="Введите ваш телефон" class="maskPhone" required=""
							       type="tel">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<button type="submit" class="btn btn-danger"> заказать по скидке</button>
						</div>
					</div>
					<input value=" " name="title" type="hidden">
					<input value="499" name="price" type="hidden">
					<input value="41" name="product_id" type="hidden">
					<input value="" name="uid" type="hidden">
				</form>
			</div>
			<div class="col-sm-12 disp_b_992">
				<p class="t1_cont3_sect1">Успей заказать по</p>
				<p class="t2_cont3_sect1">скидке -53%</p>
				<form method="post" action="zakaz.php" class="form1">
					<div class="row">
						<div class="col-md-12">
							<input name="name" placeholder="Введите ваше имя" required="" type="text">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<input name="phone" placeholder="Введите ваш телефон" class="maskPhone" required=""
							       type="tel">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<button type="submit" class="btn btn-danger">
								заказать по скидке
							</button>
						</div>
					</div>
					<input value=" " name="title" type="hidden">
					<input value="499" name="price" type="hidden">
					<input value="41" name="product_id" type="hidden">
					<input value="" name="uid" type="hidden">
				</form>
			</div>
		</div>
	</div>
</section>
<section class="sect2">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<p class="text1" style="color: #5fbb28"> Теперь у Вас все будет под контролем! </p>
				<p class="t1_sect2">Неограниченная область применения</p>
			</div>
		</div>
	</div>
	<div class="container cont2_sect2">
		<div class="row">
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig1.jpg">
				<p class="t1_trig">Охрана квартиры или офиса</p>
				<p class="t2_trig">Узнайте, что твориться в помещении в Ваше отсутствие. Камера сработает на датчик
					звука. </p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig2.jpg">
				<p class="t1_trig">Споры на дороге</p>
				<p class="t2_trig">Зафиксируйте место ДТП или произвол работников полиции. Ведь видео – это
					неопровержимое доказательство.</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig3.jpg">
				<p class="t1_trig">Экшн-камера</p>
				<p class="t2_trig">С легкостью прикрепите камеру к велосипеду или квадрокоптеру.</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig4.jpg">
				<p class="t1_trig">Найдите вора.</p>
				<p class="t2_trig">Кто-то постоянно у Вас ворует или делает пакости во дворе? Разоблачите злодея
					видеодоказательством!</p>
			</div>
		</div>
	</div>
	<div class="container cont2_sect2">
		<div class="row">
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig5.jpg">
				<p class="t1_trig">Сохраните воспоминания</p>
				<p class="t2_trig">Так хочется оставить в памяти больше трогательных моментов!</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig6.jpg">
				<p class="t1_trig">Подозреваете в измене?</p>
				<p class="t2_trig">Достаточно незаметно установить камеру в спальне и включить датчик звука.</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig7.jpg">
				<p class="t1_trig">Видеорегистратор</p>
				<p class="t2_trig">Преимуществом является незаметный размер камеры и большая длительность работы от
					аккумулятора</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="img-rounded" src="/img/trig8.jpg">
				<p class="t1_trig">Кто-то курит в подъезде</p>
				<p class="t2_trig">Просто установите камеру в подъезде или на детской площадке, и Вы точно узнаете, кто
					загрязняет никотином воздух.</p>
			</div>
		</div>
	</div>
</section>


<section class="sect3" id="about">
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-6 text-center">
				<iframe class="sect3-video" src="https://www.youtube.com/embed/GBiRD78AqNg" frameborder="0" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen></iframe>
			</div>
			<div class="col-md-6 col-sm-6">
				<p class="t1_sect3">Преимущества Mini DX камеры</p>
				<p class="t2_sect3">Это многофункциональное устройство может
					одновременно записывать качественное видео со звуком и сохранять
					результаты на внешний носитель. Кроме того, это устройство может быть
					использовано в качестве шпионской видеокамеры для ведения наблюдения.
					Необычный внешний вид этой миниатюрной камеры ничем не выдает в нем
					устройство наблюдения. А запись видео со скоростью 30 кадров в секунду и
					разрешением 720 x 480 точек, отвечают современным требованиям
					оперативного наблюдения. Возможность установки карт памяти SD объемом до
					32 Гб (в комплект не входит) и аккумулятор повышенной ёмкости позволяют
					вести непрерывную запись видео в течение нескольких часов.</p>
				<p class="p_btn_video"><a class="btn btn-danger btn_video" data-toggle="modal" data-target="#zakaz">получить
						консультацию</a></p>
			</div>
		</div>
	</div>
</section>

<section class="sect4" id="haract">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<p class="text1_sect4">Фото камеры Mini DX </p>
			</div>
		</div>
	</div>
	<div class="container cont2_sect4">
		<div class="row">
			<div class="container cont2_sect2">
				<div class="row">
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/good1.jpg">
						<p class="t1_trig">Миниатюрный размер</p>
						<p class="t2_trig">Легкая и незаметная камера, которая всегда поместится в карман</p>
					</div>
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/good2.jpg">
						<p class="t1_trig">Размеры камеры</p>
						<p class="t2_trig">5,6 cм х 2 cм х 2 cм.</p>
					</div>
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/good3.jpg">
						<p class="t1_trig">Комплектация камеры.</p>
						<p class="t2_trig">Комплектация более детально указана ниже в описании</p>
					</div>
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/good4.jpg">
						<p class="t1_trig">Глазок камеры.</p>
						<p class="t2_trig">Диаметр 2 мм. Этого достаточно для качественной записи видео</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="bro text-center">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<p class="text1_sect4">ОСТЕРЕГАЙТЕСЬ ПОДДЕЛОК!</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<div class="bro-images">
					<img src="/img/bro-no.jpg" alt="">
					<p class="no-bro">Камера, которую продают 90% интернет магазинов!</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="bro-images">
					<img src="/img/bro-yes.jpg" alt="">
					<p class="yes-bro">Оригинальная Mini DX Camera в упаковке</p>
				</div>
			</div>
		</div>
	</div>
</section>
<!--     Комплектация       -->
<section class="sect4" id="haract">
	<div class="container">
		<div class="row">
			<div class="col-md-12 text-center">
				<p class="text1_sect4">Комплектация камеры Mini DX </p>
			</div>
		</div>
	</div>
	<div class="container cont2_sect4">
		<div class="row">
			<div class="container cont2_sect2">
				<div class="row">
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/kmp1.jpg">
						<p class="t1_trig">Видео камера Mini DX.</p>
						<p class="t2_trig">Записывает видео с четким звуком. Вы услышите каждое слово, кто, о чем
							говорил за Вашей спиной</p>
					</div>
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/kmp2.png">
						<p class="t1_trig">Крепление на плоскую поверхность на шурупах</p>
						<p class="t2_trig">Легко крепится на короб двери, в шифоньер или под крышей дома</p>
					</div>
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/kmp3.png">
						<p class="t1_trig">Магнитное крепление на плоскую поверхность</p>
						<p class="t2_trig">Крепится на любую металлическую поверхность, благодаря сильным магнитам.</p>
					</div>
					<div class="col-md-3 col-sm-3 text-center">
						<img class="img-rounded" src="/img/kmp4.png">
						<p class="t1_trig">Крепление на тонкую поверхность или одежду</p>
						<p class="t2_trig">Крепление в виде прищепки. Есть возможность поворота крепления на 360
							градусов.</p>
					</div>
				</div>
				<div class="row">
					<!--	<div class="col-md-3 col-sm-3 text-center">
							<img class="img-rounded" src="images/kmp5.png"/>
							<p class="t1_trig">Силиконовый чехол с прорезью под ремень</p>
							<p class="t2_trig">Сможет защитить камеру от попадания влаги.</p>
						</div> -->
					<div class="col-md-4 col-sm-4 text-center">
						<img class="img-rounded" src="/img/kmp6.png">
						<p class="t1_trig">Ремешок на шею</p>
						<p class="t2_trig">Для переноски камеры на шее.</p>
					</div>
					<div class="col-md-4 col-sm-4 text-center">
						<img class="img-rounded" src="/img/kmp7.png">
						<p class="t1_trig">USB кабель</p>
						<p class="t2_trig">Используется для подключения камеры к компьютеру, а также для её зарядки.</p>
					</div>
					<div class="col-md-4 col-sm-4 text-center">
						<img class="img-rounded" src="/img/kmp8.jpg">
						<p class="t1_trig">Инструкция</p>
						<p class="t2_trig">Мы сами подготовили для Вас инструкцию с детальным руководством по
							использованию камеры.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--     Комплектация       -->
<section class="sect6" id="otzuvu">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="text1_sect5 text-center">Отзывы</p>
				<div class="slider reviews">
					<div class="box_otz box_otz1">
						<img class="pull-left otz1" src="img/otz1.jpg">
						<div class="media-body">
							<p class="name_otz">Андрей (г. Киев)</p>
							<p class="text_otz">Классная камера, много креплений, на все случаи жизни. Проста в
								управлении, достаточно прочитать инструкцию. Кстати, как говорил менеджер, инструкцию
								писали специально для обычного пользователя. Действительно, с настройкой камеры не
								возникло совершенно никаких проблем. Качество изображения хорошее. Использую в
								путешествиях, снимаю приятные моменты. Очень доволен покупкой!</p>
						</div>
						<div class="clearfix"></div>
					</div>

					<div class="box_otz box_otz1">
						<img class="pull-left otz1" src="img/otz2.jpg">
						<div class="media-body">
							<p class="name_otz">Олег (г. Днепропетровск)</p>
							<p class="text_otz">У нас в подъезде постоянно кто-то курил. А у нас часто дети гуляют на
								улице и бегают туда - сюда. Окна у нас не открывающиеся и дым почти не выветривался.
								Купили с с женой эту камеру, поставили в подъезде и в тот же день выяснили, кто это был.
								Пригрозили им заявление написать, и они перестали! Покупкой довольны!</p>
						</div>
						<div class="clearfix"></div>
					</div>

					<div class="box_otz box_otz1">
						<img class="pull-left otz1" src="img/otz3.jpg">
						<div class="media-body">
							<p class="name_otz">Николай (г. Львов)</p>
							<p class="text_otz">Хочу поблагодарить менеджеров за быстрое оформление заказа и быструю
								доставку в течение 1ГО ДНЯ! К тому же отличная камера за небольшие деньги. Сама
								маленькая да удаленькая :))) Спасибо!! Моя оценка 5 за 6 дней использования!</p>
						</div>
						<div class="clearfix"></div>
					</div>

					<div class="box_otz box_otz1">
						<img class="pull-left otz1" src="img/otz4.jpg">
						<div class="media-body">
							<p class="name_otz">Александр (г. Одесса)</p>
							<p class="text_otz">Получил камеры MINI DX 2 штуки, все работает. Ставил флешку на 32 ГБ.
								Можно от ПК заряжать или подцепить от блока. Качество видео и звук в норме. За такую
								сумму - отличный товар!</p>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="sect7">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="text1_sect5 text-center">приемущество компании</p>
			</div>
		</div>
	</div>
	<div class="container cont2_sect7">
		<div class="row">
			<div class="col-md-3 col-sm-3 text-center">
				<img class="icon" src="/img/icon1.png">
				<p class="t1_icon">Быстрая обработка заказа</p>
				<p class="t2_icon">(90% заявок обрабатываются в течении 10 минут)</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="icon" src="/img/icon2.png">
				<p class="t1_icon">Полностью сертифицированная продукция</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="icon" src="/img/icon3.png">
				<p class="t1_icon">Доставка от 1го до 3х дней с момента оформления заказа;</p>
			</div>
			<div class="col-md-3 col-sm-3 text-center">
				<img class="icon" src="/img/icon4.png">
				<p class="t1_icon">Оплата по факту получения</p>
			</div>
		</div>
	</div>
</section>
<section class="sect8" id="komplect">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="text1_sect5 text-center">Функции. комплектация. </p>
			</div>
		</div>
	</div>
	<div class="container cont2_sect8">
		<div class="row">
			<div class="col-md-6 col-sm-6">
				<div class="block1_sect8">
					<p class="t2_sect8">основные функции</p>
					<ul class="list_sect8">
						<li>1. Чёткое качество съемки в формате 720х480</li>
						<li>2. Вес: 50 грамм</li>

						<li>3. Поддерживает карты памяти MicroSD до 32 GB</li>
						<li>4. Угол обзора: Панорамная съемка 360 градусов, Наклон 150 градусов</li>
						<li>5. Зарядка от USB от компьютера</li>
						<li>6. Встроенный датчик звука, который
							позволяет включать видеозапись лишь в моменты, когда звук в радиусе
							съемки превышает 65 Децибел. (по умолчанию датчик звука выключен и мини
							камера включается посредством нажатия кнопки на корпусе).
						</li>

						<li>7. Штамп даты и времени. На
							видео накладывается дата и время, когда записывался конкретный участок
							видео. Полезно для охраны помещений, когда камера стоит на датчике
							звука.
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-6 col-sm-6">
				<div class="block1_sect8">
					<p class="t2_sect8">комплектация</p>
					<ul class="list_sect8">
						<li>1. Камера <span>Mini DX</span></li>
						<li>2. Магнитное крепление на плоскую поверхность</li>
						<li>3. Крепление на плоскую поверхность на шурупах</li>
						<li>4. Крепление на тонкую поверхность или одежду</li>
						<li>5. Ремешок на шею</li>
						<li>6. USB кабель</li>
						<li>7. Инструкция</li>
					</ul>
					<p class="p_btn_video text-center">
						<a target="_blank" class="btn btn-danger btn_instr"
						   href="/videoregistrator.pdf">Посмотреть инструкцию на русском языке</a>
						<a href="/videoregistrator.pdf" class="btn-download"
						   download="" style="margin: 15px 0 0 0;display: inline-block;">Скачать инструкцию</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="sect_foot">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="text1">Спешите купить камеру MINI DX по акционной цене</p>
			</div>
		</div>
	</div>
	<div class="container cont3_sect1 text-center" id="konsult">
		<div class="row">
			<div class="col-md-4 col-sm-12 disp_n_992">
				<p class="t1_cont3_sect1">Успей заказать по</p>
				<p class="t2_cont3_sect1">скидке -53%</p>
				<form method="post" action="zakaz.php" class="form1">
					<div class="row">
						<div class="col-md-12">
							<input name="name" placeholder="Введите ваше имя" required="" type="text">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<input name="phone" placeholder="Введите ваш телефон" class="maskPhone" required=""
							       type="tel">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<button type="submit" class="btn btn-danger">
								Заказать по скидке
							</button>
						</div>
					</div>
					<input value=" " name="title" type="hidden">
					<input value="499" name="price" type="hidden">
					<input value="41" name="product_id" type="hidden">
					<input value="" name="uid" type="hidden">
				</form>
			</div>
			<div class="col-md-3 col-sm-6 text-center">
				<p class="text_count">До конца скидки осталось:</p>
				<div class="countbox  clearfix">
					<div class="countbox-num">
						<div class="countbox-hours1"><span></span>1</div>
						<div class="countbox-hours2"><span></span>2</div>
						<div class="countbox-hours-text">часов</div>
					</div>
					<div class="countbox-space">:</div>
					<div class="countbox-num">
						<div class="countbox-mins1"><span></span>5</div>
						<div class="countbox-mins2"><span></span>5</div>
						<div class="countbox-mins-text">минут</div>
					</div>
					<div class="countbox-space">:</div>
					<div class="countbox-num">
						<div class="countbox-secs1"><span></span>4</div>
						<div class="countbox-secs2"><span></span>4</div>
						<div class="countbox-secs-text">секунд</div>
					</div>
				</div>
				<div class="bg_price text-right">
					<div class="old_price">1062 грн</div>
					<div class="new_price">499 грн</div>
				</div>
			</div>
			<div class="col-md-5 col-sm-6">
				<img class="img_1" src="/img/animati.gif">
			</div>
			<div class="col-sm-12 disp_b_992">
				<p class="t1_cont3_sect1">успей заказать по</p>
				<p class="t2_cont3_sect1">скидке -53%</p>
				<form method="post" action="zakaz.php" class="form1">
					<div class="row">
						<div class="col-md-12">
							<input name="name" placeholder="Введите ваше имя" required="" type="text">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<input name="phone" placeholder="Введите ваш телефон" class="maskPhone" required=""
							       type="tel">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<button type="submit" class="btn btn-danger">
								заказать по скидке
							</button>
						</div>
					</div>
					<input value=" " name="title" type="hidden">
					<input value="499" name="price" type="hidden">
					<input value="41" name="product_id" type="hidden">
					<input value="" name="uid" type="hidden">
				</form>
			</div>
		</div>
	</div>
</section>
<footer>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-sm-4">
				<p class="copy">ТОВ «SALEZ» – ЄГРПОУ 36525134 АДРЕС: 03038, <br>Г. КИЕВ, УЛ. Н. ГРИНЧЕНКО, 4</p>
			</div>
			<div class="col-md-4 col-sm-4 text-center">
				<p class="privacy"><a href="-page=politics.htm" target="_blank">Политика конфиденциальности</a></p>
			</div>

		</div>

	</div>
</footer>
<!-- Модальные окна для кнопок -->
<div class="modal fade" id="zakaz" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
			</div>
			<div class="modal-body">
				<p class="t1_cont3_sect1" style="text-align: center; color: #202020!important;">Успей заказать по</p>
				<p class="t2_cont3_sect1" style="text-align: center; color: #202020!important;">скидке -53%</p>
				<form method="post" action="zakaz.php" class="form1"
				      style="max-width: 450px; margin: 0 auto;">
					<div class="row">
						<div class="col-md-12">
							<input name="name" placeholder="Введите ваше имя" required="" type="text">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<input name="phone" placeholder="Введите ваш телефон" class="maskPhone" required=""
							       type="tel">
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 col-sm-12">
							<button type="submit" class="btn btn-danger">
								Заказать по скидке
							</button>
						</div>
					</div>
					<input value=" " name="title" type="hidden">
					<input value="499" name="price" type="hidden">
					<input value="41" name="product_id" type="hidden">
					<input value="" name="uid" type="hidden">
				</form>
			</div>
		</div>
	</div>
</div>

<link href="/css/popup-m1-style.css" rel="stylesheet" type="text/css">
<script src="/js/popup-m1.js" type="text/javascript"></script>

<script type="text/javascript">
	$(function () {
		M1.initComebacker(3000);
		var M1Text = {
			'validation_name': 'Укажите корректные ФИО.',
			'validation_phone1': 'Номер телефона может содержать только цифры, символы "+", "-", "(", ")" и пробелы.',
			'validation_phone2': 'В вашем телефоне слишком мало цифр.',
			'comebacker_text': 'ВНИМАНИЕ'
		};
		M1.validateAndSendForm(false, M1Text);
	});
</script>

<script type="text/javascript">
	$(function () { // плавный скролл
		$("a[href^='#']").click(function () {
			let _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top + "px"});
			return false;
		});
	});
</script>

<div id="selenium-highlight"></div>
</body>
<div id="overlay-popup-m1"></div>
<div id="m1-form" class="m1modal"><a class="close-m1"></a>
	<div>
		<div class="popup-m1-title">Вам понравилось это предложение?</div>
		<div class="popup-m1-cont">
			<div class="popup-m1-text1">Мы расскажем Вам все об этом товаре, предложим наилучшие условия и ознакомим с
				подходящими акционными предложениями!
			</div>
			<form method="POST" action="zakaz.php" class="popup-m1-form" >
				<input name="name" placeholder="Введите ваше имя" required="" type="text">
				<input class="phone" name="phone" placeholder="Введите телефон" required="" type="text">
				<button>Перезвоните мне</button>
				<input name="is_popup" value="1" type="hidden"><input name="from_recall_button" value="0" type="hidden">
			</form>
			<div class="popup-m1-text2">Оператор перезвонит Вам через 5-10 минут</div>
		</div>
	</div>
</div>
</html>