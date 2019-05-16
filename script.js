var sequence = new Array();

var boxes = $('.box');

var indexer = 0;

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

const validadeSequenceEntry = function(entry){
    return (sequence[indexer] === entry)? true : false;
}

function shineBox(boxNumber){
    var ClasseAnterior = boxes[boxNumber].className;
    boxes[boxNumber].className += '-lighter';
    setTimeout(function () { boxes[boxNumber].className =ClasseAnterior; }, 200);
}

function startSequence(){
    sequence.forEach(element => {
        //shineBox(element);
        setTimeout(shineBox, 200, element);
    });
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