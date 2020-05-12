


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

// const ham = document.getElementById('ham')
$('.menu-icon').click(function(){
	document.body.classList.toggle('nav-is-toggled')


});


$('.menu-icon').click(function(){
  $(this).toggleClass('clicked');
});


$( document ).ready(function() {
	const maincontent = $(".main-content");


	maincontent.on("click",function(){
		document.body.classList.remove('nav-is-toggled')
		$('.menu-icon').removeClass('clicked')
	})

	var accordion = function(){
		var data = $(".accordion-help-block").attr("data-accordion");

		$(".accordion-help-block__header").on("click",function(){

			if(data === "close"){
				$(".accordion-help-block__body").slideUp();
				if($(this).hasClass("accordion-help-block__header--active")){
					$(this).toggleClass("accordion-help-block__header");
				}
				else{
					$(".accordion-help-block__header").removeClass("accordion-help-block__header--active");
					$(this).toggleClass("accordion-help-block__header--active");
				}
			}

			else{
				$(this).toggleClass("accordion-help-block__header--active");
			}
			$(this).next(".accordion-help-block__body").not(":animated").slideToggle();

		});
	}
accordion();
});
