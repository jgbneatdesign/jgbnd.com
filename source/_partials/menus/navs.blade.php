<nav class="uk-navbar">
  	<a class="uk-navbar-brand uk-hidden-small" href="{{ $url }}">
  		<img src="img/{{ $logoSJPG }}" title="{{$name}}" class="logo">
  	</a>
  	<div class="uk-navbar-flip">
  	 	<ul class="uk-navbar-nav uk-hidden-small" data-uk-scrollspy-nav="{
  	 		closest: 'li',
  	 		smoothscroll: {
  	 			offset: 50}}">
      	@include('_partials.menus.nav-lists')
 		</ul>
 	</div>

  	<a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
  	<div class="uk-navbar-brand uk-navbar-center uk-visible-small">
  		<img src="img/{{ $logoSJPG }}" title="{{$name}}" class="logo">
  	</div>
</nav>