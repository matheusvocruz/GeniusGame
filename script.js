var sequence = new Array();



$('.box').click( function(){
    const color = $(this).css('background-color');
    switch (color){
        case 'rgb(40, 167, 69)':
            $(this).removeClass('bg-success').addClass('bg-success-lighter')
            window.setTimeout(function(){
                // do whatever you want to do     
            }, 300);
            break;
        case 'rgb(255, 193, 7)':
            $(this).removeClass('bg-warning').addClass('bg-warning-lighter')
            window.setTimeout(function(){
                // do whatever you want to do     
            }, 300);
            break;
        case 'rgb(220, 53, 69)':
            $(this).removeClass('bg-danger').addClass('bg-danger-lighter')
            window.setTimeout(function(){
                // do whatever you want to do     
            }, 300);
            break;
        case 'rgb(0, 123, 255)':
            $(this).removeClass('bg-primary').addClass('bg-primary-lighter')
            window.setTimeout(function(){
                // do whatever you want to do     
            }, 300);
            break;
        default:
            console.log('teu cu');
            break;
    }
});

// var root = React.Component({
//     getRandom: function(){
//         sequence.push(Math.floor(Math.random()*4));
//     },
//     resetSequence: function(){
//         sequence = new Array();
//     }
// });

// ReactDOM.render(root, document.getElementById('root'));

// rgb(40, 167, 69)
// rgb(255, 193, 7) 
// rgb(220, 53, 69)
// rgb(0, 123, 255)