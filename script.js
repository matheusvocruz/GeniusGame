var sequence = new Array(),
    indexer = 0, 
    rodada = 0;

const boxes = document.querySelectorAll('.box'),
    buttonPlay = document.querySelector('#play'),
    arrayKeys = [38,39,40,37],
    arrayColors = ['green', 'yellow', 'blue', 'red'];

const getRandom = function(){
    sequence.push(Math.floor(Math.random()*4));
}

const resetSequence = function(){
    sequence = new Array();
}

const validadeSequenceEntry = function(entry){
    return (sequence[indexer] === entry)? true : false;
}

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const ShineBox = async function(e){
    var box = boxes[e],
    ClasseAnterior = box.className;
    await wait(200);
    box.className += '-lighter';
    await wait(300);
    box.className = ClasseAnterior;
}

const startSequence = async function(){
    if(sequence.length === 0){
        for(var i = 0; i < 4 ; i++)
            getRandom();
    }
    for(var i = 0; i < sequence.length ; i++){
        await ShineBox(sequence[i])
    }
    boxes.forEach( e => {
        e.setAttribute('data-enabled','enabled'); 
    });
}

const Listener = async function(e){
    if(e.getAttribute('data-enabled') == 'enabled'){
        e.setAttribute('data-enabled','disabled');
        var element = arrayColors.indexOf(e.id);
        await ShineBox(element);
        e.setAttribute('data-enabled','enabled');
    }
}

for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', e => {
        Listener(e.currentTarget);
    });
}

buttonPlay.addEventListener('click', e => { startSequence(); });

document.addEventListener('keydown', async function(e){
    switch(e.keyCode){
        case 38: Listener(boxes[0]);break;
        case 39: Listener(boxes[1]);break;
        case 40: Listener(boxes[2]);break;
        case 37: Listener(boxes[3]);break;
        case 32: 
            boxes.forEach( e => {e.setAttribute('data-enabled','disabled'); });
            startSequence(); 
            break;
    }
});
