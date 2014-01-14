<!DOCTYPE html>
<!--[if lt IE 9 ]> <html lang="en" class="browser-lt-ie9 show-top allow-hover"> <![endif]-->
<!--[if IE 9]><html xmlns="http://www.w3.org/1999/xhtml" lang="en" class="browser-ie9 show-top allow-hover"><![endif]-->
<!--[if !(IE)]><!--><html xmlns="http://www.w3.org/1999/xhtml" class="show-top allow-hover" lang="en"><!--<![endif]-->
    <head>
        <meta charset="UTF-8"/>
        <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
        <meta content="width=device-width, initial-scale=1.0, height=device-height, maximum-scale=1.0, user-scalable=no" name="viewport"/>
        <meta content="yes" name="apple-mobile-web-app-capable"/>
        <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
        <meta content="Redesign" name="apple-mobile-web-app-title"/>
        
        {{$HEAD_ELEMENTS}}
        
        
        <link rel="apple-touch-icon" href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon57.png" sizes="57x57">
        <link rel="apple-touch-icon" href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon72.png" sizes="72x72">
        <link rel="apple-touch-icon" href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon76.png" sizes="76x76">
        <link rel="apple-touch-icon" href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon114.png" sizes="114x114">
        <link rel="apple-touch-icon" href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon120.png" sizes="120x120">
        <link rel="apple-touch-icon" href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon144.png" sizes="144x144">
        <link rel="apple-touch-icon" href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon152.png" sizes="152x152">   
        <!-- <link rel="stylesheet" href="//go.dosa.northwestern.edu/shared/lar-redesign/css/main.css" /> -->
        <link rel="stylesheet" href="{{asset('css/main.css')}}">
        
    </head>
    <body>
        {{$STAMP}}
        <div class="ie-too-old">
            <div class="flash ie-ancient">
                <p>We're sorry, this website will not display correctly on older versions of
                    Internet Explorer. <strong>You are using Internet Explorer version <!--[if IE 7 ]>7.<![endif]-->
                        <!--[if IE 8 ]>8.<![endif]-->
                    </strong>
                    <br/>
                    <br/> Kindly switch to <a href="http://browsehappy.com/">a newer browser</a>
                    (such as Chrome, Firefox, or Internet Explorer version 9 or greater).</p>
            </div>
        </div>
        <div class="viewport">
            <div class="dosa">
                <div class="dosa-container">
                    <div class="dosa-logo">Student Affairs</div>
                    <form action="http://googlesearch.northwestern.edu/search" method="get">
                        <input name="client" type="hidden" value="default_oneboxes"/>
                        <input name="proxystylesheet" type="hidden" value="default_oneboxes"/>
                        <input aria-label="Search Input" class="search" name="q" placeholder="Search" type="search"/>
                    </form>
                    <div class="dosa-fontsize"><span class="fontsize-decrease">A</span><span class="fontsize-reset">A</span><span class="fontsize-increase">A</span></div>
                    <div class="dosa-navigation">
                        <div class="section closed">
                            <h2><span class="inner">Departments</span></h2>
                            <ul>
                                {{$DEPARTMENTS_MOBILE}}
                            </ul>
                        </div>
                        <div class="section closed">
                            <h2><span class="inner">Topics</span></h2>
                            <ul>
                                {{$TOPICS_MOBILE}}
                            </ul>
                        </div>
                        <div class="section closed">
                            <h2><span class="inner">Community</span></h2>
                            <ul>
                                {{$COMMUNITY_MOBILE}}
                            </ul>
                        </div>
                        <div class="section nuhelp closed">
                            <h2><span class="inner">NUHelp</span></h2>
                            <ul>
                                {{$NUHELP_MOBILE}}
                            </ul>
                        </div>
                    </div>
                    <div class="dosa-extra">
                        <div class="nu-logo">
                            <a href="http://www.northwestern.edu/">
                                
                                <img src="//go.dosa.northwestern.edu/shared/lar-redesign/img/NU_Logo_purple.png" alt="" />
                                
                            </a></div>
                        <div class="extra-navigation">
                            <a href="http://offices.northwestern.edu/detail/627">Contact</a>
                            <a href="http://www.northwestern.edu/studentaffairs/">Student
                                Affairs</a>
                            <a href="http://planitpurple.northwestern.edu/feed/html/447">Calendar</a>
                            <a href="http://policies.northwestern.edu/">Policy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="main-window">
                    <header aria-label="banner" class="mobile-header" role="banner">
                        <span class="button-container">
                            <button class="menu-drawer">
                                <span class="acc-hidden">Menu</span><i aria-hidden="true" class="fa fa-bars"><!-- keep --></i>
                            </button>
                        </span>
                        <span class="logo-container">
                            <span class="logo" role="heading">Division of Student Affairs</span>
                        </span>
                    </header>
                    <div class="middle" role="main">
                        <div class="inner">
                            <header aria-labelledby="banner-title" class="dosa-banner" role="banner">
                                <div class="inner-left"></div>
                                <div class="inner">
                                    <a href="http://www.northwestern.edu/studentaffairs/" id="banner-title">Division of <br/>Student Affairs</a>
                                    <div class="search">
                                        <form action="http://googlesearch.northwestern.edu/search" method="get">
                                            <input name="client" type="hidden" value="default_oneboxes"/>
                                            <input name="proxystylesheet" type="hidden" value="default_oneboxes"/>
                                            <input aria-label="Search Input" name="q" type="search"/>
                                            <button aria-label="Submit Search" type="submit"><i class="fa fa-search"><!-- keep --></i></button>
                                        </form>
                                    </div>
                                    <nav aria-label="Student Affairs Top Links" class="dosa-banner-navigation" role="navigation">
                                        <div class="section closed">
                                            <h2 tabindex="0"><span class="inner">Departments</span></h2>
                                            <ul>
                                                {{$DEPARTMENTS_DESKTOP}}
                                            </ul>
                                        </div><!--
                          --><div class="section closed">
                                            <h2 tabindex="0"><span class="inner">Topics</span></h2>
                                            <ul>
                                                {{$TOPICS_DESKTOP}}
                                            </ul>
                                        </div><!--
                          --><div class="section closed">
                                            <h2 tabindex="0"><span class="inner">Community</span></h2>
                                            <ul>
                                                {{$COMMUNITY_DESKTOP}}
                                            </ul>
                                        </div><!--
                          --><div class="section nuhelp closed">
                                            <h2 tabindex="0"><span class="inner">NUHelp</span></h2>
                                            <ul>
                                                {{$NUHELP_DESKTOP}}
                                            </ul>
                                        </div>
                                    </nav>
                                    <div class="northwestern-title">Northwestern University</div>
                                </div>
                                <div class="inner-right"></div>
                            </header>
                            <div class="content">
                                <div class="department-ribbon-region">
                                    {{$DEPARTMENT_RIBBON_NAV}}
                                </div>
                                <div class="breadcrumbs">
                                    {{$BREADCRUMBS}}
                                </div>
                                <div class="main-container">
                                    <div class="sub-navigation-lvl-2-region">
                                        {{$DEPARTMENT_SUB_NAV}}
                                    </div>
                                    <div class="dept-quick-links-region">
                                        {{$DEPARTMENT_QUICKLINKS}}
                                    </div>
                                    <div id="main" role="main">
                                        {{$DEFAULT}}
                                    </div>
                                </div>
                            </div>
                            {{$FOOTER}}
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

        
        <script>
            {{$GA_TRACKING_ID}}
        </script>
        
        
    </body>
</html>