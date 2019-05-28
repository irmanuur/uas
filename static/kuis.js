document.addEventListener('DOMContentLoaded', () => {

    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    socket.on('connect', () => {

        document.querySelectorAll('button').forEach(button => {
            button.onclick = () => {
                const selection = button.dataset.vote;
                socket.emit('submit vote', {'selection': selection});
            };
        });
    });

    socket.on('vote totals', data => {
        document.querySelector('#A').innerHTML = data.A;
        document.querySelector('#B').innerHTML = data.B;
       
        
     
    });
});

