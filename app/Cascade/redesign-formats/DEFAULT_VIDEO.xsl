<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-index-block/calling-page/system-page">
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="title"/>
                </h3>
            </div>
            <div class="basic-container">
                <xsl:for-each select="system-data-structure">
                    <xsl:variable name="video-id" select="video-id"/>
                    <xsl:variable name="type" select="type/value"/>
                    <xsl:variable name="iframe-src">
                        <xsl:choose>
                            <xsl:when test="$type = 'vimeo'">
                                <xsl:value-of select="'///player.vimeo.com/video/'"/>
                                <xsl:value-of select="$video-id"/>
                            </xsl:when>
                            <xsl:when test="$type = 'youtube'">
                                <xsl:value-of select="'///www.youtube.com/embed/'"/>
                                <xsl:value-of select="$video-id"/>
                                <xsl:value-of select="'?rel=0'"/>
                            </xsl:when>
                        </xsl:choose>
                    </xsl:variable>
                    <div class="basic-text-container">
                        <div class="before-text">
                            <xsl:copy-of select="top-text/node()"/>
                        </div>
                        <div class="video-wrapper">
                            <iframe src="{$iframe-src}" frameborder="0"
                                allowfullscreen="allowfullscreen"> </iframe>
                        </div>
                        <div class="after-text">
                            <xsl:copy-of select="bottom-text/node()"/>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>