<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-index-block">
        <div class="dept-quick-links-outer">
            <div class="dept-quick-links-container">
                <xsl:for-each
                    select="system-page/system-data-structure[panel]">
                    <!-- will only be one of such above homepages -->
                    <nav class="dept-quick-links">
                        <div class="dept-quick-links-title">
                            <xsl:value-of select="panel/quick-link-set/heading"/>
                        </div>
                        <xsl:for-each select="panel/quick-link-set/section">
                            <xsl:variable name="href">
                                <xsl:choose>
                                    <xsl:when test="internal-link/link">
                                        <xsl:value-of select="internal-link/link"/>
                                    </xsl:when>
                                    <xsl:when test="external-link/content/system-symlink">
                                        <xsl:value-of select="external-link/content/system-symlink"
                                        />
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:text>http://www.example.com/</xsl:text>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:variable>
                            <li>
                                <a href="{$href}">
                                    <xsl:choose>
                                        <xsl:when test="$href = 'http://www.example.com/'">
                                            <xsl:text>No Link?</xsl:text>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <xsl:value-of select="label"/>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                </a>
                            </li>
                        </xsl:for-each>
                    </nav>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
