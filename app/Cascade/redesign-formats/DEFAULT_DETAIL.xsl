<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="system-index-block/calling-page/system-page">
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="title"/>
                </h3>
            </div>
            <div class="detail-container">
                <xsl:for-each select="system-data-structure">
                    <div class="detail-aside">
                        <div class="detail-item">
                            <img data-height="900" data-width="600" src="{stack-section/photo/link}" alt="{stack-section/photo-alt-text}" class="detail-img" />
                                <div class="detail-desc">
                                    <xsl:value-of select="stack-section/description" />
                                </div>
                        </div>   
                    </div>  
                    <div class="detail-main">
                        <xsl:copy-of select="default/node()"/>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
