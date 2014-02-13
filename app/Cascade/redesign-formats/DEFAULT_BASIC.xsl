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
                            <div class="basic-image-wrapper">
                                <xsl:for-each select="photo-section">
                                    <xsl:variable name="element">
                                        <xsl:choose>
                                            <xsl:when
                                                test="link[@type='symlink'] or link[@type='file'] or link[@type='page']">
                                                <xsl:value-of select="'a'"/>
                                            </xsl:when>
                                            <xsl:otherwise>
                                                <xsl:value-of select="'div'"/>
                                            </xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:variable>
                                    <xsl:element name="{$element}">
                                        <xsl:attribute name="class">
                                            <xsl:value-of select="'basic-image-item'"/>
                                        </xsl:attribute>
                                        <xsl:if test="$element = 'a'">
                                            <xsl:attribute name="href">
                                                <xsl:choose>
                                                    <xsl:when test="link[@type='page']">
                                                      <xsl:value-of select="link/link"/>
                                                    </xsl:when>
                                                    <xsl:when test="link[@type='file']">
                                                      <xsl:value-of select="link/link"/>
                                                    </xsl:when>
                                                    <xsl:when test="link[@type='symlink']">
                                                      <xsl:value-of select="link/content/system-symlink"
                                                      />
                                                    </xsl:when>
                                                </xsl:choose>
                                            </xsl:attribute>
                                        </xsl:if>
                                        <img src="{photo/link}" alt="{alt-text}"/>
                                        <div class="basic-image-caption">
                                            <p>
                                                <xsl:value-of select="description"/>
                                            </p>
                                        </div>
                                    </xsl:element>
                                </xsl:for-each>
                            </div>
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
