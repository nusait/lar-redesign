<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="no"/>
    <!-- xsl:template match="system-index-block|system-data-structure" -->
    <xsl:template match="/">
        <xsl:for-each select="system-index-block/calling-page/system-page">
            <xsl:variable name="title" select="title" />
            <xsl:for-each select="system-data-structure">
                <div>
                    <div class="block main-block">
                        <div class="big-list-region">
                            <div class="big-list events-container">
                                <h2 class="mobile-heading" id="main-events">Events</h2>
                                <div class="divider"><xsl:text>&#160;</xsl:text></div>
                                <div aria-labelledby="main-events" class="events">
                                    <xsl:apply-templates select="panel/event-set/event"/>
                                    <a class="event-item full-calendar"
                                        href="http://planitpurple.northwestern.edu/feed/html/447">
                                        <div class="event-desc">See Full Calendar</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="rich-extra-region">
                            <div class="rich-extra news-container">
                                <h2 class="mobile-heading" id="main-headlines">News Headlines</h2>
                                <div class="divider"><xsl:text>&#160;</xsl:text></div>
                                <nav aria-labelledby="main-headlines" class="news" role="navigation">
                                    <div class="swiper-container news-img-container">
                                        <div class="swiper-wrapper">
                                            <xsl:for-each
                                                select="panel/carousel-image-set/carousel-section">
                                                <div class="swiper-slide news-img">
                                                  <img alt="{alt}" class="news-img"
                                                  data-src="[system-asset]{photo/link}[/system-asset]"
                                                  />
                                                </div>
                                            </xsl:for-each>
                                        </div>
                                    </div>
                                    <div class="pagination-container"> </div>
                                    <xsl:for-each select="panel/carousel-image-set/carousel-section">
                                        <xsl:variable name="className">
                                            <xsl:choose>
                                                <xsl:when test="position()=1">
                                                  <xsl:text>news-item active</xsl:text>
                                                </xsl:when>
                                                <xsl:otherwise><xsl:text>news-item</xsl:text></xsl:otherwise>
                                            </xsl:choose>
                                        </xsl:variable>
                                        <a class="{$className}" href="{link}">
                                            <span class="news-label">
                                                <xsl:value-of select="label"/>
                                            </span>
                                        </a>
                                    </xsl:for-each>
                                </nav>
                            </div>
                        </div>
                        <div class="q-links-region">
                            <div class="q-links quicklinks-container">
                                <h2 class="mobile-heading" id="main-quicklinks">
                                    <xsl:value-of select="panel/quick-link-set/heading"/>
                                </h2>
                                <div class="divider"><xsl:text>&#160;</xsl:text></div>
                                <nav aria-labelledby="main-quicklinks" class="quick-links"
                                    role="navigation">
                                    <div class="row row-1">
                                        <xsl:call-template name="quicklink-section">
                                            <xsl:with-param name="section"
                                                select="panel/quick-link-set/section[1]"/>
                                        </xsl:call-template>
                                        <xsl:call-template name="quicklink-section">
                                            <xsl:with-param name="section"
                                                select="panel/quick-link-set/section[2]"/>
                                        </xsl:call-template>
                                    </div>
                                    <div class="row row-2">
                                        <xsl:call-template name="quicklink-section">
                                            <xsl:with-param name="section"
                                                select="panel/quick-link-set/section[3]"/>
                                        </xsl:call-template>
                                        <xsl:call-template name="quicklink-section">
                                            <xsl:with-param name="section"
                                                select="panel/quick-link-set/section[4]"/>
                                        </xsl:call-template>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!-- END OF A PANEL BLOCK -->
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
                </div>
            </xsl:for-each>
        </xsl:for-each>
    </xsl:template>
    <xsl:template match="event">
        <a class="event-item" href="{link}">
            <div class="event-date">
                <xsl:value-of select="translate(substring(date, 1, 5), '-', '.')"/>
            </div>
            <div class="event-desc">
                <xsl:value-of select="title"/>
                <div class="event-detail">
                    <xsl:value-of select="location"/>
                </div>
            </div>
        </a>
    </xsl:template>
    <xsl:template name="quicklink-section">
        <xsl:param name="section"/>
        <xsl:variable name="href">
            <xsl:choose>
                <xsl:when test="$section/internal-link/link">
                    <xsl:value-of select="$section/internal-link/link"/>
                </xsl:when>
                <xsl:when test="$section/external-link/content/system-symlink">
                    <xsl:value-of select="$section/external-link/content/system-symlink"/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:text>http://www.example.com/</xsl:text>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <a class="link-item" href="{$href}">
            <div class="link-img">
                <img alt="{$section/alt}" src="{$section/photo/link}"/>
            </div>
            <span class="link-label">
                <xsl:choose>
                    <xsl:when test="$href = 'http://www.example.com/'">
                        <xsl:text>No Link?</xsl:text>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="$section/label"/>
                    </xsl:otherwise>
                </xsl:choose>
            </span>
        </a>
        <xsl:value-of select="'&#xA;'"/>
    </xsl:template>
</xsl:stylesheet>
