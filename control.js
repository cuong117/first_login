$('form').submit(e => {
    e.preventDefault()
    $.ajax({
        url: "http://localhost/php/account/firstLogin",
        method: 'POST',
        data: {
            user_id: 1,
            password: $('#pass').val(),
            name: $('#name').val()
        }
    }).done(data => {
        data = $.parseJSON(data)
        console.log(data)
    })
})