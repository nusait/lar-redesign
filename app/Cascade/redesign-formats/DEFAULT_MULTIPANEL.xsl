<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="system-index-block">
        <xsl:for-each select="calling-page/system-page">
            <xsl:variable name="title" select="title"/>
            <xsl:for-each select="system-data-structure">
                <div>
                    <xsl:for-each select="panel-container">
                        <xsl:if test="position() &gt; 1">
                            <div class="new-block-divider">
                                <xsl:text>&#160;</xsl:text>
                            </div>
                        </xsl:if>
                        <div>
                            <xsl:attribute name="class">
                                <xsl:choose>
                                    <xsl:when test="position() = 1">
                                        <xsl:value-of select="'block main-block'"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="'block secondary-block'"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:attribute>
                            <xsl:for-each select="big-list/content/system-data-structure">
                                <xsl:variable name="class">
                                    <xsl:text>big-list-region</xsl:text>
                                    <!--<xsl:if test="count(content-type-twitter-block) &gt; 0">
                                        <xsl:text> big-list twitter-container</xsl:text>
                                    </xsl:if>-->
                                </xsl:variable>
                                <div class="{$class}">
                                    <xsl:choose>
                                        <xsl:when test="count(content-type-twitter-block) &gt; 0">
                                            <xsl:call-template name="twitter"/>
                                        </xsl:when>
                                        <xsl:when test="count(pip-feed) &gt; 0">
                                            <xsl:call-template name="planitpurple"/>
                                        </xsl:when>
                                        <xsl:when test="count(content-type-callouts-block) &gt; 0">
                                            <xsl:call-template name="callouts"/>
                                        </xsl:when>
                                    </xsl:choose>
                                </div>
                            </xsl:for-each>
                            <xsl:for-each select="rich-extra/content/system-data-structure">
                                <div class="rich-extra-region">
                                    <xsl:choose>
                                        <xsl:when test="count(content-type-blog-block) &gt; 0">
                                            <div class="rich-extra blog-container">
                                                <div class="blog-content">
                                                    <xsl:text/>
                                                </div>
                                                <a class="blog-label" href="{url}">Student Blog</a>
                                            </div>
                                        </xsl:when>
                                        <xsl:when test="count(content-type-carousel-block) &gt; 0">
                                            <xsl:call-template name="carousel"/>
                                        </xsl:when>
                                    </xsl:choose>
                                </div>
                            </xsl:for-each>
                            <xsl:for-each select="q-links/content/system-data-structure">
                                <div class="q-links-region">
                                    <xsl:choose>
                                        <xsl:when test="count(content-type-quick-links-block) &gt; 0">
                                            <xsl:call-template name="quick-links"/>
                                        </xsl:when>
                                    </xsl:choose>
                                </div>
                            </xsl:for-each>
                        </div>
                    </xsl:for-each>
                    <xsl:for-each select="text-container[main-content != '']">
                        <div class="block-divider">
                            <xsl:text>&#160;</xsl:text>
                        </div>
                        <div class="secondary text-block">
                            <div class="text-block">
                                <div class="main-text">
                                    <h3 class="text-title">
                                        <xsl:value-of select="$title"/>
                                    </h3>
                                    <xsl:copy-of select="main-content/node()"/>
                                </div>
                                <div class="side-text">
                                    <h3 class="text-title">
                                        <xsl:value-of select="side-title"/>
                                    </h3>
                                    <xsl:copy-of select="side-content/node()"/>
                                </div>
                            </div>
                        </div>
                    </xsl:for-each>
                </div>
            </xsl:for-each>
        </xsl:for-each>
    </xsl:template>
    <xsl:template name="callouts">
        <div class="big-list generic-container">
            <h2 class="mobile-heading">
                <xsl:value-of select="heading"/>
            </h2>
            <div class="divider"><xsl:value-of select="'&#xA;'"/></div>
            <div class="generic-list">
                <xsl:for-each select="section">
                    <xsl:variable name="icon-classname" select="icon-classname"/>
                    <xsl:variable name="href">
                        <xsl:choose>
                            <xsl:when test="link[@type='page']">
                                <xsl:value-of select="link/link"/>
                            </xsl:when>
                            <xsl:when test="link[@type='file']">
                                <xsl:value-of select="link/link"/>
                            </xsl:when>
                            <xsl:when test="link[@type='symlink']">
                                <xsl:value-of select="link/content/system-symlink"/>
                            </xsl:when>
                        </xsl:choose>
                    </xsl:variable>
                    <a class="generic-item" href="{$href}">
                        <div class="generic-icon">
                            <i class="fa fa-{$icon-classname}">
                                <xsl:value-of select="'&#xA;'"/>
                            </i>
                        </div>
                        <div class="generic-text">
                            <xsl:value-of select="label"/>
                        </div>
                    </a>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="planitpurple">
        <xsl:variable name="full-calendar-href">
            <xsl:value-of select="full-calendar"/>
        </xsl:variable>
        <div class="big-list events-container">
            <h2 class="mobile-heading" id="main-events">Events</h2>
            <div class="divider">
                <xsl:text>&#160;</xsl:text>
            </div>
            <div aria-labelledby="main-events" class="events">
                <xsl:for-each select="pip-feed/content/planitpurple/event">
                    <xsl:if test="position() &lt; 5">
                        <a class="event-item" href="{ppurl}">
                            <div class="event-date">
                                <xsl:value-of select="translate(substring(isodate, 6, 5), '-', '.')"/>
                            </div>
                            <div class="event-desc">
                                <xsl:value-of select="title"/>
                                <div class="event-detail">
                                    <xsl:choose>
                                        <xsl:when test="address/building_name != ''">
                                            <xsl:value-of select="address/building_name"/>   
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <xsl:comment>keepme</xsl:comment>   
                                        </xsl:otherwise>
                                    </xsl:choose>
                                    
                                </div>
                            </div>
                        </a>
                    </xsl:if>
                </xsl:for-each>
                <a class="event-item full-calendar" href="{$full-calendar-href}">
                    <div class="event-desc">See Full Calendar</div>
                </a>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="twitter">
        <div class="big-list twitter-container">
            <div class="inner-container">
                <div class="short">
                    <a class="twitter-timeline" data-dnt="true" data-widget-id="{twitter-link[1]/data-widget-id}" height="480" href="{twitter-link[1]/href}" width="100%">Loading Twitter ...</a>
                </div>
                <div class="tall hidden">
                    <a class="twitter-timeline" data-dnt="true" data-widget-id="{twitter-link[2]/data-widget-id}" height="685" href="{twitter-link[2]/href}" width="100%">Loading Twitter ...</a>
                </div>
                <script>!function(d,s,id){var
                    js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </div>
        </div>
    </xsl:template>
    <xsl:template name="quick-links">
        <div class="q-links quicklinks-container">
            <h2 class="mobile-heading" id="main-quicklinks">
                <xsl:value-of select="heading"/>
            </h2>
            <div class="divider">
                <xsl:text>&#160;</xsl:text>
            </div>
            <nav aria-labelledby="main-quicklinks" class="quick-links" role="navigation">
                <div class="row row-1">
                    <xsl:call-template name="quicklink-section">
                        <xsl:with-param name="section" select="section[1]"/>
                    </xsl:call-template>
                    <xsl:call-template name="quicklink-section">
                        <xsl:with-param name="section" select="section[2]"/>
                    </xsl:call-template>
                </div>
                <div class="row row-2">
                    <xsl:call-template name="quicklink-section">
                        <xsl:with-param name="section" select="section[3]"/>
                    </xsl:call-template>
                    <xsl:call-template name="quicklink-section">
                        <xsl:with-param name="section" select="section[4]"/>
                    </xsl:call-template>
                </div>
            </nav>
        </div>
    </xsl:template>
    <xsl:template name="quicklink-section">
        <xsl:param name="section"/>
        <xsl:variable name="href">
            <xsl:choose>
                <xsl:when test="$section/link[@type='page']">
                    <xsl:value-of select="$section/link/link"/>
                </xsl:when>
                <xsl:when test="$section/link[@type='file']">
                    <xsl:value-of select="$section/link/link"/>
                </xsl:when>
                <xsl:when test="$section/link[@type='symlink']">
                    <xsl:value-of select="$section/link/content/system-symlink"/>
                </xsl:when>
            </xsl:choose>
        </xsl:variable>
        <a class="link-item" href="{$href}">
            <div class="link-img">
                <img alt="{$section/alt}" data-height="600" data-width="600" src="{$section/photo/link}"/>
            </div>
            <span class="link-label">
                <xsl:value-of select="$section/label"/>
            </span>
        </a>
        <xsl:value-of select="'&#xA;'"/>
    </xsl:template>
    <xsl:template name="carousel">
        <div class="rich-extra news-container" data-initial-slide="{initial-slide/value}">
            <h2 class="mobile-heading" id="main-headlines">News Headlines</h2>
            <div class="divider">
                <xsl:text>&#160;</xsl:text>
            </div>
            <nav aria-labelledby="main-headlines" class="news" role="navigation">
                <div class="swiper-container news-img-container">
                    <div class="swiper-prev swiper-direction" data-direction="prev">
                        <div class="prev-icon icon"> </div>
                    </div>
                    <div class="swiper-next swiper-direction" data-direction="next">
                        <div class="next-icon icon"> </div>
                    </div>
                    <div class="swiper-wrapper">
                        <xsl:for-each select="carousel-section">
                            <div class="swiper-slide news-img">
                                <img alt="{alt}" class="news-img" data-height="300" data-src="[system-asset]{photo/link}[/system-asset]" data-width="750"/>
                            </div>
                        </xsl:for-each>
                    </div>
                </div>
                <div class="pagination-container">
                    <xsl:text>&#160;</xsl:text>
                </div>
                <xsl:for-each select="carousel-section">
                    <xsl:variable name="className">
                        <xsl:choose>
                            <xsl:when test="position()=1">
                                <xsl:text>news-item active</xsl:text>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:text>news-item</xsl:text>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:variable name="link">
                        <xsl:choose>
                            <xsl:when test="link[@type='page']">
                                <xsl:value-of select="link/link"/>
                            </xsl:when>
                            <xsl:when test="link[@type='file']">
                                <xsl:value-of select="link/link"/>
                            </xsl:when>
                            <xsl:when test="link[@type='symlink']">
                                <xsl:value-of select="link/content/system-symlink"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:text>&#160;</xsl:text>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <a class="{$className}" href="{$link}">
                        <span class="news-label">
                            <xsl:value-of select="label"/>
                        </span>
                    </a>
                </xsl:for-each>
            </nav>
        </div>
    </xsl:template>
</xsl:stylesheet>