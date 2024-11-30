$(document).ready(function () {
    // BIND CLICK EVENT TO ELEMENTS WITH 'js-choice' CLASS
    $('.js-choice').on('click', function () {
        const type = $(this).data('type');
        const name = $(this).data('name');
        const multiple = $(this).data('multiple');

        // HANDLE SINGLE SELECTION CASE
        if (multiple === "no") {
            // REMOVE 'selected' CLASS FROM SIMILAR TYPES
            $(`.js-choice[data-type="${type}"]`).removeClass('selected');
            // ADD 'selected' CLASS TO CURRENT ELEMENT
            $(this).addClass('selected');
        } else {
            // TOGGLE 'selected' CLASS
            $(this).toggleClass('selected');
        }

        // UPDATE PREVIEW FOR EACH TYPE
        if (type === 'skin') {
            // SET SKIN CLASS
            $('.emoji-face').attr('class', `emoji-face ${name}`);
        } else if (type === 'eyes') {
            // UPDATE LEFT EYE
            $('.eyes .eye.left').attr('class', `eye left ${name}`);
            // UPDATE RIGHT EYE
            $('.eyes .eye.right').attr('class', `eye right ${name}`);
        } else if (type === 'mouth') {
            // SET MOUTH CLASS
            $('.mouth').attr('class', `mouth ${name}`);
        } else if (type === 'eyebrows') {
            // UPDATE LEFT EYEBROW
            $('.eyebrows .eyebrow.left').attr('class', `eyebrow left ${name}`);
            // UPDATE RIGHT EYEBROW
            $('.eyebrows .eyebrow.right').attr('class', `eyebrow right ${name}`);
        } else if (type === 'hat') {
            // SET HAT CLASS
            $('.hat').attr('class', `hat ${name}`);
        } else if (type === 'face-extras') {
            // HANDLE EXTRAS
            if ($(this).hasClass('selected')) {
                // AVOIDING DUPLICATION
                if (!$(`.face-extras.${name}`).length) {
                    $('.emoji-face').append(`<div class="face-extras ${name}"></div>`);
                }
            } else {
                // REMOVE EXTRA
                $(`.face-extras.${name}`).remove();
            }
        } else if (type === 'item') {
            if (name === 'custom') {
                // GET CUSTOM ITEM VALUE
                const customItem = $('.js-custom-item').val();
                // SET CUSTOM ITEM TEXT
                $('.item').text(customItem);
            } else {
                // SET ITEM CLASS
                $('.item').attr('class', `item ${name}`);
            }
        }
    });
});