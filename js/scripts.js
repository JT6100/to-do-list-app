function newItem() {

    let li = $('<li></li>');

    let inputValue = $('#input').val();

    li.append(inputValue);

    if(inputValue === ''){

        alert("please add a list item");

    } else {
        
        $('#list').append(li)
    }
}

function crossOut(){

    li.toggleClasss('strike');

}

li.on('dblclick', function crossOut() {

    li.toggleClasss('strike');

});

let crossOutButton = $('<crossOutButton></crossOutButton>');

crossOutButton. append(document.createTextNode('X'));

li.append(crossOutButton);

function deleteListItem() {

    li.addClass('delete');

}
