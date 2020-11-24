$(function() {
    

    /*①こちらがハンバーガーメニューを動かすためのコードです*/
    /*CSSと対応しています*/
    /*少し難しいかもしれませんが、#menubtnというIDのついたブロックをクリックすると、headerとnavと#menubtnにactiveというクラスを付与するという条件文です*/
    /*分からない方はこれも「おまじない」だと思ってCSSと一緒にそのままコピペして使用してください。*/
    /*僕もハンバーガーメニューを1から作れと言われたら100年かかっても無理です*/
    /*毎回コピペしてますがそれでもだいぶ稼ぐことが出来ています*/
    /*実装出来ればいいんです。*/
    /*何回かやってるとニュアンスだけは掴めます*/
    /*それで十分です！とにかく挫折しないことが1番大切なので！がんばれ！*/
    $("#menubtn").click(function(){
      $("header nav").toggleClass("active");
      $(this).toggleClass("active");
      return false;
    }); 





    /*②こちらがリンク先からリンク先へスムーズに移動するためのコードです*/
    /*試しにハンバーガーメニューの中のボタンを押してみてください*/
    /*僕はこのコードの意味は分かってません*/
    /*このようなコードをプログラミングでは「おまじない」と言います*/
    /*理解しなくてもいいのでそのままコピペしてください*/
    /*プログラミングではこの「おまじない」が度々出てきますが全無視で大丈夫です*/
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });   




    /*③こちらがフェードインver1のためのJSコードです。*/
    /*スクリーン内に、fadeinというクラスを持つブロックが確認された時にそのクラスに、activeというクラスを付与する条件式です*/
    /*これはCSSと対応しているのでCSSとセットで使用してください！*/
    /*これも「おまじない」と考えていただければ大丈夫です*/
    /*僕もこのコード0から書いてと言われたら3億年くらいはかかります*/
    /*安心してコピペしてください*/
    $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });

  /*④フェードインver2はindex.htmlのファイルの一番下に記載しております*/
  /*そちらをご参照ください*/




  /*⑤こちらがスライダーを実装するためのコードです。*/
  /*slick.js,slick.min.js,slick.css,slick-theme.cssの4つのファイルを必ず読み込んでください*/
  /*わざわざダウンロードしなくても僕のファイルをコピーして頂けると問題なく使えます！*/
  /*スライダーの実装は様々なカスタマイズ(レスポンシブや自動スクロール等)があるので詳細については下記サイトを参照ください*/
  /*https://stand-4u.com/web/javascript/slick.html*/
  $('.slider').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '10%',
    autoplay:true,
    waitForAnimate: true,
  });




  /*⑤こちらがQ&Aのアコーディオンメニュー*/
  /*こちらもそのまま使っていただければ*/
  /*これはCSSの設定が主な作業になります*/
  /*CSSと合わせてお使いください*/
  $('.aco-contents').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('rotate');
  });
  $('.question-ttl').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('rotate2');
  });





});
  

    /*ここまで出来たらJSはほとんど完璧ですね！*/
    /*これでもうスクールに行く必要はありません*/
    /*変な出費もしなくて済みます♪*/
    /*しかしコピペとは言ってもおそらく皆さんどこかで必ずつまづくと思います*/
    /*特にスライダーのカスタマイズとか矢印の変更方法とか*/
    /*その辺は根気強くググって見てください！*/
    /*基本は全てこの「Akira_js_code」内で完結出来ているのでもう少しです！*/
    /*頑張ってください！応援しています😆*/
    
  