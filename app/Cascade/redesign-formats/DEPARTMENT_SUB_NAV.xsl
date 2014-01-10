<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="no"/>
    <xsl:template match="system-index-block">
        <div class="sub-navigation-lvl-2-outer">
            <div class="sub-navigation-lvl-2-container">
                <xsl:for-each select="system-folder[descendant::system-page[@current='true']]">
                    <div class="sub-navigation-lvl-2-title">
                        <span>
                            <xsl:value-of select="system-page/display-name"/>
                        </span>
                    </div>
                    <nav class="sub-navigation-lvl-2">
                        <xsl:for-each select="system-folder">
                            <xsl:choose>
                                <xsl:when test="descendant::system-page[@current='true']">
                                    <li class="active">
                                        <a href="{system-page/link}">
                                            <span class="lvl-nav-title-info">Submenu For :</span>
                                            <xsl:value-of select="' '"/>
                                            <xsl:value-of select="system-page/display-name"/>
                                        </a>
                                        <xsl:if test="system-folder">
                                            <ul class="lvl-3">
                                                <xsl:for-each select="system-folder">
                                                  <li>
                                                  <a href="{system-page/link}">
                                                  <xsl:value-of select="system-page/display-name"/>
                                                  </a>
                                                  </li>
                                                </xsl:for-each>
                                            </ul>
                                        </xsl:if>
                                    </li>
                                </xsl:when>
                                <xsl:otherwise>
                                    <li>
                                        <a href="{system-page/link}">
                                            <xsl:value-of select="system-page/display-name"/>
                                        </a>
                                    </li>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:for-each>
                    </nav>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
