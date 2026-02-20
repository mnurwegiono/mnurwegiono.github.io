<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                        font-size: 14px;
                        color: #333;
                        background-color: #f9f9f9;
                        padding: 20px;
                    }
                    h1 {
                        color: #2c3e50;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        margin-bottom: 20px;
                        color: #666;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                        background: #fff;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                        border-radius: 4px;
                        overflow: hidden;
                    }
                    th {
                        background-color: #007bff;
                        color: #fff;
                        text-align: left;
                        padding: 12px 15px;
                        font-weight: 600;
                    }
                    td {
                        padding: 10px 15px;
                        border-bottom: 1px solid #eee;
                    }
                    tr:hover {
                        background-color: #f1f1f1;
                    }
                    a {
                        color: #007bff;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    .count {
                        font-weight: bold;
                        color: #007bff;
                    }
                </style>
            </head>
            <body>
                <h1>XML Sitemap</h1>
                <p>
                    Sitemap ini berisi <span class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span> URL.
                    File ini dibuat untuk mesin pencari seperti Google agar dapat mengindeks konten website dengan lebih baik.
                </p>
                
                <table>
                    <thead>
                        <tr>
                            <th width="60%">URL Location</th>
                            <th width="15%">Last Modified</th>
                            <th width="15%">Change Frequency</th>
                            <th width="10%">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="sitemap:urlset/sitemap:url">
                            <tr>
                                <td>
                                    <a href="{sitemap:loc}" target="_blank">
                                        <xsl:value-of select="sitemap:loc"/>
                                    </a>
                                </td>
                                <td>
                                    <xsl:value-of select="sitemap:lastmod"/>
                                </td>
                                <td>
                                    <xsl:value-of select="sitemap:changefreq"/>
                                </td>
                                <td>
                                    <xsl:value-of select="sitemap:priority"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
