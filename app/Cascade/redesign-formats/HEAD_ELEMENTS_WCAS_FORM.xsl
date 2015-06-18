<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="/">
        <xsl:variable name="sitename">
            <xsl:value-of select="system-index-block/system-block[name='Settings']/system-data-structure/sitename"/>
        </xsl:variable>
        <xsl:variable name="form-url">
            <xsl:value-of select="system-index-block/calling-page/system-page/system-data-structure/form-url"/>
        </xsl:variable>
        <xsl:variable name="base-url">
            <xsl:value-of select="system-index-block/calling-page/system-page/system-data-structure/base-url"/>
        </xsl:variable>
        <xsl:for-each select="system-index-block/calling-page/system-page">
            <title><xsl:value-of select="title"/> : <xsl:value-of select="$sitename"/> |
                Northwestern Student Affairs</title>
            <meta content="{keywords}" name="keywords"/>
            <meta content="{description}" name="description"/>
            <meta content="{$form-url}" name="redirect-to-url"/>
        </xsl:for-each>
        <base href="{$base-url}"/>
        <script>
        
            if (location.hostname === 'www.northwestern.edu') {
                if (sessionStorage.noRedirect !== 'yes') {
                    location.replace(document.querySelector('meta[name=redirect-to-url]').content);
                } 
            }
            
        </script>
        <style>
            /* get rid of Cascade editing push icons, annoying! */
            img[onclick]{
                display:none !important;
            }</style>
            
           
        <link href="https://static.forms.northwestern.edu/1/css/bootstrap.namespaced.min.css" rel="stylesheet"/>
        <link href="https://static.forms.northwestern.edu/1/css/bootstrap-responsive.namespaced.min.css" rel="stylesheet"/> 
        <link href="https://static.forms.northwestern.edu/1/css/northwestern-bootstrap.namespaced.css" rel="stylesheet"/> 
        
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon57.png" rel="apple-touch-icon" sizes="57x57"/>
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon72.png" rel="apple-touch-icon" sizes="72x72"/>
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon76.png" rel="apple-touch-icon" sizes="76x76"/>
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon114.png" rel="apple-touch-icon" sizes="114x114"/>
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon120.png" rel="apple-touch-icon" sizes="120x120"/>
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon144.png" rel="apple-touch-icon" sizes="144x144"/>
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/img/icons/icon152.png" rel="apple-touch-icon" sizes="152x152"/> 
        
        <link href="https://go.dosa.northwestern.edu/shared/lar-redesign/css/main.css" rel="stylesheet"/>

        <script src="https://go.dosa.northwestern.edu/shared/lar-redesign/js/build-min.js"></script>
        
        <script src="https://static.forms.northwestern.edu/1/js/modernizr-respond.min.js"></script>
        <script src="https://static.forms.northwestern.edu/1/js/bootstrap.min.js"></script>
        <script src="https://static.forms.northwestern.edu/1/js/jquery.onlineformhelpers.js"></script>
        <script src="https://static.forms.northwestern.edu/1/js/plugins.js"></script>
    </xsl:template>
</xsl:stylesheet>