<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-index-block/calling-page/system-page">
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="title"/>
                </h3>
            </div>
            <div class="basic-container">
                <xsl:for-each select="system-data-structure">
                    <xsl:variable name="form-id" select="form-id"/>
                    <div class="basic-text-container">
                        <div>
                            <xsl:copy-of select="default/node()"/>
                        </div>
                        <div class="machform" data-id="{$form-id}"> </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
