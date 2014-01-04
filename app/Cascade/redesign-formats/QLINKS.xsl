<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="xml" omit-xml-declaration="yes"/>
	<xsl:template match="system-data-structure">
		<h2>
			<xsl:value-of select="heading"/>
		</h2>
		<div class="divider"/>
		<nav aria-labelledby="main-quicklinks" class="quick-links" role="navigation">
			<div class="row row-1">
				<xsl:call-template name="section">
					<xsl:with-param name="section" select="section[1]"/>
				</xsl:call-template>
				<xsl:call-template name="section">
					<xsl:with-param name="section" select="section[2]"/>
				</xsl:call-template>
			</div>
			<div class="row row-2">
				<xsl:call-template name="section">
					<xsl:with-param name="section" select="section[3]"/>
				</xsl:call-template>
				<xsl:call-template name="section">
					<xsl:with-param name="section" select="section[4]"/>
				</xsl:call-template>
			</div>
		</nav>
	</xsl:template>
	<xsl:template name="section">
		<xsl:param name="section"/>
		<a class="link-item" href="{$section/link}">
			<div class="link-img">
				<img alt="{$section/alt}" src="{$section/photo/link}"/>
			</div>
			<span class="link-label">
				<xsl:value-of select="$section/label"/>
			</span>
		</a>
		<xsl:value-of select="' '"/>
	</xsl:template>
</xsl:stylesheet>