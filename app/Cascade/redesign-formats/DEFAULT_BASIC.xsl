<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="no"/>
    <xsl:template match="system-index-block/calling-page/system-page">
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="title"/>
                </h3>
            </div>
            <div class="basic-container">
                <xsl:for-each select="system-data-structure">
                    <xsl:if test="count(photo-section/photo/link) > 0">
                        <div class="basic-image-container">
                            <xsl:for-each select="photo-section">
                                <div class="basic-image-item">
                                    <img src="{photo/link}" alt="{alt-text}"/>
                                    <div class="basic-image-caption">
                                        <p>
                                            <xsl:value-of select="description"/>
                                            <xsl:text>&#160;</xsl:text>
                                            <xsl:choose>
                                                <xsl:when test="link[@type='page']">
                                                    <a href="{link/link}">Internal Page Link</a>
                                                </xsl:when>
                                                <xsl:when test="link[@type='file']">
                                                    <a href="{link/link}">Internal File Link</a>
                                                </xsl:when>
                                                <xsl:when test="link[@type='symlink']">
                                                    <a href="{link/content/system-symlink}">External Symlink</a>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <xsl:text>&#160;</xsl:text>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </p>
                                    </div>
                                </div>
                            </xsl:for-each>
                        </div>   
                    </xsl:if>               
                    <div class="basic-text-container">
                        <xsl:copy-of select="default/node()"/>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
