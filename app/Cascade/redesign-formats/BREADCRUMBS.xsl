<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-index-block">
        <div class="crumb-item">
            <xsl:variable name="home-display-name">
                <xsl:value-of select="system-block/system-data-structure/redesign/sitename"/>
            </xsl:variable>
            <xsl:choose>
                <xsl:when test="system-page[name='index'][@current='true']">
                    <xsl:value-of select="$home-display-name"/>
                </xsl:when>
                <xsl:otherwise>
                    <a href="{system-page[name='index']/link}">
                        <xsl:value-of select="$home-display-name"/>
                    </a>
                </xsl:otherwise>
            </xsl:choose>
        </div>
        <xsl:value-of select="' '"/>
        <xsl:apply-templates select="system-folder[.//system-page[@current='true']]"/>
    </xsl:template>
    <xsl:template match="system-folder">
        <div class="crumb-item">
            <xsl:variable name="display-name">
                <xsl:value-of select="system-page[name='index']/display-name"/>
            </xsl:variable>
            <xsl:choose>
                <xsl:when test="system-page[name='index'][@current='true']">
                    <xsl:value-of select="$display-name"/>
                </xsl:when>
                <xsl:otherwise>
                    <a href="{system-page[name='index']/link}">
                        <xsl:value-of select="$display-name"/>
                    </a>
                </xsl:otherwise>
            </xsl:choose>
        </div>
        <xsl:value-of select="' '"/>
        <xsl:apply-templates select="system-folder[.//system-page[@current='true']]"/>
    </xsl:template>
</xsl:stylesheet>
