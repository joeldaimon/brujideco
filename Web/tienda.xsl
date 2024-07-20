<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Mis productos</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Producto</th>
      <th style="text-align:left">Precio</th>
      <th style="text-align:left">Cualidades</th>
      <th style="text-align:left">Stock</th>
    </tr>
    <xsl:for-each select="tienda/producto">
    <tr>
      <td><xsl:value-of select="nombre"/></td>
      <td><xsl:value-of select="precio"/></td>
      <td><xsl:value-of select="cualidades"/></td>
      <td><xsl:value-of select="stock"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>