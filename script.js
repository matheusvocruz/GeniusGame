var sequence = new Array(),
    indexer = 0, 
    rodada = 0,
    onPlay = false;

const boxes = document.querySelectorAll('.box'),
    buttonPlay = document.querySelector('#play'),
    buttonReset = document.querySelector('#reset'),
    arrayKeys = [38,39,40,37],
    arrayColors = ['green', 'yellow', 'blue', 'red'];


//################### Boxes ###################//
const disableBoxes = function (){
    boxes.forEach(e => { 
        e.setAttribute('data-enabled', 'disabled');
    });
}

const enableBoxes = function (){
    boxes.forEach(e => { 
        e.setAttribute('data-enabled', 'enabled');
    });
}

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const ShineBox = async function(e){
    var box = boxes[e],
    ClasseAnterior = box.className;
    box.setAttribute('data-enabled','disabled');
    await wait(200);
    box.className += '-lighter';
    await wait(300);
    box.className = ClasseAnterior;
    box.setAttribute('data-enabled','enabled');
}

const refreshScore = function (){
    document.querySelector('#score').innerHTML = sequence.length;
}

//################### Sequence ###################//
const getRandom = function(){
    sequence.push(Math.floor(Math.random()*4));
}

const resetSequence = function(){
    sequence = new Array();
    indexer = 0;
    rodada = 0;
    disableBoxes();
    buttonPlay.removeAttribute('hidden');
    buttonReset.setAttribute('hidden',true);
    buttonReset.setAttribute('disabled',true);
}

var validadeSequenceEntry = async function(entry){
    
    var validation = (sequence[indexer] === entry) ? true : false;
    indexer++;
    if(indexer == sequence.length && validation === true){
       indexer = 0;
       rodada++;
       refreshScore();
       await wait(500);
       getRandom();
       startSequence(); 
    }
    return validation;
}

const startSequence = async function(){
    onPlay = true;
    disableBoxes();
    buttonPlay.setAttribute('hidden', true);
    if(sequence.length === 0){
        for(var i = 0; i < 4 ; i++)
            getRandom();
    }
    for(var i = 0; i < sequence.length ; i++){
        await ShineBox(sequence[i])
    }
    buttonReset.removeAttribute('hidden');
    buttonReset.removeAttribute('disabled');
    onPlay = false;
    enableBoxes();
}

//################### Events ###################//
const Listener = async function(e){
    if(e.getAttribute('data-enabled') === 'enabled'  && onPlay === false){
        var element = arrayColors.indexOf(e.id);
        await ShineBox(element);
        if(await validadeSequenceEntry(element) === false){
            resetSequence();
            refreshScore();
            buttonPlay.removeAttribute('hidden');
        }
    }
}

for(var i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', e => {
        Listener(e.currentTarget);
    });
}

buttonPlay.addEventListener('click', e => { 
    if(onPlay === false)
    {
        startSequence(); 
    } 
});

buttonReset.setAttribute('hidden',true);
buttonReset.addEventListener('click', function() {
    resetSequence();
});

document.addEventListener('keydown', async function(e){
    switch(e.keyCode){
        case 38: Listener(boxes[0]);break;
        case 39: Listener(boxes[1]);break;
        case 37: Listener(boxes[2]);break;
        case 40: Listener(boxes[3]);break;
        case 32: 
            if(onPlay === false && sequence.length === 0)
            {
                startSequence(); 
            }
            break;
    }
});

