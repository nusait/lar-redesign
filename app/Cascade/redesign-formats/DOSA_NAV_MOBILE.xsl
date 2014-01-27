<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output indent="yes" method="xml" omit-xml-declaration="yes"/>
    <xsl:template match="system-data-structure">
        <xsl:for-each select="*">
            <div>
                <xsl:attribute name="class">
                    <xsl:value-of select="'section closed '"/>
                    <xsl:value-of select="name(.)"/>
                </xsl:attribute>
                <h2 tabindex="0">
                    <span class="inner">
                        <xsl:value-of select="name(.)"/>
                    </span>
                </h2>
                <ul>
                    <xsl:for-each select="link-item">
                        <li>
                            <a href="{url}">
                                <xsl:value-of select="label"/>
                            </a>
                        </li>
                    </xsl:for-each>
                </ul>
            </div>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
