$(document).ready(function() {
  var config = {
    button_title: 'Emojis',
    auto_close: false,
    async_load: true,
    emoji_size: 20,
    emoji_list: [
      'https://www.aht.li/3862978/emote-3.gif',
      'https://www.aht.li/3862989/emote-4.gif',
      'https://www.aht.li/3863000/emote-5.gif',
      'https://www.aht.li/3863011/emote-6.gif',
      'https://www.aht.li/3863022/emote-7.gif',
      'https://www.aht.li/3862896/emote-8.gif',
      'https://www.aht.li/3862892/emote-9.gif',
      'https://www.aht.li/3862969/emote-21.gif',
      'https://www.aht.li/3862970/emote-22.gif',
      'https://www.aht.li/3862971/emote-23.gif',
      'https://www.aht.li/3862972/emote-24.gif',
      'https://www.aht.li/3862973/emote-25.gif',
      'https://www.aht.li/3862974/emote-26.gif',
      'https://www.aht.li/3862975/emote-27.gif',
      'https://www.aht.li/3862976/emote-28.gif',
      'https://www.aht.li/3862977/emote-29.gif',
      'https://www.aht.li/3862979/emote-30.gif',
      'https://www.aht.li/3862980/emote-31.gif',
      'https://www.aht.li/3862981/emote-32.gif',
      'https://www.aht.li/3862982/emote-33.gif',
      'https://www.aht.li/3862983/emote-34.gif',
      'https://www.aht.li/3862984/emote-35.gif',
      'https://www.aht.li/3862985/emote-36.gif',
      'https://www.aht.li/3862986/emote-37.gif',
      'https://www.aht.li/3862987/emote-38.gif',
      'https://www.aht.li/3862988/emote-39.gif',
      'https://www.aht.li/3862990/emote-40.gif',
      'https://www.aht.li/3862991/emote-41.gif',
      'https://www.aht.li/3862992/emote-42.gif',
      'https://www.aht.li/3862993/emote-43.gif',
      'https://www.aht.li/3862994/emote-44.gif',
      'https://www.aht.li/3862995/emote-45.gif',
      'https://www.aht.li/3862996/emote-46.gif',
      'https://www.aht.li/3862997/emote-47.gif',
      'https://www.aht.li/3862998/emote-48.gif',
      'https://www.aht.li/3862999/emote-49.gif',
      'https://www.aht.li/3863001/emote-50.gif',
      'https://www.aht.li/3863002/emote-51.gif',
      'https://www.aht.li/3863003/emote-52.gif',
      'https://www.aht.li/3863004/emote-53.gif',
      'https://www.aht.li/3863005/emote-54.gif',
      'https://www.aht.li/3863006/emote-55.gif',
      'https://www.aht.li/3863007/emote-56.gif',
      'https://www.aht.li/3863008/emote-57.gif',
      'https://www.aht.li/3863009/emote-58.gif',
      'https://www.aht.li/3863010/emote-59.gif',
      'https://www.aht.li/3863012/emote-60.gif',
      'https://www.aht.li/3863013/emote-61.gif',
      'https://www.aht.li/3863014/emote-62.gif',
      'https://www.aht.li/3863015/emote-63.gif',
      'https://www.aht.li/3863016/emote-64.gif',
      'https://www.aht.li/3863017/emote-65.gif',
      'https://www.aht.li/3863018/emote-66.gif',
      'https://www.aht.li/3863019/emote-67.gif',
      'https://www.aht.li/3863020/emote-68.gif',
      'https://www.aht.li/3863021/emote-69.gif',
      'https://www.aht.li/3863023/emote-70.gif',
      'https://www.aht.li/3863024/emote-71.gif',
      'https://www.aht.li/3863025/emote-72.gif',
      'https://www.aht.li/3863026/emote-73.gif',
      'https://www.aht.li/3863027/emote-74.gif',
      'https://www.aht.li/3863028/emote-75.gif',
      'https://www.aht.li/3863029/emote-76.gif',
      'https://www.aht.li/3863030/emote-77.gif',
      'https://www.aht.li/3863031/emote-78.gif',
      'https://www.aht.li/3863032/emote-79.gif',
      'https://www.aht.li/3863033/emote-80.gif',
      'https://www.aht.li/3862902/emote-81.gif',
      'https://www.aht.li/3862901/emote-82.gif',
      'https://www.aht.li/3862900/emote-83.gif',
      'https://www.aht.li/3862899/emote-84.gif',
      'https://www.aht.li/3862898/emote-85.gif',
      'https://www.aht.li/3862897/emote-86.gif',
      'https://www.aht.li/3862895/emote-87.gif',
      'https://www.aht.li/3862894/emote-88.gif',
      'https://www.aht.li/3862893/emote-89.gif',
      'https://www.aht.li/3862891/emote-90.gif',
      'https://www.aht.li/3862890/emote-91.gif',
      'https://www.aht.li/3862903/ballon.gif',
      'https://www.aht.li/3862904/bieres.gif',
      'https://www.aht.li/3862905/boule-cristal.gif',
      'https://www.aht.li/3862906/bulles.gif',
      'https://www.aht.li/3862908/cadeau.gif',
      'https://www.aht.li/3862909/champagne.gif',
      'https://www.aht.li/3862934/confetti.gif',
      'https://www.aht.li/3862910/cheers.gif',
      'https://www.aht.li/3862911/cocktail.gif',
      'https://www.aht.li/3862870/coeur-anat.gif',
      'https://www.aht.li/3862871/coeur-bat.gif',
      'https://www.aht.li/3862929/coeur-rouge.gif',
      'https://www.aht.li/3862928/coeur-rosepale.gif',
      'https://www.aht.li/3862932/coeur-violet.gif',
      'https://www.aht.li/3862931/coeur-vert.gif',
      'https://www.aht.li/3862923/coeur-jaune.gif',
      'https://www.aht.li/3862927/coeur-orange.gif',
      'https://www.aht.li/3862925/coeur-marron.gif',
      'https://www.aht.li/3862912/coeur-bleu.gif',
      'https://www.aht.li/3862873/coeur-bleuclair.gif',
      'https://www.aht.li/3862872/coeur-blanc.gif',
      'https://www.aht.li/3862921/coeur-gris.gif',
      'https://www.aht.li/3862926/coeur-noir.gif',
      'https://www.aht.li/3862922/coeur-grossit.gif',
      'https://www.aht.li/3862930/coeur-tourne.gif',
      'https://www.aht.li/3862915/coeur-cadeau.gif',
      'https://www.aht.li/3862916/coeur-etoiles.gif',
      'https://www.aht.li/3862924/coeur-lettre.gif',
      'https://www.aht.li/3862913/coeur-bobo.gif',
      'https://www.aht.li/3862914/coeur-brise.gif',
      'https://www.aht.li/3862917/coeur-exclamation.gif',
      'https://www.aht.li/3862918/coeur-feu.gif',
      'https://www.aht.li/3862919/coeur-fleche.gif',
      'https://www.aht.li/3862920/coeur-flotte.gif',
      'https://www.aht.li/3862882/rose.gif',
      'https://www.aht.li/3862889/fleur-fanee.gif',
      'https://www.aht.li/3862935/diamant.gif',
      'https://www.aht.li/3862936/disco.gif',
      'https://www.aht.li/3862937/dizzy.gif',
      'https://www.aht.li/3862939/eclair.gif',
      'https://www.aht.li/3862954/em-face-yeux.gif',
      'https://www.aht.li/3862955/em-face-yeux1.gif',
      'https://www.aht.li/3862953/em-face-bouche.gif',
      'https://www.aht.li/3862956/em-kiss.gif',
      'https://www.aht.li/3862957/em-pas.gif',
      'https://www.aht.li/3862874/emote-1.gif',
      'https://www.aht.li/3862967/emote-2.gif',
      'https://www.aht.li/3862875/emote-10.gif',
      'https://www.aht.li/3862958/emote-11.gif',
      'https://www.aht.li/3862959/emote-12.gif',
      'https://www.aht.li/3862960/emote-13.gif',
      'https://www.aht.li/3862961/emote-14.gif',
      'https://www.aht.li/3862962/emote-15.gif',
      'https://www.aht.li/3862963/emote-16.gif',
      'https://www.aht.li/3862964/emote-17.gif',
      'https://www.aht.li/3862965/emote-18.gif',
      'https://www.aht.li/3862966/emote-19.gif',
      'https://www.aht.li/3862968/emote-20.gif',
      'https://www.aht.li/3862944/em-corps-index.gif',
      'https://www.aht.li/3862945/em-corps-mains.gif',
      'https://www.aht.li/3862943/em-corps-danse.gif',
      'https://www.aht.li/3862941/em-corps-clap.gif',
      'https://www.aht.li/3862951/em-corps-salut.gif',
      'https://www.aht.li/3862952/em-corps-v.gif',
      'https://www.aht.li/3862942/em-corps-cross.gif',
      'https://www.aht.li/3862949/em-corps-pouce.gif',
      'https://www.aht.li/3862948/em-corps-pouce-bas.gif',
      'https://www.aht.li/3862950/em-corps-prie.gif',
      'https://www.aht.li/3862940/em-corps-bras.gif',
      'https://www.aht.li/3862946/em-corps-mecabras.gif',
      'https://www.aht.li/3862947/em-corps-mecajambe.gif',
      'https://www.aht.li/3863208/moneywings.gif',
      'https://www.aht.li/3862938/drapeau-rouge.gif',
      'https://www.aht.li/3862876/em-sang.gif', //drink & food
      'https://www.aht.li/3862886/goutte-eau.gif',
      'https://www.aht.li/3862880/vin.gif',
      'https://www.aht.li/3862884/popcorn.gif',
      'https://www.aht.li/3862887/gateau-anniv.gif',
      'https://www.aht.li/3863207/dragon.gif', //nature
      'https://www.aht.li/3863209/teddybear.gif',
      'https://www.aht.li/3862881/tornade.gif',
      'https://www.aht.li/3862883/rainbow.gif',
      'https://www.aht.li/3862933/comete.gif',
      'https://www.aht.li/3862888/fusee.gif',
      'https://www.aht.li/3862885/ovni.gif'
    ],
    menu_style: `
      .twemojis {
        width: 240px;
        height: 250px;
        overflow: auto;
        background-color: var(--neutralDark);
        border-radius: var(--xs-radius);
        padding: 10px !important;
      }
      .twemojis img {
        width: ${20}px;
        height: ${20}px;
        cursor: pointer;
        opacity: .9;
        transition: opacity .5s;
        margin: 2px;
      }
      .twemojis img:hover {opacity: 1}
    `
  };

  if ($.sceditor) {
    $.sceditor.command.set('twemoji', {
      dropDown: function(editor, caller, callback) {
        if (!fa_twemoji.element) {
          fa_twemoji.element = $('<div class="twemojis">').html(
            config.emoji_list.map(url => `<img src="${url}" style="display: none;" />`).join('')
          );

          if (config.async_load) {
            let index = 0;
            const loadInterval = setInterval(() => {
              const img = fa_twemoji.element.find('img').eq(index)[0];
              if (img.complete) {
                img.style.display = '';
                index++;
                if (index >= fa_twemoji.element.find('img').length) {
                  clearInterval(loadInterval);
                }
              }
            }, 10);
          } else {
            fa_twemoji.element.find('img').show();
          }
        }

        fa_twemoji.element.on('click', 'img', function(e) {
          callback(e.target.src);
          if (config.auto_close) {
            editor.closeDropDown(true);
          }
        });

        editor.createDropDown(caller, 'twemoji', fa_twemoji.element[0]);
      },

      exec: function(c) {
        var e = this;
        $.sceditor.command.get('twemoji').dropDown(e, c, function(icon) {
          e.insert(` [img(0,20px)]${icon}[/img]&nbsp;`, '', true, true, true);
        });
      },

      txtExec: function(c) {
        var e = this;
        $.sceditor.command.get('twemoji').dropDown(e, c, function(icon) {
          e.insert(` [img(0,20px)]${icon}[/img] `, '', true, true, true);
        });
      },

      tooltip: config.button_title
    });

    // Ajouter le bouton à la barre d'outils (en supposant que `toolbar` est global)
    toolbar = toolbar.replace(/date,/, 'twemoji,date,');
  }

  if (!window.fa_twemoji) {
    window.fa_twemoji = config;
  }

  // Ajouter les styles personnalisés dans le head
  if (config.menu_style) {
    $('<style>').text(config.menu_style).appendTo('head');
  }
});
