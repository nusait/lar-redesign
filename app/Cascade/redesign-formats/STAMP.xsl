<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-index-block">
        <xsl:variable name="content-type">
            <xsl:value-of
                select="calling-page/system-page/system-data-structure/content-type"/>
        </xsl:variable>
        <xsl:for-each select="system-block[system-data-structure/redesign]">
            <xsl:variable name="stamp-class" select="system-data-structure/redesign/stamp-class"/>
            <xsl:variable name="sitename" select="system-data-structure/redesign/sitename"/>
            <xsl:variable name="googleanalyticsid"
                select="system-data-structure/redesign/googleanalyticsid"/>
            <div class="stamp {$stamp-class} type-{$content-type}" data-sitename="{$sitename}"
                data-googleanalyticsid="{$googleanalyticsid}">
                <xsl:text>&#160;</xsl:text>
            </div>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
