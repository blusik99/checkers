

const Board = [0 ,1 ,0 ,1 ,0 ,1 ,0 ,1,
                1 ,0 ,1 ,0 ,1 ,0 ,1 ,0,
                0 ,1 ,0 ,1 ,0 ,1 ,0 ,1,
                1 ,0 ,1 ,0 ,1 ,0 ,1 ,0,
                0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,
                0 ,0 ,0 ,0 ,0 ,0 ,0 ,0,
                0 ,2 ,0 ,2 ,0 ,2 ,0 ,2,
                2 ,0 ,2 ,0 ,2 ,0 ,2 ,0,
                0 ,2 ,0 ,2 ,0 ,2 ,0 ,2,
                2 ,0 ,2 ,0 ,2 ,0 ,2 ,0,
];




const init = () => {
    const container = document.createElement('div');
    container.id = 'container';
    board.forEach(el => {
        const pieces = document.createElement('div');
        if( el == '1' || el == '2'){   
           pieces.style.background =  "#000000";
         
        }
      
        container.appendChild(pieces);

    });
    document.body.appendChild(container);
}



window.addEventListener('DOMContentLoaded', init);