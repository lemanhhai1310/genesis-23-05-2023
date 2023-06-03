<?php $data["title"] = "Home"; ?>
<?php $bodyClass = '' ?>
<?php require "template-parts/layouts/header.php"; ?>
<div id="fullview">
    <div data-tooltip="Trang chủ" id="home" class="bg" data-src="https://genesis-escape.vn/img/1.png" uk-img>
        <div class="uk-section-large uk-width">
            <div class="uk-container uk-container-expand">
                <div class="uk-flex-right" uk-grid>
                    <div class="uk-width-auto">
                        <div class="home__card uk-card uk-card-body w672">
                            <form class="uk-grid-small uk-form-stacked uk-grid-24-m" uk-grid>
                                <div class="uk-width-1-1">
                                    <legend class="home__form__legend uk-legend uk-text-center">Đặt phòng nhanh</legend>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-name">Họ và tên</label>
                                    <div class="uk-form-controls">
                                        <input class="home__form__input uk-input" id="form-stacked-name" type="text" placeholder="Nguyen Van A" aria-label="Nguyen Van A">
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-email">Email</label>
                                    <div class="uk-form-controls">
                                        <input class="home__form__input uk-input" id="form-stacked-email" type="email" placeholder="Nhập email của bạn" aria-label="Nhập email của bạn">
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-phone">Số điện thoại</label>
                                    <div class="uk-form-controls">
                                        <input class="home__form__input uk-input" id="form-stacked-phone" type="tel" placeholder="Nhập số điện thoại của bạn" aria-label="Nhập số điện thoại của bạn">
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-location">Vị trí</label>
                                    <div class="uk-form-controls">
                                        <div class="uk-width" uk-form-custom="target: > * > span:first-child">
                                            <select id="form-stacked-location" aria-label="Custom controls">
                                                <option value="">Chọn vị trí của bạn</option>
                                                <option value="1">Option 01</option>
                                                <option value="2">Option 02</option>
                                                <option value="3">Option 03</option>
                                                <option value="4">Option 04</option>
                                            </select>
                                            <button class="home__form__btnSelect uk-width uk-button uk-button-default" type="button" tabindex="-1">
                                                <span></span>
                                                <span class="uk-position-center-right uk-position-small" uk-icon="icon: chevron-down"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-phong">Phòng</label>
                                    <div class="uk-form-controls">
                                        <div class="uk-width" uk-form-custom="target: > * > span:first-child">
                                            <select id="form-stacked-phong" aria-label="Custom controls">
                                                <option value="">Chọn phòng</option>
                                                <option value="1">Option 01</option>
                                                <option value="2">Option 02</option>
                                                <option value="3">Option 03</option>
                                                <option value="4">Option 04</option>
                                            </select>
                                            <button class="home__form__btnSelect uk-width uk-button uk-button-default" type="button" tabindex="-1">
                                                <span></span>
                                                <span class="uk-position-center-right uk-position-small" uk-icon="icon: chevron-down"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-time">Giờ</label>
                                    <div class="uk-form-controls">
                                        <div class="uk-width" uk-form-custom="target: > * > span:first-child">
                                            <select id="form-stacked-time" aria-label="Custom controls">
                                                <option value="">Chọn giờ</option>
                                                <option value="1">Option 01</option>
                                                <option value="2">Option 02</option>
                                                <option value="3">Option 03</option>
                                                <option value="4">Option 04</option>
                                            </select>
                                            <button class="home__form__btnSelect uk-width uk-button uk-button-default" type="button" tabindex="-1">
                                                <span></span>
                                                <span class="uk-position-center-right uk-position-small" uk-icon="icon: chevron-down"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-number">Số lượng</label>
                                    <div class="uk-form-controls">
                                        <input class="home__form__input uk-input" id="form-stacked-number" type="number" value="1" placeholder="" aria-label="">
                                    </div>
                                </div>
                                <div class="uk-width-1-2">
                                    <label class="home__form__label uk-form-label" for="form-stacked-voucher">Voucher</label>
                                    <div class="uk-form-controls">
                                        <div class="uk-width" uk-form-custom="target: > * > span:first-child">
                                            <select id="form-stacked-voucher" aria-label="Custom controls">
                                                <option value="">Chọn voucher</option>
                                                <option value="1">Option 01</option>
                                                <option value="2">Option 02</option>
                                                <option value="3">Option 03</option>
                                                <option value="4">Option 04</option>
                                            </select>
                                            <button class="home__form__btnSelect uk-width uk-button uk-button-default" type="button" tabindex="-1">
                                                <span></span>
                                                <span class="uk-position-center-right uk-position-small" uk-icon="icon: chevron-down"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-1-1">
                                    <div class="uk-flex-middle uk-grid-small uk-grid-24-m uk-child-width-auto" uk-grid>
                                        <div class="uk-width-expand" uk-toggle="cls: uk-width-expand; mode: media; media: @m">
                                            <div class="uk-grid-small uk-grid-24-m uk-flex-middle uk-child-width-auto" uk-grid>
                                                <div>
                                                    <div class="home__form__txt">Tổng giá X2:</div>
                                                </div>
                                                <div>
                                                    <div class="home__form__price">300.000.000VND</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="home__form__btn1 uk-button uk-button-secondary">Reserve now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div data-tooltip="Hướng dẫn cách chơi" id="guidleplay" class="bg" data-src="https://genesis-escape.vn/images/room/bg/back_gone-min.png" uk-img><!-- Some Section --></div>
    <div data-tooltip="Đặt phòng" id="selectroom" class="bg" data-src="https://genesis-escape.vn/images/room/bg/back_gone-min.png" uk-img>
        <div class="uk-section-large uk-width">
            <div class="uk-container uk-container-expand">
                <div uk-grid>
                    <div class="uk-width-auto@s">
                        <div class="w302" uk-toggle="cls: w302; mode: media; media: @s">
                            <h1 class="uk-h1 selectroom__title">RooHIDE N SEEKm 1</h1>


                            <div class="uk-grid-10 uk-grid-12-m selectroom__item12 uk-flex-middle" uk-grid>
                                <div class="uk-width-auto uk-width-1-1@m">
                                    <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c1">Độ khó:</div>
                                        </div>
                                        <div>
                                            <div class="selectroom__rate1">
                                                <i class="on"></i>
                                                <i class="on"></i>
                                                <i class="on"></i>
                                                <i class="on"></i>
                                                <i class="off"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-auto uk-width-1-1@m">
                                    <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c1">Thể loại:</div>
                                        </div>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c2">Phá án - Hành động - Kinh dị</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-auto uk-width-1-1@m">
                                    <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c1">Số người chơi:</div>
                                        </div>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c2">4 - 8</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uk-width-auto uk-width-1-1@m">
                                    <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c1">Địa chỉ:</div>
                                        </div>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c2">189 Hoàng Cầu, HN</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!--
                            <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c1">Độ khó:</div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c1">Thể loại:</div>
                                </div>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c2">Phá án - Hành động - Kinh dị</div>
                                </div>
                            </div>
                            <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c1">Số người chơi:</div>
                                </div>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c2">4 - 8</div>
                                </div>
                            </div>
                            <div class="uk-grid-10 uk-grid-12-m uk-child-width-auto selectroom__item12 uk-flex-middle" uk-grid>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c1">Địa chỉ:</div>
                                </div>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c2">189 Hoàng Cầu, HN</div>
                                </div>
                            </div>
                            -->

                            <div class="selectroom__itemDivider"></div>
                            <div>
                                <div class="selectroom__txt selectroom__txt--c3">Cốt truyện: TRỐN TÌM - Một trò chơi vốn đã quen thuộc với tuổi thơ của rất nhiều người nhưng sẽ ra sao nếu trò chơi ấy còn có cả những vị khách không</div>
                                <div class="selectroom__txt"><a href="">Learn more</a></div>
                            </div>
                            <div class="selectroom__item24 uk-grid-12 uk-grid-16-s" uk-grid>
                                <div class="uk-width-1-2 uk-width-1-1@s">
                                    <button class="selectroom__btn selectroom__btn--c1 uk-button uk-button-secondary uk-width">Booking this room</button>
                                </div>
                                <div class="uk-width-1-2 uk-width-1-1@s">
                                    <button class="selectroom__btn selectroom__btn--c2 uk-button uk-button-secondary uk-width">Trailer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-position-relative selectroom__item46">
                    <div class="uk-overflow-auto" uk-toggle="cls: selectroom__boxSpace; mode: media; media: (max-width: 959.8px)">
                        <div class="uk-grid uk-child-width-1-5@m uk-flex-nowrap uk-child-width-auto uk-grid-10 uk-grid-32-m uk-grid-match" uk-grid>
                            <?php
                            $data = array(
                                array(
                                    'img' => 'https://genesis-escape.vn/images/room/room-1.png',
                                    'txt' => 'Gone - Mất Tích (1990)',
                                ),
                                array(
                                    'img' => 'https://genesis-escape.vn/images/logo%20GUM.png',
                                    'txt' => 'The Morgue (Giao Ước Máu)',
                                ),
                                array(
                                    'img' => 'https://genesis-escape.vn/images/room/room-2.png',
                                    'txt' => 'Gone - Hide N Seek (Trốn Tìm)',
                                ),
                                array(
                                    'img' => 'https://genesis-escape.vn/images/Artboard%2013%20copy%204.jpg',
                                    'txt' => 'The Illusion - Ảo Mộng',
                                ),
                                array(
                                    'img' => 'https://genesis-escape.vn/images/room/bg/Artboard%2013%20copy%203.png',
                                    'txt' => 'Coming Soon',
                                ),
                            );
                            foreach ($data as $k=>$v): ?>
                            <label class="selectroom__label">
                                <input class="uk-radio selectroom__radio" type="radio" name="radio2-selectroom">
                                <div class="selectroom__card uk-flex uk-flex-column">
                                    <div class="uk-cover-container selectroom__card__coverImg">
                                        <img src="<?= $v['img'] ?>" alt="" uk-cover="">
                                        <canvas width="322" height="214"></canvas>
                                    </div>
                                    <div class="uk-flex-auto selectroom__item20 selectroom__card__name">
                                        <?= $v['txt'] ?>
                                    </div>
                                    <div class="item__6 uk-child-width-auto uk-flex-middle uk-grid-10 uk-grid-12-m" uk-grid>
                                        <div>
                                            <div class="selectroom__txt selectroom__txt--c4">Level:</div>
                                        </div>
                                        <div>
                                            <div class="selectroom__rate1">
                                                <i class="c1 on"></i>
                                                <i class="c1 on"></i>
                                                <i class="c1 on"></i>
                                                <i class="c1 on"></i>
                                                <i class="c1 off"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <?php endforeach; ?>
                            <div class="uk-hidden@m">
                                <div class="uk-flex uk-flex-middle">
                                    <a href="#modal-allroom" uk-toggle class="selectroom__card__viewMore">
                                        <div></div>
                                        <span>view more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#modal-allroom" uk-toggle class="selectroom__card__viewMore uk-link-toggle uk-position-center-right-out uk-position-small">
                        <div></div>
                        <span>view more</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div data-tooltip="Review" id="testimonials" class="bg" data-src="https://genesis-escape.vn/img/footer.png" uk-img><!-- Some Section --></div>
    <div data-tooltip="Liên hệ" id="contact" class="bg" data-src="https://genesis-escape.vn/img/footer.png" uk-img><!-- Some Section --></div>
