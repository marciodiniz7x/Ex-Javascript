// IIFE => Immediatelry Invoked Function Expression

(function(x, y) {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
    
    console.log(x+y)
})
(3, 4)