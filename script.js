var sequence = new Array();

var root = React.creatClass({
    getRandom: function(){
        sequence.push(Math.floor(Math.random()*4));
    },
    resetSequence: function(){
        sequence = new Array();
    }
});

// $('.box').click(() => {
//     var color = $(this).css('background-color');
//     console.log(color)
// });

React.render(<root/>, document.getElementById('root'));