</div>

<div id="modal-allroom" class="uk-modal-container selectroom__modal" uk-modal>
    <div class="selectroom__modal__dialog uk-modal-dialog uk-height-1-1 uk-flex uk-flex-column">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header selectroom__modal__header">
            <h2 class="uk-modal-title selectroom__modal__title">View all room</h2>
            <div class="uk-flex-between uk-flex-middle uk-grid-small" uk-grid>
                <div class="uk-width-auto">
                    <nav class="selectroom__modal__navbar uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="">
                        <div class="uk-navbar-left">
                            <ul class="uk-navbar-nav uk-flex-wrap">
                                <li class="uk-active"><a href="javascript:void(0)" onclick="filterSelection('all')">Mới ra</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('zombie')">Zombie</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('ac-quy')">Ác Qủy</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('kinh-di')">Kinh dị</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('trinh-tham')">Trinh thám</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('tam-linh')">Tâm linh</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('pha-an')">Phá án</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('hanh-dong')">Hành động</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('bua-ngai')">Bùa ngải</a></li>
                                <li><a href="javascript:void(0)" onclick="filterSelection('huyen-bi')">Huyền bí</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="uk-width-auto">
                    <form class="uk-search uk-search-default selectroom__modal__search">
                        <span uk-search-icon></span>
                        <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </div>
            </div>
        </div>

        <div class="uk-modal-body uk-flex-auto uk-height-1-1" uk-overflow-auto>
            <div class="uk-grid uk-child-width-1-5@m uk-child-width-1-2 uk-child-width-1-3@s uk-grid-10 uk-grid-32-m uk-grid-match" uk-grid>
                <?php
                $data = array(
                    array(
                        'img' => 'https://genesis-escape.vn/images/room/room-1.png',
                        'txt' => 'Gone - Mất Tích (1990)',
                    ),
                    array(
                        'img' => 'https://genesis-escape.vn/images/logo%20GUM.png',
                        'txt' => 'The Morgue (Giao Ước Máu)',
                    ),
                    array(
                        'img' => 'https://genesis-escape.vn/images/room/room-2.png',
                        'txt' => 'Gone - Hide N Seek (Trốn Tìm)',
                    ),
                    array(
                        'img' => 'https://genesis-escape.vn/images/Artboard%2013%20copy%204.jpg',
                        'txt' => 'The Illusion - Ảo Mộng',
                    ),
                    array(
                        'img' => 'https://genesis-escape.vn/images/room/bg/Artboard%2013%20copy%203.png',
                        'txt' => 'Coming Soon',
                    ),
                );
                foreach ($data as $k=>$v): ?>
                    <label class="selectroom__label">
                        <input class="uk-radio selectroom__radio" type="radio" name="radio2-selectroom">
                        <div class="selectroom__card uk-flex uk-flex-column">
                            <div class="uk-cover-container selectroom__card__coverImg">
                                <img src="<?= $v['img'] ?>" alt="" uk-cover="">
                                <canvas width="322" height="214"></canvas>
                            </div>
                            <div class="uk-flex-auto selectroom__item20 selectroom__card__name">
                                <?= $v['txt'] ?>
                            </div>
                            <div class="item__6 uk-child-width-auto uk-flex-middle uk-grid-10 uk-grid-12-m" uk-grid>
                                <div>
                                    <div class="selectroom__txt selectroom__txt--c4">Level:</div>
                                </div>
                                <div>
                                    <div class="selectroom__rate1">
                                        <i class="c1 on"></i>
                                        <i class="c1 on"></i>
                                        <i class="c1 on"></i>
                                        <i class="c1 on"></i>
                                        <i class="c1 off"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>

