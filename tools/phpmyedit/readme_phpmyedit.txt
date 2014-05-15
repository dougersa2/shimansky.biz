in phpMyEdit.class.php add

@mysql_query("SET NAMES 'utf8'");

to this function:

	function sql_connect() /* {{{ */
	{
		$this->dbh = @ini_get('allow_persistent')
			? @mysql_pconnect($this->hn, $this->un, $this->pw)
			: @mysql_connect($this->hn, $this->un, $this->pw);
			
			@mysql_query("SET NAMES 'utf8'");
			
	} /* }}} */
	
also change:

		//shimansky
		//set_magic_quotes_runtime(0);
		//http://habrahabr.kz/blog/435.html
		ini_set(«magic_quotes_runtime», 0);
	
	
in phpMyEditSetup.php add	
	
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,600,400italic,700|Ubuntu+Mono:400,400italic,700&amp;subset=latin,cyrillic" /><link rel="stylesheet" href="/css/phpmyedit.css" />

instead of:

	$css_directive = <<<END
<style>
	hr.pme-hr		     { border: 0px solid; padding: 0px; margin: 0px; border-top-width: 1px; height: 1px; }
	table.pme-main 	     { border: #004d9c 1px solid; border-collapse: collapse; border-spacing: 0px; width: 100%; }
	table.pme-navigation { border: #004d9c 0px solid; border-collapse: collapse; border-spacing: 0px; width: 100%; }
	td.pme-navigation-0, td.pme-navigation-1 { white-space: nowrap; }
	th.pme-header	     { border: #004d9c 1px solid; padding: 4px; background: #add8e6; }
	td.pme-key-0, td.pme-value-0, td.pme-help-0, td.pme-navigation-0, td.pme-cell-0,
	td.pme-key-1, td.pme-value-1, td.pme-help-0, td.pme-navigation-1, td.pme-cell-1,
	td.pme-sortinfo, td.pme-filter { border: #004d9c 1px solid; padding: 3px; }
	td.pme-buttons { text-align: left;   }
	td.pme-message { text-align: center; }
	td.pme-stats   { text-align: right;  }
</style>
END;

the content of phpmyedit.css:

body{font-size:14px;font-family:'DejaVu Sans',Consolas,Verdana,Tahoma,Geneva,Arial,sans-serif;color:#333}h1,h2,h3,h4,h5,h6,strong,b{color:#666}hr.pme-hr{border:0px solid;padding:0px;margin:0px;border-top-width:1px;height:1px}table.pme-main{border:1px solid #ededed;border-collapse:collapse;border-spacing:0px;width:100%}table.pme-navigation{border:#464646 0px solid;border-collapse:collapse;border-spacing:0px;width:100%}td.pme-navigation-0,td.pme-navigation-1{white-space:nowrap}th.pme-header{color:#B9BABD;border:1px solid #ededed;padding:4px;background:#EAEAEA}td.pme-key-0,td.pme-value-0,td.pme-help-0,td.pme-navigation-0,td.pme-cell-0,td.pme-key-1,td.pme-value-1,td.pme-help-0,td.pme-navigation-1,td.pme-cell-1,td.pme-sortinfo,td.pme-filter{background:#F9F9F9;border:1px solid #ededed;text-align:left;vertical-align:top;padding:0.375em}td.pme-buttons{text-align:left}td.pme-message{text-align:center}td.pme-stats{text-align:right}a,a:hover{color:#006DC6;text-decoration:none;border-bottom:0px solid #006DC6}code{font-weight:normal;font-style:normal;padding:0;margin:0}pre{font-size:90%;padding:0;margin:0}.code{text-align:left;background-color:#EDEDED;border:0px solid #EDEDED;overflow:auto;padding:0.375em 0.5em}hr{border-color: #D1CFCF;border-style: solid ;border-width: 0;border-top-width: 1px;clear: both;height: 0;}caption,th{font-style:italic;font-weight:400;text-align:left;}table{border-top-width:0;border-right-width:0;border-bottom-color:#D1CFCF;border-bottom-style:solid;border-bottom-width:1px;border-left-color:#D1CFCF;border-left-style:solid;border-left-width:1px;}table,th,td{border-collapse:collapse;}td,th{background-color:transparent;border-top-color:#D1CFCF;border-top-style:solid;border-top-width:1px;border-right-color:#D1CFCF;border-right-style:solid;border-right-width:1px;border-bottom-width:0;border-left-width:0;text-align:left;vertical-align:top;padding:.375em;}#wrapper{width:940px;margin:0 auto;}

