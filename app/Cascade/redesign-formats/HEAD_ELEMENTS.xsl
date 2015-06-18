<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    
    <xsl:template match="/">
    
        <xsl:variable name="sitename">
            <xsl:value-of select="system-index-block/system-block[name='Settings']/system-data-structure/sitename"/>
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
            
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon57.png" rel="apple-touch-icon" sizes="57x57"/>
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon72.png" rel="apple-touch-icon" sizes="72x72"/>
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon76.png" rel="apple-touch-icon" sizes="76x76"/>
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon114.png" rel="apple-touch-icon" sizes="114x114"/>
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon120.png" rel="apple-touch-icon" sizes="120x120"/>
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon144.png" rel="apple-touch-icon" sizes="144x144"/>
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon152.png" rel="apple-touch-icon" sizes="152x152"/> 
        
        <link href="//go.dosa.northwestern.edu/shared/lar-redesign/css/main.css" rel="stylesheet"/>

        <script src="//go.dosa.northwestern.edu/shared/lar-redesign/js/build-min.js"></script>
    </xsl:template>
</xsl:stylesheet>