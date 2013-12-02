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
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" />
        <link rel="stylesheet" href="{{asset('css/main.css')}}" />
        <!--<script type="text/javascript" src="//use.typekit.net/jfq3vqp.js"></script>-->
        <!--<script type="text/javascript">try{Typekit.load();}catch(e){}</script>-->
    </head>
    <body>
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
                                <span class="acc-hidden">Menu</span><i class="icon-reorder" aria-hidden="true"><!-- keep --></i>
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
                                <button type="submit" aria-label="Submit Search"><i class="icon-search"><!-- keep --></i></button>
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
                          </div>
                          <div class="inner-right"></div>
                        </header>
                        <div class="content">
                            <div class="title">
                                <h1>Student Affairs</h1>
                                <button class="menu"><span class="acc-hidden">Menu</span><i class="icon-reorder" aria-hidden="true"><!-- keep --></i></button>
                            </div>
                            <div class="divider-h1"></div>
                            <div class="block main-block">
                              <div class="big-list events-container">
                                <h2 id="main-events">Events</h2>
                                <div class="divider"></div>
                                <div class="events" aria-labelledby="main-events" >
                                    <a class="event-item">
                                        <div class="event-date">05.21</div>
                                        <div class="event-desc">
                                          How to Stand Out at Your Summer Internship
                                          <div class="event-detail">Norris Center</div>
                                        </div>
                                    </a>
                                    <a class="event-item">
                                        <div class="event-date">05.23</div>
                                        <div class="event-desc">
                                          UCS Chicago Campus Tour
                                          <div class="event-detail">Norris Center</div>
                                        </div>
                                    </a>
                                    <a class="event-item">
                                        <div class="event-date">05.25</div>
                                        <div class="event-desc">
                                          First Day at your job
                                          <div class="event-detail">Norris Center</div>
                                        </div>
                                    </a>
                                    <a class="event-item">
                                        <div class="event-date">05.27</div>
                                        <div class="event-desc">
                                          Mistakes on your first day at your job
                                          <div class="event-detail">Norris Center</div>
                                        </div>
                                    </a>
                                    <a class="event-item full-calendar">
                                        <div class="event-desc">
                                          Full Calendar
                                        </div>
                                    </a>
                                </div>
                              </div>
                              <div class="rich-extra news-container">
                                <h2 id="main-headlines">News Headlines</h2>
                                <div class="divider"></div>
                                <nav class="news" aria-labelledby="main-headlines" role="navigation">
                                    <div class="swiper-container news-img-container">
                                      <div class="swiper-wrapper">
                                          <div class="swiper-slide news-img">
                                            <img class="news-img" data-src="{{asset('img/news/wildcat_welcome_banner.jpg')}}" alt="Wildcat Welcome"/>
                                          </div>
                                          <div class="swiper-slide news-img">
                                            <img class="news-img" data-src="{{asset('img/news/career_fair.jpg')}}" alt="Career Fair"/>
                                          </div>
                                          <div class="swiper-slide news-img">
                                            <img class="news-img" data-src="{{asset('img/news/nuhelp_banner.jpg')}}" alt="NU Help"/>
                                          </div>
                                          <div class="swiper-slide news-img">
                                            <img class="news-img" data-src="{{asset('img/news/aawh.jpg')}}" alt="African American Student Affairs Welcome Home Reception"/>
                                          </div>
                                          <div class="swiper-slide news-img">
                                            <img class="news-img" data-src="{{asset('img/news/latinu_banner.jpg')}}" alt="Festival LatiNU"/>
                                          </div>
                                      </div>
                                    </div>
                                    <div class="pagination-container"></div>
                                    <a href="#" class="news-item active"><span class="news-label">Wildcat Welcome</span></a><!--
                                 --><a href="#" class="news-item"><span class="news-label">Career Fair</span></a><!--
                                 --><a href="#" class="news-item"><span class="news-label">NUHelp</span></a><!--
                                 --><a href="#" class="news-item"><span class="news-label">African American Student Affairs Welcome Home Reception</span></a><!--
                               --><a href="#" class="news-item"><span class="news-label">Festival LatiNU</span></a>
                                </nav>
                              </div>
                              <div class="q-links quicklinks-container">
                                <h2 id="main-quicklinks">Quick Links</h2>
                                <div class="divider"></div>
                                <nav class="quick-links" aria-labelledby="main-quicklinks" role="navigation">
                                    <div class="row row-1">
                                      <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/mission.jpg')}}" alt="mission"/></div><span class="link-label">Mission</span></a>
                                      <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/nuhelp.jpg')}}" alt="NU help"/></div><span class="link-label">Nuhelp</span></a>
                                    </div>
                                    <div class="row row-2">
                                        <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/social.jpg')}}" alt="social"/></div><span class="link-label">Social</span></a>
                                        <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/giving.jpg')}}" alt="giving"/></div><span class="link-label">Giving</span></a>
                                    </div>
                                </nav>
                              </div>
                            </div>
                            <div class="block-divider"></div>
                            <div class="block secondary-block">
                              <div class="big-list twitter-container">
                                <div class="inner-container">
                                  <div class="short">
                                    <a class="twitter-timeline" height="480" width="100%" data-dnt="true" href="https://twitter.com/StudentAffNU" data-widget-id="381608580614336512">Loading Twitter ...</a>

                                  </div>
                                  <div class="tall hidden">
                                    <a class="twitter-timeline" height="685" width="100%" data-dnt="true" href="https://twitter.com/StudentAffNU" data-widget-id="381609572332363776">Loading Twitter ...</a>
                                    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                                  </div>
                                </div>
                              </div>
                              <div class="rich-extra blog-container">
                                <div class="blog-content">
                                </div>
                                <a href="http://studentaffairsnu.wordpress.com/" class="blog-label">Student Blog</a>
                              </div>
                              <div class="q-links quicklinks-container">
                                <h2 id="secondary-quicklinks">Offices</h2>
                                <div class="divider"></div>
                                <nav class="quick-links" aria-labelledby="main-quicklinks" role="navigation">
                                    <div class="row row-1">
                                      <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/vice_president.jpg')}}" alt="vice president"/></div><span class="link-label">Vice President</span></a>
                                      <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/dean_of_students.jpg')}}" alt="Dean of students"/></div><span class="link-label">Dean of students</span></a>
                                    </div>
                                    <div class="row row-2">
                                      <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/auxiliary.jpg')}}" alt="auxiliary"/></div><span class="link-label">Auxiliary</span></a>
                                      <a href="http://google.com" class="link-item"><div class="link-img"><img src="{{asset('img/qlinks/engagement.jpg')}}" alt="engagement"/></div><span class="link-label">Engagement</span></a>
                                    </div>
                                </nav>
                              </div>
                            </div>
                        </div>
                        <div class="dosa-footer">
                          <div class="inner">
                            <div class="details">
                              <div class="address">
                                Vice President of Student Affairs <br/>
                                Rebecca Crown Evanston, IL 60208 <br/>
                                Email: v.redmond@northwestern.edu <br/>
                                Phone: 847-491-5360
                              </div>
                              <div class="logo">
                                <a href="http://www.northwestern.edu"><img src="{{asset('img/nu_logo_white.png')}}" alt="Northwestern Logo" /></a>
                              </div>
                              <div class="social">
                                <a class="facebook" href="http://www.facebook.com/studentaffnu" aria-label="Facebook">Facebook</a>
                                <a class="twitter" href="http://www.twitter.com/studentaffnu" aria-label="Twitter">Twitter</a>
                              </div>
                            </div>
                            <div class="links">
                              @include('components.meta.footer.dvsn-home-footer-links')
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="middle-overlay"></div>
                    </div>

                    <footer class="mobile-footer">
                        <div class="social">
                          <a class="facebook" href="http://www.facebook.com/studentaffnu" aria-label="Facebook">Facebook</a>
                          <a class="twitter" href="http://www.twitter.com/studentaffnu" aria-label="Twitter">Twitter</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        <!-- while local:
        -->
        <script id="script-dev" src="{{asset('js/requireconfig.js')}}"></script>
        <script data-main="{{asset('js/main')}}" src="{{asset('assets/requirejs/require.js')}}"></script>

        <!-- while staging (build.js or build-min.js):
        <script src="public/js/build.js"></script>
        -->

        <!-- other -->
        <script src="{{asset('js/app.js')}}"></script>
        <script>
                //<![CDATA[
                if ( /live/.test(location.href) ) {
                    document.write('<script src="http://' +
                        (location.host || 'localhost').split(':')[0] +
                        ':35729/livereload.js?snipver=1"></' +
                        'script>'
                    );
                }
                //]]>
        </script>
    </body>
</html>