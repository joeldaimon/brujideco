<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Mis servicios</h2>
    <ul>
        <xsl:for-each select="servicios/servicio">
            <li><xsl:value-of select="@categoria"/>: <xsl:value-of select="nombre"/> por <xsl:value-of select="precio"/>.</li>
        </xsl:for-each>
    </ul>
</body>
</html>
</xsl:template>
</xsl:stylesheet>