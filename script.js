$(function(){
$(".card-text").hover(function(){
	$(this).text("開発中です。しばらくお待ちください。");
	$(this).css("color","black");
},function(){
	$(this).removeAttr(".card-text");
});
});


$(function(){
	$(".staff1").click(function(){
		$(".staff-img").attr("src","./img/staff1.jpg");
	});
	$(".staff2").click(function(){
		$(".staff-img").attr("src","./img/staff2.jpg");
	});
	$(".staff3").click(function(){
		$(".staff-img").attr("src","./img/staff3.jpg");
	});
	$(".staff4").click(function(){
		$(".staff-img").attr("src","./img/staff4.jpg");
	});
});

// 採用中止
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, options);
});
$(document).ready(function(){
	$('.modal').modal();
});

// コンタクト
$('#send').click(function() {
  // もしキャンセルをクリックしたら
  if (!confirm('テスト送信してもよろしいですか？')) {
    // submitボタンの効果をキャンセルし、クリックしても何も起きない
    return false;
 // 「OK」をクリックした際の処理を記述
  } else {
    // HTMLに完了メッセージを表示    
		alert('送信完了しました。')
  }
});