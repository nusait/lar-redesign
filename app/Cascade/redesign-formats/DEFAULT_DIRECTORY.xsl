<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="system-index-block">
        <div>
            <xsl:for-each select="//system-folder[@current='true']">
                <xsl:for-each select="system-page[name='index']">
                    <div class="title-lvl-2-container">
                        <h3 class="title-lvl-2">
                            <xsl:value-of select="title"/>
                        </h3>
                    </div>
                    <div class="basic-container">
                        <div class="basic-text-container">
                            <xsl:copy-of select="system-data-structure/default/node()"/>
                            <div class="directory-list-container">
                                <dl>
                                    <xsl:for-each
                                        select="../system-folder/system-page[name='index']">
                                        <dt>
                                            <a href="{link}">
                                                <xsl:value-of select="title"/>
                                            </a>
                                        </dt>
                                        <dd>
                                            <xsl:value-of select="description"/>
                                        </dd>
                                    </xsl:for-each>
                                </dl>
                            </div>
                        </div>
                    </div>
                </xsl:for-each>
            </xsl:for-each>
        </div>
    </xsl:template>
</xsl:stylesheet>
