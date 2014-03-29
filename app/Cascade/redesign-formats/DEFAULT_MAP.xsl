<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" omit-xml-declaration="yes" indent="no"/>
    <xsl:template match="system-index-block/calling-page/system-page">
        <xsl:variable name="show-first-section-heading"
            select="system-data-structure/show-first-section-heading/value"/>
        <div>
            <div class="title-lvl-2-container">
                <h3 class="title-lvl-2">
                    <xsl:value-of select="title"/>
                </h3>
            </div>
            <div class="basic-container">
                <xsl:for-each select="system-data-structure/section">
                    <div class="section-container">
                        <div class="basic-heading-container">
                            <h2>
                                <xsl:value-of select="section-heading"/>
                            </h2>
                        </div>
                        <div>
                            <xsl:attribute name="class">
                                <xsl:value-of select="'basic-image-container image-'"/>
                                <xsl:value-of select="placement/value"/>
                            </xsl:attribute>
                            <div class="basic-image-item">
                                <div class="map-wrapper">
                                    <div class="map-canvas">loading...</div>
                                    <div class="map-data hidden" data-init-zoom="{init-zoom/value}"
                                        data-min-zoom="{min-zoom/value}"
                                        data-max-zoom="{max-zoom/value}"
                                        data-center-lat="{center-lat}"
                                        data-center-long="{center-long}"
                                        data-scroll-zoom="{scroll-zoom/value}"
                                        data-dragging="{data-dragging/value}"
                                        data-zoom="{zoom/value}" data-height="{height}">
                                        <ul class="markerss">
                                            <xsl:for-each select="marker">
                                                <li class="marker" data-point-lat="{lat}"
                                                  data-point-long="{long}" data-open="{open/value}">
                                                    <xsl:copy-of select="content/node()"/></li>
                                            </xsl:for-each>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="basic-text-container">
                            <xsl:copy-of select="default/node()"/>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
