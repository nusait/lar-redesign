<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="/">
        <xsl:variable name="title" select="system-index-block/calling-page/system-page/title" />
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2"><xsl:value-of select="$title" /></h3>
            </div>
            <div class="collapsable-container">
                <xsl:for-each select="system-index-block/calling-page/system-page/system-data-structure/collapsible-section">
                    <div class="collapsable-item closed">
                        <div class="collapsable-title"><xsl:value-of select="subject" /></div>
                        <div class="collapsable-content">
                            <xsl:copy-of select="content/node()"/>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
