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
                    <div class="basic-text-container">
                        <div>
                            <xsl:copy-of select="default/node()"/>
                        </div>
                        <div class="bootstrap-styles" style="background-color: transparent">
                        
                            <div id="form-container"> </div>  
                            
                        </div>
                        
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>