<!DOCTYPE html>
<!--[if lt IE 9 ]> <html lang="en" class="no-js allow-hover browser-lt-ie9 show-top"> <![endif]-->
<!--[if IE 9]><html xmlns="http://www.w3.org/1999/xhtml" lang="en" class="no-js allow-hover browser-ie9 show-top"><![endif]-->
<!--[if !(IE)]><!--><html lang="en" class="no-js allow-hover show-top" xmlns="http://www.w3.org/1999/xhtml"><!--<![endif]-->
    <head>
        <!-- use "https//go.dosa.northwestern.edu/shared/redesign/public/"" for "public/" in cascade, and font path also needs https -->
        <!-- make sure we have a system-region name="DEFAULT" somewhere for cascade -->
        <!-- we can't do <i></i>, put html comments between the <i> closing and opening tag -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable"  content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title"  content="Redesign" />
        <title>Student Affairs | Northwestern</title>
        <link rel="apple-touch-icon" href="{{asset('img/icons/icon57.png')}}" sizes="57x57">
        <link rel="apple-touch-icon" href="{{asset('img/icons/icon72.png')}}" sizes="72x72">
        <link rel="apple-touch-icon" href="{{asset('img/icons/icon76.png')}}" sizes="76x76">
        <link rel="apple-touch-icon" href="{{asset('img/icons/icon114.png')}}" sizes="114x114">
        <link rel="apple-touch-icon" href="{{asset('img/icons/icon120.png')}}" sizes="120x120">
        <link rel="apple-touch-icon" href="{{asset('img/icons/icon144.png')}}" sizes="144x144">
        <link rel="apple-touch-icon" href="{{asset('img/icons/icon152.png')}}" sizes="152x152">
        <!--link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" /-->
        <link rel="stylesheet" href="{{asset('css/main.css')}}{{'?'.rand(0,10000)}}" />
        <!--<script type="text/javascript" src="//use.typekit.net/jfq3vqp.js"></script>-->
        <!--<script type="text/javascript">try{Typekit.load();}catch(e){}</script>-->
    </head>
    <body class="dept-color-2">
        <div class="ie-too-old">
            <div class="flash ie-ancient">
                <p>We're sorry, this website will not display correctly on older versions of Internet Explorer.
                    <strong>You are using Internet Explorer version
                                        <!--[if IE 7 ]>7.<![endif]-->
                                        <!--[if IE 8 ]>8.<![endif]-->
                    </strong> <br /> <br />
                    Kindly switch to <a href="http://browsehappy.com/">a newer browser</a> (such as Chrome, Firefox, or Internet Explorer version 9 or greater).</p>
                </div>
        </div>
        <div class="viewport">
            <div class="dosa">
              <div class="dosa-container">
                <div class="dosa-logo">Student Affairs</div>
                <form action="http://googlesearch.northwestern.edu/search" method="get">
                  <input type="hidden" name="client" value="default_oneboxes"/>
                  <input type="hidden" name="proxystylesheet" value="default_oneboxes"/>
                  <input class="search" name="q" placeholder="Search" type="search" aria-label="Search Input"/>
                </form>
                <div class="dosa-fontsize"><span class="fontsize-decrease">A</span><span class="fontsize-reset">A</span><span class="fontsize-increase">A</span></div>
                <div class="dosa-navigation">
                  <div class="section closed">
                    <h2><span class="inner">Departments</span></h2>
                    <ul>
                      @include('components.dosa.departments-mobile')
                    </ul>
                  </div>
                  <div class="section closed">
                    <h2><span class="inner">Topics</span></h2>
                    <ul>
                      @include('components.dosa.topics-mobile')
                    </ul>
                  </div>
                  <div class="section closed">
                    <h2><span class="inner">Community</span></h2>
                    <ul>
                      @include('components.dosa.community-mobile')
                    </ul>
                  </div>
                  <div class="section nuhelp closed">
                    <h2><span class="inner">NUHelp</span></h2>
                    <ul>
                      @include('components.dosa.nuhelp-mobile')
                    </ul>
                  </div>
                </div>
                <div class="dosa-extra">
                  <div class="nu-logo"><a href="http://www.northwestern.edu/"><img src="{{asset('img/NU_Logo_purple.png')}}" alt="" /></a></div>
                  <div class="extra-navigation">
                    <a href="http://offices.northwestern.edu/detail/627">Contact</a>
                    <a href="http://www.northwestern.edu/studentaffairs/">Student Affairs</a>
                    <a href="http://planitpurple.northwestern.edu/feed/html/447">Calendar</a>
                    <a href="http://policies.northwestern.edu/">Policy</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="main">
                <div class="main-window">
                    <header class="mobile-header" role="banner" aria-label="banner">
                        <span class="button-container">
                            <button class="menu-drawer">
                                <span class="acc-hidden">Menu</span><i class="fa fa-bars" aria-hidden="true"><!-- keep --></i>
                            </button>
                        </span>
                        <span class="logo-container">
                            <span role="heading" class="logo">Division of Student Affairs</span>
                        </span>
                    </header>
                    <div class="middle" role="main">
                      <div class="inner">
                        <header class="dosa-banner" role="banner" aria-labelledby="banner-title">
                          <div class="inner-left"></div>
                          <div class="inner">
                            <a href="http://www.northwestern.edu/studentaffairs/" id="banner-title">Division of <br/>Student Affairs</a>
                            <div class="search">
                              <form action="http://googlesearch.northwestern.edu/search" method="get">
                                <input type="hidden" name="client" value="default_oneboxes"/>
                                <input type="hidden" name="proxystylesheet" value="default_oneboxes"/>
                                <input type="search" aria-label="Search Input" name="q"/>
                                <button type="submit" aria-label="Submit Search"><i class="fa fa-search"><!-- keep --></i></button>
                              </form>
                            </div>
                            <nav class="dosa-banner-navigation" role="navigation" aria-label="Student Affairs Top Links">

                            <div class="section closed">
                                <h2 tabindex="0"><span class="inner">Departments</span></h2>
                                <ul>
                                  @include('components.dosa.departments-desktop')
                                </ul>
                              </div><!--
                          --><div class="section closed">
                                <h2 tabindex="0"><span class="inner">Topics</span></h2>
                                <ul>
                                  @include('components.dosa.topics-desktop')
                                </ul>
                              </div><!--
                          --><div class="section closed">
                                <h2 tabindex="0"><span class="inner">Community</span></h2>
                                <ul>
                                  @include('components.dosa.community-desktop')
                                </ul>
                              </div><!--
                          --><div class="section nuhelp closed">
                                <h2 tabindex="0"><span class="inner">NUHelp</span></h2>
                                <ul>
                                  @include('components.dosa.nuhelp-desktop')
                                </ul>
                              </div>
                            </nav>
                            <div class="northwestern-title">Northwestern University</div>
                          </div>

                          <div class="inner-right"></div>
                        </header>
                        <div class="content">
                          @yield('content')
                        </div>
                        <div class="footer closed">
                          <div class="inner">
                            <div class="arrow-button" aria-label="open footer"></div>
                            <div class="details">
                              <div class="department-name">
                                Asian/Asian American Student Affairs
                              </div><div class="divider"></div><!--
                              --><div class="address">
                                Rebecca Crown Evanston, IL 60208 <br/>
                                <a href="mailto:v.redmond@northwestern.edu">v.redmond@northwestern.edu</a> <br/>
                                Phone: 847-491-5360
                              </div><div class="divider"></div><!--
                              --><div class="dosa-links">

                              </div><div class="divider"></div><!--
                              --><div class="logo">
                                <a href="http://www.northwestern.edu"><img src="{{asset('img/nu_logo_white.png')}}" alt="Northwestern Logo" /></a>
                              </div>
                            </div>
                            <div class="links">
                              @include('components.meta.footer.dept-home-footer-links')
                              <div class="social">
                                <a class="facebook" href="http://www.facebook.com/studentaffnu" aria-label="Facebook">Facebook</a>
                                <a class="twitter" href="http://www.twitter.com/studentaffnu" aria-label="Twitter">Twitter</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="middle-overlay"></div>
                    </div>
                </div>
            </div>
        </div>

        @if (App::environment() === 'local')
          <script id="script-dev" src="{{asset('js/requireconfig.js')}}"></script>
          <script data-main="{{asset('js/main')}}" src="{{asset('assets/requirejs/require.js')}}"></script>
        @else
          <script src="{{asset('js/build-min.js')}}"></script>
        @endif

    </body>
</html>