var sequence = new Array();

const SetarDelay = function (objeto) {
    setTimeout(function(){
        objeto.attr('class', objeto.attr('class').split('-lighter',2)[0]);
    },200)
}

const getRandom = function(){
    sequence.push(Math.floor(Math.random()*4));
}

const resetSequence = function(){
    sequence = new Array();
}

$('.box').click( function(){
    const color = $(this).css('background-color');
    switch (color){
        case 'rgb(40, 167, 69)':
            $(this).removeClass('bg-success').addClass('bg-success-lighter')
            SetarDelay($(this))
            break;
        case 'rgb(255, 193, 7)':
            $(this).removeClass('bg-warning').addClass('bg-warning-lighter')
            SetarDelay($(this))
            break;
        case 'rgb(220, 53, 69)':
            $(this).removeClass('bg-danger').addClass('bg-danger-lighter')
            SetarDelay($(this))
            break;
        case 'rgb(0, 123, 255)':
            $(this).removeClass('bg-primary').addClass('bg-primary-lighter')
            SetarDelay($(this))
            break;
    }
});