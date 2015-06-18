<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="no"/>
    <xsl:template match="system-index-block/calling-page/system-page">
        <xsl:variable name="show-first-section-heading"
            select="system-data-structure/show-first-section-heading/value"/>
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="title"/>
                </h3>
            </div>
            <xsl:if test="count(system-data-structure/top-text/*) &gt; 0">
                <div class="before-text">
                    <xsl:copy-of select="system-data-structure/top-text/node()"/>
                </div>
            </xsl:if>
            <div class="basic-container">
                <xsl:for-each select="system-data-structure/section">
                    <div class="section-container">
                        <xsl:choose>
                            <xsl:when test="(position() = 1)">
                                <xsl:if test="$show-first-section-heading = 'Yes'">
                                    <div class="basic-heading-container">
                                        <h2>
                                            <xsl:value-of select="section-heading"/>
                                        </h2>
                                    </div>
                                </xsl:if>
                            </xsl:when>
                            <xsl:otherwise>
                                <div class="basic-heading-container">
                                    <h2>
                                        <xsl:value-of select="section-heading"/>
                                    </h2>
                                </div>
                            </xsl:otherwise>
                        </xsl:choose>
                        <div>
                            <xsl:attribute name="class">
                                <xsl:value-of select="'basic-image-container image-'"/>
                                <xsl:value-of select="placement/value"/>
                            </xsl:attribute>
                            <div class="basic-image-item">
                                <img src="{photo/link}" alt="{alt-text}"/>
                                <xsl:if test="description != ''">
                                    <div class="basic-image-caption">
                                        <p>
                                            <xsl:value-of select="description"/>
                                        </p>
                                    </div>
                                </xsl:if>
                            </div>
                        </div>
                        <div class="basic-text-container">
                            <xsl:copy-of select="default/node()"/>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
