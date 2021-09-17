const list = document.querySelector('#movie-list ul');
const forms = document.querySelector('form')


// delete this movie
list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
});

// add a movie
forms.addEventListener('submit', e => {
    e.preventDefault();

    const li = document.createElement('li');
    const li_name = document.createElement('span');
    const li_delete = document.createElement('span');

    // const list = document.createElement('')

    const value = document.querySelector('#text').value;

    // add text content
    li_name.textContent = value;
    li_delete.textContent = 'delete';

    // add classes
    li_name.classList.add('name');
    li_delete.classList.add('delete');

    li.append(li_name)
    li.append(li_delete)
    list.append(li)

})