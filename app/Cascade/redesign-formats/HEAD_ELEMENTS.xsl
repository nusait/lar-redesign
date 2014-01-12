<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="/">
        <xsl:variable name="sitename">
            <xsl:value-of
                select="system-index-block/system-block[name='Settings']/system-data-structure/sitename"
            />
        </xsl:variable>
        <xsl:for-each select="system-index-block/calling-page/system-page">
            <title><xsl:value-of select="title"/> : <xsl:value-of select="$sitename"/> |
                Northwestern Student Affairs</title>
            <meta content="{keywords}" name="keywords"/>
            <meta content="{description}" name="description"/>
        </xsl:for-each>
        <style>
            /* get rid of Cascade editing push icons, annoying! */
            img[onclick]{
                display:none !important;
            }</style>
    </xsl:template>
</xsl:stylesheet>
