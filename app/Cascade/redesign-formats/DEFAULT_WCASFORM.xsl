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
                        <div>
                            <style scoped="scoped" type="text/css">
                                @import url(https://static.forms.northwestern.edu/1/css/bootstrap.min.css);
                                @import url(https://static.forms.northwestern.edu/1/css/bootstrap-responsive.min.css);
                                @import url(https://static.forms.northwestern.edu/1/css/northwestern-bootstrap.css);
                                @import url(https://static.forms.northwestern.edu/1/css/northwestern-forms.css);
                                @import url(https://static.forms.northwestern.edu/1/css/northwestern-forms-print.css);
                                @import url(https://static.forms.northwestern.edu/1/css/northwestern-forms-responsive.css);
                                @import url(https://static.forms.northwestern.edu/1/css/northwestern-layout.css);
                                @import url(https://static.forms.northwestern.edu/1/css/northwestern-layout-responsive.css);
                                @import url(https://static.forms.northwestern.edu/1/css/weinberg.css);
                            </style>
                            <div id="form-container"> </div>                          
                        </div>
                        
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>