<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="/">
        <xsl:variable name="title" select="system-index-block/calling-page/system-page/title"/>
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="$title"/>
                </h3>
            </div>
            <div class="stack-container">
                <xsl:for-each
                    select="system-index-block/calling-page/system-page/system-data-structure/stack-section">
                    <xsl:variable name="elementname">
                        <xsl:choose>
                            <xsl:when test="link[@type]">
                                <xsl:value-of select="'a'"/>
                            </xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="'div'"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:variable>
                    <xsl:element name="{$elementname}">
                        <xsl:attribute name="class">
                            <xsl:value-of select="'stack-item'"/>
                        </xsl:attribute>
                        <xsl:if test="$elementname = 'a'">
                            <xsl:attribute name="href">
                                <xsl:choose>
                                    <xsl:when test="link[@type='symlink']">
                                        <xsl:value-of select="link/content/system-symlink"/>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="link/link"/>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:attribute>
                        </xsl:if>
                        <div class="stack-image">
                            <img src="{photo/link}" alt="{photo-alt-text}" data-width="600"
                                data-height="600"/>
                        </div>
                        <div class="stack-text">
                            <div class="stack-title">
                                <xsl:value-of select="title"/>
                            </div>
                            <div class="stack-subtitle">
                                <xsl:value-of select="subtitle"/>
                            </div>
                            <div class="stack-description">
                                <xsl:value-of select="description"/>
                            </div>
                        </div>
                    </xsl:element>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
