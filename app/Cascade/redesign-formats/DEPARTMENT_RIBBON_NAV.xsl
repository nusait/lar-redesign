<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-index-block">
        <xsl:variable name="sitename">
            <xsl:value-of
                select="system-block/system-data-structure/redesign/sitename"/>
        </xsl:variable>
        <xsl:variable name="sitelink" select="system-page[name='index']/link" />
        <div class="department-header">
            <div class="department-header-bg">
                <div class="department-header-inner">
                    <a class="department-title" href="{$sitelink}">
                        <xsl:value-of select="$sitename" />
                    </a>
                    <nav class="department-nav closed" role="navigation">
                        <button class="mobile-menu-button"><xsl:text>&#160;</xsl:text></button>
                        <xsl:for-each select="system-folder">
                            <div tabindex="0">
                                <xsl:attribute name="class">
                                    <xsl:value-of select="'section closed'" />
                                    <xsl:if test="descendant::system-page[@current='true']">
                                        <xsl:value-of select="' active'" />
                                    </xsl:if>
                                </xsl:attribute>
                                <div class="navigation-item-title">
                                    <span class="inner">
                                        <xsl:for-each select="system-page">
                                            <xsl:if test="name[text()='index']">
                                                <xsl:value-of select="display-name" />
                                            </xsl:if>
                                        </xsl:for-each>
                                    </span>
                                </div>
                                <ul>
                                    <li role="presentation" class="section-title">
                                        <xsl:for-each select="system-page">
                                            <xsl:if test="name[text()='index']">
                                                <xsl:value-of select="display-name" />
                                            </xsl:if>
                                        </xsl:for-each>
                                    </li>
                                    <xsl:for-each select="system-folder/system-page">
                                        <xsl:if test="name[text()='index']">
                                            <li>
                                                <a href="{link}"><xsl:value-of select="display-name" /></a>  
                                            </li>                                          
                                        </xsl:if>
                                    </xsl:for-each>
                                </ul>
                            </div>
                        </xsl:for-each>
                    </nav>
                    
                </div>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
