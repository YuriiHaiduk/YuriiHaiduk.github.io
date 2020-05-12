console.log('2222');


const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham')
ham.addEventListener('click', function() {
	document.body.classList.toggle('nav-is-toggled')
})









$( document ).ready(function() {
	if ($(window).width() > 991) {
				console.log(222222);
				$('.goods-item').mouseenter(function(){
					$(this).addClass('hovered');
					// $(this).style.color = "#fff";
					// $(this).css('zIndex', '9999');
					// $(this).children('.goods-item__info').addClass('hovered-info');
		       $(this).children('.goods-item__info').slideDown();
		       // $(this).addClass('hovered');

		    });

				$('.goods-item').mouseleave(function(){
					setTimeout($.proxy(function(){
						$(this).removeClass('hovered');
					}, this), 270);
		      $(this).children('.goods-item__info').slideUp();


					// $(this).removeClass('hovered');

					// setTimeout(function(){
					//   $(this).css('zIndex', 'unset');
					// }, 200);

		      // $(this).removeClass('hovered');
		    });


		    var maxHeight = 0;

				$(".goods-item-h").each(function(){
				if ( $(this).height() > maxHeight )
				{
				maxHeight = $(this).height();
				}
				});

				$(".goods-item-container").height(maxHeight);

		}
});

$( document ).ready(function() {
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"></div><div class="quantity-button quantity-down"></div></div>').insertAfter('.quantity input');
	 jQuery('.quantity').each(function() {
		 var spinner = jQuery(this),
			 input = spinner.find('input[type="number"]'),
			 btnUp = spinner.find('.quantity-up'),
			 btnDown = spinner.find('.quantity-down'),
			 min = input.attr('min'),
			 max = input.attr('max');

		 btnUp.click(function() {
			 var oldValue = parseFloat(input.val());
			 if (oldValue >= max) {
				 var newVal = oldValue;
			 } else {
				 var newVal = oldValue + 1;
			 }
			 spinner.find("input").val(newVal);
			 spinner.find("input").trigger("change");
		 });

		 btnDown.click(function() {
			 var oldValue = parseFloat(input.val());
			 if (oldValue <= min) {
				 var newVal = oldValue;
			 } else {
				 var newVal = oldValue - 1;
			 }
			 spinner.find("input").val(newVal);
			 spinner.find("input").trigger("change");
		 });

	 });
});
