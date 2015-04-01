<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="system-index-block/calling-page/system-page">
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="title"/>
                </h3>
            </div>
            <div class="basic-container">

                <xsl:for-each select="system-data-structure">

                    <xsl:variable name="width" select="width"/>
                    <xsl:variable name="height" select="height"/>
                    <xsl:variable name="iframe-url" select="iframe-url "/>
                        
                    <div class="basic-text-container">

                        <div class="before-text">
                            <xsl:copy-of select="top-text/node()"/>
                        </div>

                        <iframe class="sa-iframe" height="{$height}" width="{$width}" frameborder="0" src="{$iframe-url}"><xsl:text> </xsl:text></iframe>

                        <div class="after-text">
                            <xsl:copy-of select="bottom-text/node()"/>
                        </div>

                    </div>

                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>