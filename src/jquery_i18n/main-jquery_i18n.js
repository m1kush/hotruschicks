export let update_texts;
jQuery(document).ready(function() {
    update_texts = function() {
        $('body').i18n();
    };
    // $.i18n().locale.preventDefault();
    $('.lang-switch').click(function(e) {
        e.preventDefault();
        $.i18n().locale = $(this).data('locale');
        update_texts();
    });

    $.i18n().load({
        'en': 'assets/lang/en.json',
        'ru': 'assets/lang/ru.json'
    });

    // update_texts();
});