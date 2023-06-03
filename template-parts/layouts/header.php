<?php $projectName = "Genesis Escape Website"; ?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="REFRESH" content="1800"/>
    <title><?= /** @var TYPE_NAME  */
        (isset($data['title'])) ? $data['title'] : ''; ?> - <?= $projectName ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <!--CSS-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/css/uikit.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullview/dist/fullview.min.css">
    <link rel="stylesheet" href="style.css?v=<?php echo(time()) ?>">

    <!--JS-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit-icons.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullview/dist/fullview.min.js"></script>
    <script src="js/resloader.js"></script>
    <script src="js/app.js?v=<?php echo(time()) ?>"></script>
</head>
<body class="">
<!--app-->
<div id="app" class="uk-height-viewport uk-offcanvas-content uk-overflow-hidden uk-position-relative">
    <nav class="header uk-navbar-container uk-navbar-transparent uk-position-top uk-position-fixed uk-position-z-index">
        <div class="uk-container uk-container-expand">
            <div uk-navbar>

                <div class="uk-navbar-left">
                    <a href="" class="uk-navbar-item uk-logo"><img style="height: 40px" src="images/logo-genesis-trang.png" alt=""></a>
                    <ul id="menu" class="uk-navbar-nav uk-visible@m">
                        <li><a href="#home">Trang chủ</a></li>
                        <li><a href="#selectroom">Đặt phòng</a></li>
                        <li><a href="#guidleplay">Hướng dẫn cách chơi</a></li>
                        <li><a href="#testimonials">Review</a></li>
                        <li><a href="#contact">Liên hệ</a></li>
                    </ul>

                </div>

                <div class="uk-navbar-right">
                    <div class="uk-navbar-item">
                        <button class="home__form__btn1 uk-button uk-button-secondary">Booking now</button>
                    </div>
                </div>

            </div>
        </div>
    </nav>