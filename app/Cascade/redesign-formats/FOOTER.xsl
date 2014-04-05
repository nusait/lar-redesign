<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="no" method="xml" omit-xml-declaration="yes"/>
    <!-- xsl:template match="system-index-block|system-data-structure" -->
    <xsl:template match="system-index-block">
        <xsl:variable name="department-name"
            select="system-block/system-data-structure/redesign/sitename"/>
        <xsl:for-each select="system-block/system-data-structure[address-group]">
            <div class="footer">
                <div class="inner">
                    <div class="arrow-button" aria-label="open footer">
                        <xsl:text>&#160;</xsl:text>
                    </div>
                    <div class="details">
                        <div class="department-name">
                            <xsl:for-each select="address-group/text-line">
                                <xsl:value-of select="."/>
                                <xsl:if test="position() != last()">
                                    <br/>
                                </xsl:if>
                            </xsl:for-each>
                        </div>
                        <div class="divider">
                            <xsl:text>&#160;</xsl:text>
                        </div>
                        <div class="address">
                            <ul>
                                <xsl:for-each select="department-links/item">
                                    <li>
                                        <a href="{link}">
                                            <xsl:value-of select="label"/>
                                        </a>
                                    </li>
                                </xsl:for-each>
                            </ul>
                        </div>
                        <div class="divider">
                            <xsl:text>&#160;</xsl:text>
                        </div>
                        <div class="dosa-links">
                            <ul>
                                <xsl:for-each select="dosa-links/item">
                                    <li>
                                        <a href="{link}">
                                            <xsl:value-of select="label"/>
                                        </a>
                                    </li>
                                </xsl:for-each>
                            </ul>
                        </div>
                        <div class="divider">
                            <xsl:text>&#160;</xsl:text>
                        </div>
                        <div class="logo">
                            <a href="http://www.northwestern.edu">
                                <img data-imgrewrite="no"
                                    src="https://go.dosa.northwestern.edu/shared/lar-redesign/img/nu_logo_white.png"
                                    alt="Northwestern Logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="links">
                        <ul>
                            <xsl:for-each select="bottom-links/item">
                                <li>
                                    <a href="{link}">
                                        <xsl:value-of select="label"/>
                                    </a>
                                </li>
                            </xsl:for-each>
                        </ul>
                        <div class="social">
                            <a class="facebook" href="{social-links/facebook}" aria-label="Facebook"
                                >Facebook</a>
                            <a class="twitter" href="{social-links/twitter}" aria-label="Twitter"
                                >Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
