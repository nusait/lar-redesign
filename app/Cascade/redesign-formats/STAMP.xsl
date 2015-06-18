<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="system-index-block">
        <xsl:variable name="content-type">
            <!-- xsl:value-of select="calling-page/system-page/system-data-structure/content-type"/ -->
            <xsl:choose>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-basic">basic</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-panel">panel</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-stack">stack</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-collapsible">collapsible</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-detail">detail</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-directory">directory</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-machform">machform</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-section">section</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-map">map</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-video">video</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-iframe">iframe</xsl:when>
                <xsl:when test="calling-page/system-page/system-data-structure/content-type-wcasform">wcasform</xsl:when>
                <xsl:otherwise>none</xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:for-each select="system-block[system-data-structure/redesign]">
            <xsl:variable name="stamp-class" select="system-data-structure/redesign/stamp-class"/>
            <xsl:variable name="sitename" select="system-data-structure/redesign/sitename"/>
            <xsl:variable name="googleanalyticsid" select="system-data-structure/redesign/googleanalyticsid"/>
            <xsl:variable name="no-top-ribbon">
                <xsl:choose>
                    <xsl:when test="system-data-structure/redesign/nav-options/no-top-ribbon/value = 'Yes'">
                        <xsl:value-of select="'no-top-ribbon'"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="'top-ribbon'"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <xsl:variable name="no-top-navigation">
                <xsl:choose>
                    <xsl:when test="system-data-structure/redesign/nav-options/no-top-navigation/value = 'Yes'">
                        <xsl:value-of select="'no-top-navigation'"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="'top-navigation'"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <xsl:variable name="no-side-navigation">
                <xsl:choose>
                    <xsl:when test="system-data-structure/redesign/nav-options/no-side-navigation/value = 'Yes'">
                        <xsl:value-of select="'no-side-navigation'"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="'side-navigation'"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <xsl:variable name="no-quicklinks">
                <xsl:choose>
                    <xsl:when test="system-data-structure/redesign/nav-options/no-quicklinks/value = 'Yes'">
                        <xsl:value-of select="'no-quicklinks'"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="'quicklinks'"/>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <div class="stamp {$stamp-class} type-{$content-type} {$no-top-ribbon} {$no-top-navigation} {$no-side-navigation} {$no-quicklinks}" data-googleanalyticsid="{$googleanalyticsid}" data-sitename="{$sitename}">
                <xsl:text>&#160;</xsl:text>
            </div>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>