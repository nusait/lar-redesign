<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    
    <xsl:template match="/">
        <xsl:variable name="sitename">
            <xsl:value-of select="system-index-block/system-block[name='Settings']/system-data-structure/sitename"/>
        </xsl:variable>
        <xsl:for-each select="system-index-block/calling-page/system-page">
            <title><xsl:value-of select="title"/> : <xsl:value-of select="$sitename"/> | Northwestern Student Affairs</title>
            <meta name="keywords" content="{keywords}"/>
            <meta name="description" content="{description}"/>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
