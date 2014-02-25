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
                    <xsl:variable name="map-id" select="map-id"/>
                    <div class="basic-text-container">
                        <div class="before-text">
                            <xsl:copy-of select="top-text/node()"/>
                        </div>
                        <div class="map-wrapper">
                            <iframe src="///mapsengine.google.com/map/embed?mid={$map-id}"
                                width="100%" height="{height}px" frameborder="0"> </iframe>
                        </div>
                        <div class="after-text">
                            <xsl:copy-of select="bottom-text/node()"/>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
