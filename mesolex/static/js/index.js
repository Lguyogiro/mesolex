import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';

import '../scss/index.scss';

jQuery(($) => {
  $('#language-select button').one('click', function onClick(e) {
    e.preventDefault();

    const $this = $(this);
    const translationUrl = $this.data('translation-url');
    const $form = $this.closest('form');
    const $next = $form.find('input[name="next"]');

    $next.val(translationUrl);
    $this.trigger('click');
  });
});