<div id="modal-booking" class="uk-modal-container selectroom__modal" uk-modal>
    <div class="selectroom__modal__dialog selectroom__modal__dialog--booking uk-modal-dialog">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header selectroom__modal__header">
            <h2 class="uk-modal-title selectroom__modal__title">RooHIDE N SEEKm 1</h2>
        </div>
        <div class="uk-modal-body" uk-overflow-auto>
            <div class="selectroom__modal__item">
                <div class="selectroom__modal__label">Chọn ngày</div>
                <div class="item__12 uk-grid-small uk-grid-24-m uk-child-width-auto uk-grid" uk-grid>
                    <?php for ($i=1;$i<=7;$i++): ?>
                    <label>
                        <input class="uk-radio selectroom__modal__radio" type="radio" name="radio2_day">
                        <div class="selectroom__modal__boxDay uk-flex uk-flex-center uk-flex-middle">
                            <div>
                                <div>Mon</div>
                                <div>11</div>
                            </div>
                        </div>
                    </label>
                    <?php endfor; ?>
                </div>
            </div>
            <div class="selectroom__modal__item">
                <div class="selectroom__modal__label">Chọn giờ</div>
                <div class="item__12 uk-grid-small uk-grid-24-m uk-child-width-auto uk-grid" uk-grid>
                    <?php for ($i=1;$i<=13;$i++): ?>
                    <label>
                        <input class="uk-radio selectroom__modal__radio" type="radio" name="radio2_hour">
                        <div class="selectroom__modal__boxHour uk-flex uk-flex-center uk-flex-middle">
                            <div>
                                <div>12:30</div>
                            </div>
                        </div>
                    </label>
                    <?php endfor; ?>
                </div>
            </div>
            <div class="selectroom__modal__item">
                <div class="selectroom__modal__label">Thông tin đặt phòng</div>
                <form class="uk-grid-small item__12 uk-form-stacked uk-grid-24-m" uk-grid>
                    <div class="uk-width-1-2 uk-width-1-5@s">
                        <label class="home__form__label uk-form-label" for="form-stacked-name-modal">Họ và tên</label>
                        <div class="uk-form-controls">
                            <input class="home__form__input uk-input" id="form-stacked-name-modal" type="text" placeholder="Nguyen Van A" aria-label="Nguyen Van A">
                        </div>
                    </div>
                    <div class="uk-width-1-2 uk-width-1-5@s">
                        <label class="home__form__label uk-form-label" for="form-stacked-email-modal">Email</label>
                        <div class="uk-form-controls">
                            <input class="home__form__input uk-input" id="form-stacked-email-modal" type="email" placeholder="Nhập email của bạn" aria-label="Nhập email của bạn">
                        </div>
                    </div>
                    <div class="uk-width-1-2 uk-width-1-5@s">
                        <label class="home__form__label uk-form-label" for="form-stacked-phone-modal">Số điện thoại</label>
                        <div class="uk-form-controls">
                            <input class="home__form__input uk-input" id="form-stacked-phone-modal" type="tel" placeholder="Nhập số điện thoại của bạn" aria-label="Nhập số điện thoại của bạn">
                        </div>
                    </div>
                    <div class="uk-width-1-2 uk-width-1-5@s">
                        <label class="home__form__label uk-form-label" for="form-stacked-location">Số lượng</label>
                        <div class="uk-form-controls">
                            <div class="uk-width" uk-form-custom="target: > * > span:first-child">
                                <select id="form-stacked-location" aria-label="Custom controls">
                                    <option value="">Chọn Số lượng</option>
                                    <option value="1">Option 01</option>
                                    <option value="2">Option 02</option>
                                    <option value="3">Option 03</option>
                                    <option value="4">Option 04</option>
                                </select>
                                <button class="home__form__btnSelect uk-width uk-button uk-button-default" type="button" tabindex="-1">
                                    <span></span>
                                    <span class="uk-position-center-right uk-position-small" uk-icon="icon: chevron-down"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-1-1 uk-width-1-5@s">
                        <label class="home__form__label uk-form-label" for="form-stacked-phong">Voucher</label>
                        <div class="uk-form-controls">
                            <div class="uk-width" uk-form-custom="target: > * > span:first-child">
                                <select id="form-stacked-phong" aria-label="Custom controls">
                                    <option value="">Chọn phòng</option>
                                    <option value="1">Option 01</option>
                                    <option value="2">Option 02</option>
                                    <option value="3">Option 03</option>
                                    <option value="4">Option 04</option>
                                </select>
                                <button class="home__form__btnSelect uk-width uk-button uk-button-default" type="button" tabindex="-1">
                                    <span></span>
                                    <span class="uk-position-center-right uk-position-small" uk-icon="icon: chevron-down"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="selectroom__modal__footer uk-modal-footer uk-text-right">
            <button class="selectroom__modal__btn selectroom__btn selectroom__btn--c2 uk-button uk-button-secondary uk-modal-close">Cancel</button>
            <button class="selectroom__modal__btn selectroom__btn selectroom__btn--c1 uk-button uk-button-secondary">Booking Now</button>
        </div>
    </div>
</div>

<script>
    UIkit.modal('#modal-booking').show();
</script>
<?php require "template-parts/layouts/footer.php"; ?>