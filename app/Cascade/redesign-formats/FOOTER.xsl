<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="no" method="xml" omit-xml-declaration="yes"/>
    <!-- xsl:template match="system-index-block|system-data-structure" -->
    <xsl:template match="system-index-block">
        <xsl:variable name="department-name"
            select="system-block/system-data-structure/redesign/sitename"/>
        <xsl:for-each select="system-block/system-data-structure[address-group]">
            <div class="footer closed">
                <div class="inner">
                    <div class="arrow-button" aria-label="open footer">
                        <xsl:text>&#160;</xsl:text>
                    </div>
                    <div class="details">
                        <div class="department-name">
                            <xsl:value-of select="$department-name"/>
                        </div>
                        <div class="divider">
                            <xsl:text>&#160;</xsl:text>
                        </div>
                        <div class="address">
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
                        <div class="dosa-links">
                            <xsl:for-each select="dosa-links/item">
                                <li>
                                    <a href="{link}">
                                        <xsl:value-of select="label"/>
                                    </a>
                                </li>
                            </xsl:for-each>
                        </div>
                        <div class="divider">
                            <xsl:text>&#160;</xsl:text>
                        </div>
                        <div class="logo">
                            <a href="http://www.northwestern.edu">
                                <img
                                    data-imgrewrite="no"
                                    src="https://go.dosa.northwestern.edu/shared/lar-redesign/img/nu_logo_white.png"
                                    alt="Northwestern Logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="links">
                        <ul>
                            <li>
                                <a href="http://www.northwestern.edu/studentaffairs/">Student
                                    Affairs Home</a>
                            </li>
                            <li>
                                <a href="http://www.northwestern.edu">Northwestern Home</a>
                            </li>
                            <li>
                                <a href="#events">Plan-It Purple</a>
                            </li>
                            <li>
                                <a href="#map">Campus Map</a>
                            </li>
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