
  fetch('https://randomuser.me/api/?results=10')
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log('data: ', data.results);

    const users = data.results;

    const usersEl = document.getElementById('users')

    // console.log('usersEl: ', usersEl);

    function createNode(element) {
      return document.createElement(element);
    }

    function append(parent, el) {
      return parent.appendChild(el);
    }
    return users.map(user => {
      console.log(user);
      let li = createNode('li');
      let span = createNode('span');

      span.innerHTML = user.name.first
      append(li, span)
      append(usersEl, li)
    })
  })
