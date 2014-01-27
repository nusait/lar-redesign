<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-data-structure">
        <div class="blog-content">
            <xsl:text> </xsl:text>
        </div>
        <a class="blog-label" href="{url}">Student Blog</a>
    </xsl:template>
</xsl:stylesheet>
