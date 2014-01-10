<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    
    <xsl:template match="/">
        <HERE-YOU-GO>
            <xsl:copy-of select="."/>
        </HERE-YOU-GO>
    </xsl:template>
    
</xsl:stylesheet>
